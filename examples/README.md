# Examples of library setups.

### Example: `scoped-multi-library`

Scope: `@corp`
There are 3 libraries:

  - @corp/core
  - @corp/common
  - @corp/rare

This is a simple example for scope and multi-library configuration.
The libraries does not depend on each other so there is no complex setup.

### Example: `extensions`

Scope: `@corp`
There are 3 libraries and 2 extensions:

  - @corp/core

    - extension: `@corp/core/testing`
    - extension: `@corp/core/plugins/core-plus`

  - @corp/common
  - @corp/rare

**Internal dependencies:**

`@corp/core/plugins/core-plus` imports `@corp/core`

`@corp/common` imports `@corp/core/plugins/core-plus` and `@corp/core`

#### Features implemented:
  - Extensions / Plugins

  See [CORE PACKAGE EXAMPLE](extensions/src/@corp/core)

  - Custom entry file

  `@corp/core`, `@corp/common` and `@corp/core/plugins/core-plus` define a custom entry file.

  Also see comment below...

  - Inline Resource

  `@corp/core` and `@corp/common` have resource referenced, "inlineResources" was set to true for both.

  - Hooks: Dependency graph mapping

  Since there are internal dependencies we need to manually add them.
  A library that reference an internal library is required to declared it.
  In `build_hooks` script for `@corp/common` and `@corp/core/plugins/core-plus`

> This demo also demonstrate the bug in `tsickle` when two local packages reference each other, they both MUST have non `index.ts` entry file.
This is why `@corp/core` `@corp/common` and `@corp/core/plugins/core-plus` have a custom entry file.
https://github.com/angular/tsickle/issues/481#issuecomment-298686674
https://github.com/angular/tsickle/commit/7b0b7d4371f750b17de8de0263e475b5a147266f
