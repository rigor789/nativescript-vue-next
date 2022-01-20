const c = require('ansi-colors')

async function run() {
  console.log(c.yellow`Project successfully installed!`)
  console.log()
  console.log(
    c.yellow`To be able to run apps/* please change the package manager that NativeScript uses by running`
  )
  console.log(c.gray`$`)
  console.log(c.gray`$` + c.green`\tns package-manager set yarn`)
  console.log(c.gray`$`)
  console.log(
    c.yellow.bold`Note: ` +
      c.yellow`The upcoming nativescript CLI supports the package-manager override in the nativescript.config.ts.`
  )
  console.log()
}

run()
