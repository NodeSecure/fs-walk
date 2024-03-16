# fs-walk

![version](https://img.shields.io/badge/dynamic/json.svg?style=for-the-badge&url=https://raw.githubusercontent.com/NodeSecure/fs-walk/main/package.json&query=$.version&label=Version)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge)](https://github.com/NodeSecure/fs-walk/graphs/commit-activity)
[![OpenSSF
Scorecard](https://api.securityscorecards.dev/projects/github.com/NodeSecure/fs-walk/badge?style=for-the-badge)](https://api.securityscorecards.dev/projects/github.com/NodeSecure/fs-walk)
[![mit](https://img.shields.io/github/license/NodeSecure/fs-walk.svg?style=for-the-badge)](https://github.com/NodeSecure/fs-walk/blob/main/LICENSE)
![build](https://img.shields.io/github/actions/workflow/status/NodeSecure/fs-walk/node.js.yml?style=for-the-badge)

Modern FileSystem (fs) utilities to lazy walk directories Asynchronously (but also Synchronously). Under the hood the code has been created using ES6 Generators.

## Features

- Lazy walk by using [fs.opendir](https://nodejs.org/api/fs.html#fs_fspromises_opendir_path_options).
- Zero dependencies.
- Enforce usage of Symbols for CONSTANTS.
- Synchronous API.

> [!NOTE]
> Performance over some of the features is a non-goal.

## Requirements

- [Node.js](https://nodejs.org/en/) v18 or higher

## Getting Started

This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm i @nodesecure/fs-walk
# or
$ yarn add @nodesecure/fs-walk
```

## Usage example

```js
import path from "node:path";
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

[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/thomas-gentilhomme/"><img src="https://avatars.githubusercontent.com/u/4438263?v=4?s=100" width="100px;" alt="Gentilhomme"/><br /><sub><b>Gentilhomme</b></sub></a><br /><a href="https://github.com/NodeSecure/fs-walk/commits?author=fraxken" title="Code">💻</a> <a href="https://github.com/NodeSecure/fs-walk/commits?author=fraxken" title="Documentation">📖</a> <a href="https://github.com/NodeSecure/fs-walk/pulls?q=is%3Apr+reviewed-by%3Afraxken" title="Reviewed Pull Requests">👀</a> <a href="#security-fraxken" title="Security">🛡️</a> <a href="https://github.com/NodeSecure/fs-walk/issues?q=author%3Afraxken" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Rossb0b"><img src="https://avatars.githubusercontent.com/u/39910164?v=4?s=100" width="100px;" alt="Nicolas Hallaert"/><br /><sub><b>Nicolas Hallaert</b></sub></a><br /><a href="https://github.com/NodeSecure/fs-walk/commits?author=Rossb0b" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://dev.to/antoinecoulon"><img src="https://avatars.githubusercontent.com/u/43391199?v=4?s=100" width="100px;" alt="Antoine Coulon"/><br /><sub><b>Antoine Coulon</b></sub></a><br /><a href="#maintenance-antoine-coulon" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/fabnguess"><img src="https://avatars.githubusercontent.com/u/72697416?v=4?s=100" width="100px;" alt="Kouadio Fabrice Nguessan"/><br /><sub><b>Kouadio Fabrice Nguessan</b></sub></a><br /><a href="#maintenance-fabnguess" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jochri3"><img src="https://avatars.githubusercontent.com/u/23065918?v=4?s=100" width="100px;" alt="Christian Lisangola"/><br /><sub><b>Christian Lisangola</b></sub></a><br /><a href="https://github.com/NodeSecure/fs-walk/commits?author=jochri3" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/PierreDemailly"><img src="https://avatars.githubusercontent.com/u/39910767?v=4?s=100" width="100px;" alt="PierreDemailly"/><br /><sub><b>PierreDemailly</b></sub></a><br /><a href="#maintenance-PierreDemailly" title="Maintenance">🚧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

MIT
