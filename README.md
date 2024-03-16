<p align="center">
  <img alt="fs-walk" src="https://github.com/NodeSecure/rfcs/assets/4438263/175b9aae-15fb-4374-acd9-da8401f25ea5" width="650">
</p>

<p align="center">
    <a href="https://github.com/NodeSecure/fs-walk">
      <img src="https://img.shields.io/github/package-json/v/NodeSecure/fs-walk?style=for-the-badge" alt="npm version">
    </a>
    <a href="https://github.com/NodeSecure/fs-walk">
      <img src="https://img.shields.io/github/license/NodeSecure/fs-walk?style=for-the-badge" alt="license">
    </a>
    <a href="https://api.securityscorecards.dev/projects/github.com/NodeSecure/fs-walk">
      <img src="https://api.securityscorecards.dev/projects/github.com/NodeSecure/fs-walk/badge?style=for-the-badge" alt="ossf scorecard">
    </a>
    <a href="https://github.com/NodeSecure/fs-walk/actions?query=workflow%3A%22Node.js+CI%22">
      <img src="https://img.shields.io/github/actions/workflow/status/NodeSecure/fs-walk/node.js.yml?style=for-the-badge" alt="github ci workflow">
    </a>
</p>

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

export type WalkEntry = [dirent: fs.Dirent, absoluteFileLocation: string];
```

### walk(directory: string, options?: WalkOptions): AsyncIterableIterator< WalkEntry >

Asynchronous walk.

### walkSync(directory: string, options?: WalkOptions): IterableIterator< WalkEntry >

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
