# Angular Library Starter
The complete Angular Library starter.

## Features:

  - Minimal configuration. tsconfig, AOT, webpack config are all automated.
  - Optional Scoping (`npm install @my-scope/my-lib`)
  - Multiple library repository (` @my-scope/my-lib`, ` @my-scope/her-lib`, ... all in the same repo)
  - Package extensions.
  Ship packages with an opt-in internal package (e.g: `@angular/core/testing`), extension are built separately.
  - Build hooks, tap in to alter package.json, tsconfig, rollup config etc... (globally and per package)
  - Webpack powered.
  - Outputs:
      - Flatten ES Modules (es5, es2015)
      - Rollup UMD bundle + minified version + gzipped version
      - Source maps, complete and accurate.
  - Flat Angular compiler modules - 1 `metadata.json` file.
  - `@angular` grade npm packages, tree shake compatible.
  - Resource inlining (html, css, scss) for source code + **metadata.json**
  - Resource inlining driven by webpack, no fuzzy tasks, use your favourite webpack loaders.
  - Dedicated demo app, write as if your library is a module (no relative imports)
  - Simulation mode - Run the demo app on the **prod compiled library** as if its in `node_modules`, in dev or prod mode.
  - E2E + Simulation - Run E2E in simulation mode
  - JEST unit testing

---

## Quick start
**Make sure you have Node version >= 6.0 and NPM >= 3**
> Clone the repo using same instruction as in [AngularClass/angular-starter](https://github.com/AngularClass/angular-starter)


```bash
# clone the repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/shlomiassaf/angular-library-starter.git

# change directory to the repo
cd angular-library-starter

# WINDOWS only. In terminal as administrator
npm install -g node-pre-gyp

# install the repo with npm
npm install

# You can also use yarn

# if you're in China use cnpm
# https://github.com/cnpm/cnpm
```

The repo comes with a demo app and a simple library call **my-lib**

Fire up the dev server with both demo app and library bundled in dev mode - JIT.

```bash
npm run start
```

go to [http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost:3000](http://localhost:3000) in your browser

You can now make changes to the demo app or the libraries and see it live
in your browser.


## Library commands
---
 NPM scripts as defined in **angular-starter** did not change.
 The added Library commands are all prefixed with **lib:**

> For example, `npm run test` will fire up karma and run unit tests for **the demo** app.
`npm run lib:test` will fire up **jest** and run unit tests for libraries only.

---

### lib:sync
  Sync configuration files.
  This command align configuration files with the library configuration.
  Most of the sync concerns path mapping for typescript and jest.

  Run this command after each change to a package configuration that results in a file structure change.
  This includes adding, removing or changing a package name, Changing the top-level scope, etc..

  The **sync** process rewrites the `paths` mapping in `tsconfig.json`, you
  can use **hooks** to tap into this process and add custom path mappings.
  This will make sure that your mappings are re-generated on each rewrite.


### lib:build
  Fires up the build process (release) for all libraries.
  To run build for a specific library: `npm run lib:build -- --select my-lib`

  Build output for library is in the root folder under `dist_package` folder.**

### lib:build:sim
  Fires up the **library build process** and once done fires an AOT production
  build to the demo app **in simulation mode**
  Simulation mode: The demo app will consume the compiled library and not
  the source code, having an AOT bundle exactly the same to having the library
  in `node_modules`. Completely native, no npm link or hard copy to `node_modules`.

  > This command is equivilant to running `lib:build` and then `npm run build:aot:prod -- --env.sim`

### lib:test
  Run unit tests (JEST) for all libraries.

### lib:test:watch
  Run unit tests (JEST) in watch mode for all libraries.

### lib:start:sim
  Fires up the **library build process** and once done fires the dev server
  with the demo app **in simulation mode**

  This is similar to **lib:build:sim** but the demo application is running
  in dev mode with JIT compiler. The library however is AOT compiled so
  it is a good way to test your library, after compilation, working with JIT.


---

The scripts, combined with the original **angular-starter** scripts can compose a full CI process:

For example, consider the following workflow:

  - `lib:build:sim` - run an AOT build for both lib and demo app
  - `npm run lib:test` - run library unit tests
  - `npm run test` - run demo app integration tests (if applicable)
  - `npm run e2e` - run E2E tests

If all passes, your library is good to publish.

> E2E tests run on the demo app, make sure to focus your tests on the library
and it's UI components, less on the demo app.


---

## File Structure
The root folder for all source files (demo app + libraries) is `/src`

The demo application is fixed to the directory **demo**

All other directories under `src` are libraries, the name of each folder
must correspond to the value/s in the global library configuration `packages` property.

> For scoped packages, all packages are inside a directory named after the scope and
the scope directory is in `src`.

For the following configuration:

```json
"libConfig": {
    "packages": [
      "my-lib",
      "my-lib-N"
    ]
  }
```

This should be the file structure:

```
angular-library-starter/
 ├*─src/                           * Root folder for all source files
 │   ├*─demo/                      * demo app root.
 │   │   ├──index.html             * Index.html: where we generate our index page
 │   │   ├──main.browser.ts        * our entry file for our browser environmen
 │   │   ├──app/                   * WebApp: folder
 │   │   │  └──...                 ╔═══════════════════════════════════╗
 │   │   │                         ║                                   ║
 │   │   ├──styles/                ║ See the angular-starter reop for  ║
 │   │   │                         ║        details information        ║
 │   │   ├──assets/                ║                                   ║
 │   │   └──...                    ╚═══════════════════════════════════╝
 │   │
 │   ├──my-lib/                    * Library root folder
 │   │   ├*─src/                   * Library source code
 │   │   │  ├──...                 * Library content
 │   │   │  ├──module.ts           * NgModule declration module
 │   │   │  └──index.ts            * Library entry files (configurable)
 │   │   │
 │   │   ├──test/                  * Unit tests
 │   │   │  └──...spec.ts
 │   │   │
 │   │   ├──build_hooks.ts         * Local script to intercept and interact with the build process
 │   │   └──package.json           * Local configuration and manifest data
 │   │
 │   │
 │   ├──my-lib-N/                  ╔═══════════════════════════════════╗
 │   │   ├*─src/                   ║      You can manage mutiple       ║
 │   │   │  ├──...                 ║    libraries in the same repo     ║
 │   │   │  ├──module.ts           ║    and/or under the same scope    ║
 │   │   │  └──index.ts            ║                                   ║
 │   │   ├──build_hooks.ts         ║                                   ║
 │   │   └──package.json           ╚═══════════════════════════════════╝
```

Some notes:

 - This is a fairly simple setup. For Scope and extensions scroll down.

 - Unit tests are in the `test` folder, sibling to `src`. This is recommendation.

 - From the above it comes clear that you can't name a package `demo` (unless it is scoped)
I believe it should be ok. If however you feel the urge to do so you can start following
the configuration files and changing the demo directory into something of your choice.

  - This section focused on the file structure for the code, for a complete
structure review for the whole repo see [AngularClass/angular-starter](https://github.com/AngularClass/angular-starter#file-structure)

Here is the output of a single library setup, identical to to above but with only
one library. (my-lib-N is omitted)

![image](https://user-images.githubusercontent.com/5377501/27282174-9299ce48-54f7-11e7-9592-11fb92c0aa24.png)

---

## Library package configuration

There are 2 locations for configuration:

#### Global Library configuration

Defines the scope (optional) and libraries in this repo.

```ts
export interface GlobalLibConfig {
  scope?: string;
  packages: string[]
}
```

**Global configuration is set in the `package.json` file at the root of this repo**
```json
"libConfig": {
    "packages": [
      "my-lib"
    ]
  }
```

#### Local Library configuration

Defines the entry point (optional), resource inline and extension libraries for a library..

```ts
export interface LocalLibConfig {

  /**
   * The entry file name, without extension.
   * defaults to 'index' if not set.
   *
   * Use in multi-library configuration to avoid AOT compilation hell with 'index' addition
   */
  entry?: string;

  /**
   * When true, all javascript files (TS output) with Angular components that has a URI template resources
   * (templateUrl with HTML and styleUrls with css, scss) will get be inlined.
   *
   * i.e. "templateUrl" will get replaced with "template" and "styleUrls" with "styles".
   *
   * This is similar to what "angular2-template-loader" does but instead of a require reference, it will be the raw template.
   *
   * Each resource will go through webpack's loader chain, this means you can use scss and it will get processed.
   * Any loader you put in the chain will work so you can achieve complex things.
   *
   * ADDITIONALLY, all of angular's "metadata.json" files will go through the same process
   * inlining the resources into them.
   *
   * > The end result after compilation is 100% similar to result in dev mode,
   * as long as the loaders and their order are identical in both configurations.
   *
   * > Setting "inlineResources" to true will activate template code generation by the angular compiler (skipTemplateCodegen=false)
   * Template code generation is turned off by default so make sure to active "inlineResources" if you are
   * using "templateUrl" / "styleUrls" in your library components.
   */
  inlineResources?: boolean;

  /**
   * Internal extensions for the library.
   * If a library declares a "libExtensions" property in it's internal package.json file
   * it is considered as instructions for creating internal umd bundles.
   *
   * THIS OBJECT IS SUBJECT TO CHANGE.
   * Most probably it will be an array of string where metadata for each extension
   * will be set inside it's package.json and not in the parent.
   */
  libExtensions?: Array<LibraryExtension>;
}

```

**Local configuration is set in the `package.json` file at the root of each library**

```json
{
  "version": "1.0.0",
  "description": "Sample Library",
  "keywords": [ ],
  "libConfig": {
    "inlineResources": true
  }
}
```

### Scope
In npm scope is a simple namespace, here is an example to apply the scope **@king**:

```json
"libConfig": {
    "scope": "@king",
    "packages": [
      "my-lib",
      "my-lib-N"
    ]
  }
```

This should be the file structure:

```
angular-library-starter/
 ├*─src/
 │   ├*─demo/
 │   │   └──...
 │   └──@king
 │       ├─my-lib/
 │       │  ├*─src/
 │       │  │ ├──...
 │       │  │ ├──module.ts
 │       │  │ └──index.ts
 │       │  ├──build_hooks.ts
 │       │  └──package.json
 │       │
 │       └──my-lib-N/
 │          ├*─src/
 │          │ ├──...
 │          │ ├──module.ts
 │          │ └──index.ts
 │          ├──build_hooks.ts
 │          └──package.json
```

### Inline resources
When writing components that has html and style templates it is best to use `templateUrl` and `styleUrls` or our component becomes unreadable.

This requires some work since the AOT compiler does not inline them for us.

While this is not a trivial task the starter got you covered.
And thats not all, before inlining the resources it will also pass them through the
loader chain so SCSS, CSS and HTML files will all go through your favourite processors.

Due to the internals of the AOT compiler it is not enough just to inline the resources
into the JS source code but also to inline them into the `metadata.json` files. The starter will do that as well.

To instruct the starter to inline a library on build you need to set the `inlineResources` property to true
in the **local configuration**

```json
{
  "version": "1.0.0",
  "description": "Sample Library",
  "keywords": [ ],
  "libConfig": {
    "inlineResources": true
  }
}

```

> Inlining is disabled by default, make sure you enable if your library has components with resources.

### Multiple Libraries
 TODO - most of it is already explained.

### Library extensions
A Library extension is a library inside a library.
An extension goes through the same build process a parent library does, the
only difference is that it is not published as a unique package, it comes with the parent NPM packages
and to access it, a deep import URI is required.

For example, the testing frameworks in each `@angular` package is an internal
package, an extension. Not part of the angular package bundle but you can opt-in to it
if you want.

```ts
import { inject, TestBed } from '@angular/core/testing';
````

**Notice the deep import? this is by design.**

The `testing` namespace is not part of the `@angular/core` **bundle** even though it might
seems like it is. An internal of `@angular/core` will be under `@angular/core/src/...`

The `testing` extension is part of the NPM package but it will not load by default, a specific import URI is required.


The starter adopts this structure.

An extensions is a top-level path inside the library's root directory that is:

  - Not the `src` directory (which is the main package)
  - Listed in the **libExtensions** config section in the local configuration

Note the terminology, `top-level path`, it can be a a single directory
or a path starting from the root of the library.

#### Lets walk through an example:

We are building a library called **my-lib** and we publish it under the scope `@king`

**my-lib** has 1 extensions and 2 plugins:

  - **testing**
  - **plug-a**
  - **plug-b**

We might have a lot of plugins in the future so we want to group all plugins
inside a container directory called `plugins`.

> Extensions and plugins are similar in structure, they only differ by their logical intent.
The testing extensions is a tool to use while unit testing and not to be included in a production build.
Plugins are for production, they are opt-in packages that provide functionality to the main package but is not mandatory.
This is the terminology I use, you might choose to name it differently.


```
angular-library-starter/
 ├*─src/
 │   ├*─demo/
 │   │   └──...
 │   │
 │   └─@king                        * The scope for all libraries
 │     │
 │     └─my-lib/                    * Main library - root
 │       │
 │       ├*──src/                   * Source code - Main library
 │       │   ├──...
 │       │   ├──module.ts
 │       │   └──my-lib-entry.ts
 │       │
 │       ├───test/                  * Unit tests - Main library (src)
 │       │   └──...spec.ts
 │       │
 │       │          ════════════════════════════════════════════════════
 │       │
 │       ├───testing/               * Testing extension
 │       │   │
 │       │   ├*──src/               * Source code - Testing extension
 │       │   │   ├──...
 │       │   │   ├──module.ts
 │       │   │   └──index.ts
 │       │   │
 │       │   ├───test/              * Unit tests - Testing extension
 │       │   │    └──...spec.ts
 │       │   │
 │       │   ├──build_hooks.ts      * Hook interaction - Testing extension
 │       │   └──package.json
 │       │
 │       │          ════════════════════════════════════════════════════
 │       │
 │       ├───plugins/               * Plugins CONTAINER
 │       │   │
 │       │   ├───plug-a/            * Plug-A extension
 │       │   │   │
 │       │   │   ├*──src/           * Source code - Plug-A extension
 │       │   │   │   ├──...
 │       │   │   │   ├──module.ts
 │       │   │   │   └──index.ts
 │       │   │   │
 │       │   │   ├───test/          * Unit tests - Plug-A extension
 │       │   │   │   └──...spec.ts
 │       │   │   │
 │       │   │   ├──build_hooks.ts  * Hook interaction - Plug-A extension
 │       │   │   └──package.json
 │       │   │
 │       │   │
 │       │   └───plug-b/            * Plug-B extension
 │       │       │
 │       │       ├*──src/           * Source code - Plug-B extension
 │       │       │   ├──...
 │       │       │   ├──module.ts
 │       │       │   └──index.ts
 │       │       │
 │       │       ├───test/          * Unit tests - Plug-B extension
 │       │       │   └──...spec.ts
 │       │       │
 │       │       ├──build_hooks.ts  * Hook interaction - Plug-B extension
 │       │       └──package.json
 │       │
 │       │          ════════════════════════════════════════════════════
 │       │
 │       │
 │       ├──build_hooks.ts          * Hook interaction - Main package
 │       └──package.json
```

#### The configuration objects

`package.json` (root)
```json
"libConfig": {
    "scope": "@king",
    "packages": [ "my-lib" ]
  }
```

`src/@king/my-lib/package.json` (library main)

```json
{
  "version": "1.0.0",
  "description": "Sample Library",
  "libConfig": {
      "entry": "my-lib-entry",
      "libExtensions": [
        {
          "name": "testing"
        },
        {
          "name": "plug-a",
          "dir": "plugins/plug-a"
        },
        {
          "name": "plug-b",
          "dir": "plugins/plug-b"
        }
      ]
    }
}
```

`src/@king/my-lib/testing/package.json`

```json
{
  "version": "1.0.0",
  "description": "Testing module"
}
```

`src/@king/my-lib/plugins/plug-a/package.json`

```json
{
  "version": "1.0.0",
  "description": "A plugins that is always A"
}
```

`src/@king/my-lib/plugins/plug-b/package.json`

```json
{
  "version": "1.0.0",
  "description": "A plugins that is always B"
}
```


To access `plug-b` from an angular application:
```ts
import { ... } from '@king/my-lib/plug-b';
```

### Extensions and bundling:
Bundling FESM and UMD modules requires a manual definition of the dependency graph.
This is to prevent duplicate code, so that `my-lib` which uses `@angular/core` will
not include `@angular/core` in it's production bundle.

This is also true for extensions, they are like any other package.

Remember to define the inter-dependency graph for extensions and multi-library configuration
and of course 3rd party dependencies.

This is reviewed in-depth in thr **Hooks** section.

---

## Hooks
  TODO DOCS
### TL;DR

   - Hooks run using a script, its name is always `build_hooks`
   - It can be TypeScript or JS file.
   - Hooks can be global, local or both
   - **Global Hooks**
     - Run BEFORE local hooks
     - `build_hooks` script is in the root of the project
   - **Local Hooks**
     - Run AFTER the global hook
     - `build_hooks` script is in the root of the library (sibling to it's `src` directory)

### Hooks:

#### packageJSON
Executes before saving the manifest file but after merging the local manifest with the global manifest.
Params: package.json object

#### rollupUMD
Executes before running the rollup bundling process for UMD.
Params: Limited Rollup config object

#### rollupFESM
Executes before running the rollup bundling process for FESM (es5 and es2015).
Params: Limited Rollup config object

#### tsconfig
Executes before saving `tsconfig.json` to disk and executing webpack.
Use this hook to modify `tsconfig` before saving it to disk and using it as the compilation configuration.
Params: tsconfig object

> `lib:sync` invokes the global hook for `tsconfig` with the main `tsconfig.json`.
Since all other `tsconfig` files inherit from it, use this global hook to add custom paths and TS configuration.

#### jestConfig
Executes before saving `jest.library.config.json` to disk.

GLOBAL HOOK only.

Params: jest config object

> `lib:sync` invokes the global hook for `jest.library.config` with the main `jest.library.config.json`.
This is the place to add custom JEST configuration and additional (custom) path mappings.

### Hooks blueprint:
```js
module.exports.packageJSON = function(pkgJson) { };

module.exports.jestConfig = function(jestConfig) { };

module.exports.tsconfig = function tsconfig(config) {}

module.exports.rollupFESM = function(rollupConfig) { };

module.exports.rollupUMD = function(rollupConfig) { };
```

___

## Manifest
  TODO DOCS

---
# Based on the amazing work from
[AngularClass/angular-starter](https://github.com/AngularClass/angular-starter)

___


## TODO:
  - Documentation
  - Examples for popular scenarios and complex setups
  - Doc system
  - Expose release tools to NPM scripts (detect, commit)
  - Build more release tools

---

# License
 [MIT](/LICENSE)
