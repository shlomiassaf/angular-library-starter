# Angular Library Starter
The complete Angular Library starter.

Features:

  - Minimal configuration. tsconfig, AOT, webpack config are all automated.
  - Optional Scoping (`npm install @my-scope/my-lib`)
  - Multiple library repository (` @my-scope/my-lib`, ` @my-scope/her-lib`, ... all in the same repo)
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

Documentation soon...


___

# Based on the amazing work from - [AngularClass/angular-starter](https://github.com/AngularClass/angular-starter)

___

# License
 [MIT](/LICENSE)
