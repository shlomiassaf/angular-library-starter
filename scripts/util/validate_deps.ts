import { satisfies } from 'semver';
import { version as TYPESCRIPT_VERSION } from 'typescript';
import { VERSION as COMPILER_CLI_VERSION } from '@angular/compiler-cli';

export function validateDeps(): { warn?: string[], error?: string[] } {
  const result = {
    warn: [],
    error: []
  };

  if (satisfies(COMPILER_CLI_VERSION.full, '<5.0.0') ) {
    result.error.push(`Angular Library Starter supports angular version 5 or greater, please upgrade.`);
  } else if (satisfies(COMPILER_CLI_VERSION.full, '<=5.0.2') && satisfies(TYPESCRIPT_VERSION, '>=2.5.0')) {
    result.error.push(`Angular ${COMPILER_CLI_VERSION.full} supports TypeScript 2.4.x or lower, Library will not build properly.`);
  } else {
    if (satisfies(TYPESCRIPT_VERSION, '<2.4.2')) {
      result.warn.push(`You are using TypeScript ${TYPESCRIPT_VERSION}. TypeScript ~2.4.2 is recommended, please upgrade.`);
    }
  }

  if (result.warn.length === 0) {
    delete result.warn;
  }
  if (result.error.length === 0) {
    delete result.error;
  }
  return result;
}
