# Demonstrating an efficiency bug in Astro, probably resulting from the MDX parser

As certain kinds of MDX files grow, the time it takes to parse those files grows super-linearly in the size of the file. This repository demonstrates the problem with synthetically generated data.

```shell
$ npm ci
$ patch -u < console-log-in-unified.patch
$ node generate-problems.js
$ npm run build
```
