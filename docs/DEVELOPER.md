### This document is reserved to address the workarounds of issues faced when developing

> ### Path Aliases for compilation

This is resolved using [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver). If you need a new alias,

1. Insert a new alias keypair in [babel.config.js](../babel.config.js).
2. For Editor autocompletion configure [path mapping](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping) in [tsconfig.json](../tsconfig.json).