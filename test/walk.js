// Import Node.js Dependencies
import test from "node:test";
import assert from "node:assert";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Import Internal Dependencies
import { walk, walkSync } from "../index.js";

// CONSTANTS
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const kRootLocation = path.join(__dirname, "..");
const kFixturesDir = path.join(__dirname, "fixtures");
const kExpectedJSFiles = ["index.js", "test/walk.js"].map((fileLocation) => path.normalize(fileLocation));

test("should return all JavaScript files of the project (Asynchronously)", async() => {
  const files = [];
  const options = { extensions: new Set([".js"]) };

  for await (const [dirent, absoluteFileLocation] of walk(
    kRootLocation,
    options
  )) {
    if (dirent.isFile()) {
      files.push(path.relative(kRootLocation, absoluteFileLocation));
    }
  }

  assert.deepEqual(files.sort(), kExpectedJSFiles);
});

test("should return all JavaScript files of the project (Synchronously)", async() => {
  const options = { extensions: new Set([".js"]) };

  const files = [...walkSync(kRootLocation, options)]
    .filter(([dirent]) => dirent.isFile())
    .map(([, absoluteFileLocation]) => path.relative(kRootLocation, absoluteFileLocation));

  assert.deepEqual(files, kExpectedJSFiles);
});

test("should return all files in the fixtures directory", async() => {
  const files = [...walkSync(kFixturesDir)]
    .filter(([dirent]) => dirent.isFile())
    .map(([, absoluteFileLocation]) => path.relative(kRootLocation, absoluteFileLocation));

  const expectedFiles = [
    "test/fixtures/foobar.txt",
    "test/fixtures/test.md"
  ].map((fileLocation) => path.normalize(fileLocation));

  assert.deepEqual(files, expectedFiles);
});
