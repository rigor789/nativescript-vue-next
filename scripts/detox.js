const fs = require('fs-extra')
const path = require('path')
const { parse } = require('@vue/compiler-sfc')

const output = path.resolve('apps', 'test', 'e2e', 'detox.spec.js')
run().catch(err => {
  throw err
})

async function run() {
  let detoxTest = `
  // WIP - NON-FUNCTIONING
  // ---------------------
  // DO NOT EDIT MANUALLY
  // THIS FILE IS GENERATED
  // AUTOMATICALLY BY scripts/detox.js
  `
  for (const fileName of testFiles()) {
    detoxTest += await parseTest(fileName)
  }

  fs.writeFileSync(output, detoxTest)
}

async function parseTest(fileName) {
  const file = path.resolve('tests', 'detox', fileName)
  const contents = fs.readFileSync(file, {
    encoding: 'utf8'
  })
  const sfc = parse(contents, {
    // compiler: ...
  })

  const detoxBlock = sfc.descriptor.customBlocks.find(
    ({ type }) => type === 'detox'
  )

  if (!detoxBlock) {
    return
  }

  return detoxBlock.content
}

function testFiles() {
  return fs.readdirSync('tests/detox').filter(f => {
    return f.endsWith('.spec.vue')
  })
}
