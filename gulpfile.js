// try { require('gulplog').info = function() {}; } catch (err) {}
// try { require('fancy-log').apply = function() {}; } catch (err) {}

const path = require('path');
const gulp = require('gulp');
const runSequence = require('run-sequence');
const chalk = require('chalk');



require('ts-node/register');
require('require-dir')(path.join(__dirname, 'scripts', 'gulp'));

const util = require('./scripts/util');

function filterPackageSelection(packages) {
  const idx = process.argv.indexOf('--select');

  if (idx > -1) {
    if (!process.argv[idx+1]) {
      throw new Error('Invalid library selection.')
    }
    const selected = process.argv[idx + 1].split(',').map( v => v.trim() );
    selected.forEach( s => {
      if (packages.indexOf(s) === -1) {
        throw new Error(`Could not apply selection, "${s}" is not a known package name.`);
      }
    });
    packages = selected;
  }

  return packages;
}


gulp.task('compile', ['clean:dist'], (done) => {
  try {
    let timeStart;

    const packages = filterPackageSelection(util.libConfig.packages.slice())
      .map( pkgName => util.buildPackageMetadata(pkgName) );

    if (packages.length === 0) {
      return done(new Error('Invalid configuration, no packages found.'));
    }

    if (packages.length > 1) {
      util.log(`Compiling libraries:\n\t- ${packages.map( p => p.dirName ).join('\n\t- ')}`);
    }

    // const cleanup = () => Promise.resolve();
    const cleanup = () => util.cleanup().catch( err => {});
    const getName = () => util.currentPackage().parent ? util.currentPackage().parent.dirName : util.currentPackage().dirName;

    const errHandler = (err) => {
      if (err) {
        util.log(chalk.red(`ERROR: ${err.message}`));
        cleanup().then( () => done(err) );
      } else {
        const timeEnd = process.hrtime(timeStart);

        util.log(chalk.green(
`=============================================
Compile OK: ${getName()} (${Math.round((timeEnd[0] * 1000) + (timeEnd[1] / 1000000))} ms)
=============================================`));

        if (util.currentPackage().libExtensions) {
          util.log(`Extensions found (${util.currentPackage().libExtensions.length}), compiling...`);
          util.buildExtensionMetadata(util.currentPackage())
            .forEach( ext => packages.unshift(ext) );
        }

        if (packages.length > 0) {
          util.currentPackage(packages.shift());
          run();
        } else {
          util.log('No more libraries to compile. Done!');
          cleanup().then( () => done() );
        }
      }
    };


    const run = () => {
      const curPkg = util.currentPackage();

      util.saveTempTsConfig(curPkg);

      if (curPkg.parent) {
        util.log(chalk.yellow(`\n\n=============================================
Compiling extension ${curPkg.dirName} for library ${curPkg.parent.dirName}
=============================================\n\n`));
      } else {
        util.log(chalk.yellow(`\n\n=============================================
Compiling library ${curPkg.dirName}
=============================================\n\n`));
      }


      timeStart = process.hrtime();

      runSequence(
        'build:webpack',
        'build:rollup:fesm',
        'build:fesm:es5',
        'build:rollup:umd',
        // 'sourcemaps',
        'minifyAndGzip',
        'pureAnnotation',
        'manifest',
        errHandler
      );
    };

    util.currentPackage(packages.shift());
    run();
  } catch (err) {
    done(err);
  }
});

gulp.task('build', ['compile']);