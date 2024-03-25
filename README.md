# Demonstrating an efficiency bug in Astro, probably resulting from the MDX parser

As certain kinds of MDX files grow, the time it takes to parse those files grows super-linearly in the size of the file. This repository demonstrates the problem with synthetically generated data.

```shell
$ npm ci
$ patch -u < console-log-in-unified.patch
$ node generate-problems.js
$ npm run build
```

The patched code will emit CSV-style size-vs-time information, which indicates that the parse time (for the versions in this lockfile) is quadratic in the size of the input, or a little worse.

![Size-vs-time](https://raw.githubusercontent.com/robsimmons/astro-test-mdx-bug/main/parse%20time%20(ms)%20vs.%20size.png)

![log-log size-vs-time](https://raw.githubusercontent.com/robsimmons/astro-test-mdx-bug/main/log-log%20parse%20time%20(ms)%20vs.%20size.png)
