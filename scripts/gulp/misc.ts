import * as jsonfile from 'jsonfile';
import * as util from '../util';


@util.GulpClass.Gulpclass()
export class Gulpfile {

  @util.GulpClass.Task({
    name: 'misc:syncConfig',
    desc: `Sync the main tsconfig file (tsconfig.json) and JEST configuration file with paths information.
This is required after each change to a package configuration the results in a file structure change.  
This includes adding, removing or changing a package name. Changing the top-level scope, etc..`
  })
  syncConfig() {
    const tsConfig = jsonfile.readFileSync(util.root('tsconfig.json'));
    tsConfig.compilerOptions.paths = util.tsConfigPaths();
    util.tryRunHook('./', 'tsconfig', tsConfig);
    jsonfile.writeFileSync(util.root('tsconfig.json'), tsConfig, {spaces: 2});

    const jestConfig = jsonfile.readFileSync(util.root('jest.base-config.json'));
    jestConfig.moduleNameMapper = util.jestAlias();
    util.tryRunHook('./', 'jestConfig', jestConfig);
    jsonfile.writeFileSync(util.root('jest.base-config.json'), jestConfig, {spaces: 2});
  }

}