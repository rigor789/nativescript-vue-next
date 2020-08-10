const chalk = require('chalk')

async function run() {
  console.log(chalk.yellow`Project successfully installed!`)
  console.log()
  console.log(
    chalk.yellow`To be able to run apps/* please change the package manager that NativeScript uses by running`
  )
  console.log(chalk.gray`$`)
  console.log(chalk.gray`$` + chalk.green`\tns package-manager set yarn`)
  console.log(chalk.gray`$`)
}

run()
