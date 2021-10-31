# fs-walk
![version](https://img.shields.io/badge/dynamic/json.svg?url=https://raw.githubusercontent.com/NodeSecure/fs-walk/master/package.json&query=$.version&label=Version)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/NodeSecure/fs-walk/commit-activity)
[![Security Responsible Disclosure](https://img.shields.io/badge/Security-Responsible%20Disclosure-yellow.svg)](https://github.com/nodejs/security-wg/blob/master/processes/responsible_disclosure_template.md
)
[![mit](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/NodeSecure/fs-walk/blob/master/LICENSE)

Modern FileSystem (fs) utilities to lazy walk directories Asynchronously (but also Synchronously). Under the hood the code has been created using ES6 Generators.

## Features

- Lazy walk by using [fs.opendir](https://nodejs.org/api/fs.html#fs_fspromises_opendir_path_options).
- Zero dependencies.
- Enforce usage of Symbols for CONSTANTS.
- Synchronous API.

> Performance over some of the features is a non-goal.

## Requirements
- [Node.js](https://nodejs.org/en/) v14 or higher

## Getting Started

This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm i @nodesecure/fs-walk
# or
$ yarn add @nodesecure/fs-walk
```

## Usage example

```js
import path from "path";
import { walk } from "@nodesecure/fs-walk";

for await (const [dirent, absoluteFileLocation] of walk(".")) {
  if (dirent.isFile()) {
    console.log(absoluteFileLocation);
    console.log(path.extname(absoluteFileLocation));
  }
}
```

## API

```ts
export interface WalkOptions {
  extensions?: Set<string>;
}

export type WalkResult = [dirent: fs.Dirent, absoluteFileLocation: string];
```

### walk(directory: string, options?: WalkOptions): AsyncIterableIterator< WalkResult >
Asynchronous walk.

### walkSync(directory: string, options?: WalkOptions): IterableIterator< WalkResult >
Synchronous walk (using readdirSync under the hood instead of opendir).

For example fetching JavaScript files for a given location:
```js
import { walkSync } from "@nodesecure/fs-walk";

const javascriptFiles = [...walkSync("./someDirectory", { extensions: new Set([".js"]) }))]
    .filter(([dirent]) => dirent.isFile())
    .map(([, absoluteFileLocation]) => absoluteFileLocation);

console.log(javascriptFiles);
```


## Contributors ✨

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/thomas-gentilhomme/"><img src="https://avatars.githubusercontent.com/u/4438263?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gentilhomme</b></sub></a><br /><a href="https://github.com/NodeSecure/fs-walk/commits?author=fraxken" title="Code">💻</a> <a href="https://github.com/NodeSecure/fs-walk/commits?author=fraxken" title="Documentation">📖</a> <a href="https://github.com/NodeSecure/fs-walk/pulls?q=is%3Apr+reviewed-by%3Afraxken" title="Reviewed Pull Requests">👀</a> <a href="#security-fraxken" title="Security">🛡️</a> <a href="https://github.com/NodeSecure/fs-walk/issues?q=author%3Afraxken" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/Rossb0b"><img src="https://avatars.githubusercontent.com/u/39910164?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nicolas Hallaert</b></sub></a><br /><a href="https://github.com/NodeSecure/fs-walk/commits?author=Rossb0b" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License
MIT
