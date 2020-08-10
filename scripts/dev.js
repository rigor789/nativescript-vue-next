/*
Run Rollup in watch mode for development.

To specific the package to watch, simply pass its name and the desired build
formats to watch (defaults to "global"):

```
# name supports fuzzy match. will watch all packages with name containing "dom"
yarn dev dom

# specify the format to output
yarn dev core --formats cjs

# Can also drop all __DEV__ blocks with:
__DEV__=false yarn dev
```
*/

const execa = require('execa')
const { targets: allTargets, fuzzyMatchTarget } = require('./utils')
const args = require('minimist')(process.argv.slice(2))
const targets = args._
const formats = args.formats || args.f
const sourceMap = args.sourcemap || args.s
const buildAllMatching = args.all || args.a
const commit = execa.sync('git', ['rev-parse', 'HEAD']).stdout.slice(0, 7)

run()

async function run() {
  if (!targets.length) {
    await buildAll(allTargets)
  } else {
    await buildAll(fuzzyMatchTarget(targets, buildAllMatching))
  }
}

async function buildAll(targets) {
  const processes = []
  for (const target of targets) {
    processes.push(
      execa(
        'rollup',
        [
          '-wc',
          '--environment',
          [
            `COMMIT:${commit}`,
            `TARGET:${target}`,
            `FORMATS:${formats || 'esm-bundler'}`,
            sourceMap ? `SOURCE_MAP:true` : ``,
          ]
            .filter(Boolean)
            .join(','),
        ],
        {
          stdio: 'inherit',
        }
      )
    )
  }

  await Promise.all(processes)
}
