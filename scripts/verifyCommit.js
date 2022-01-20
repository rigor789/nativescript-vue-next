// Invoked on the commit-msg git hook by yorkie.

const c = require('ansi-colors')
const msgPath = process.env.GIT_PARAMS
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim()

const commitRE =
  /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/
const mergeRE = /^Merge .+ branch '.+'/

if (!commitRE.test(msg) && !mergeRE.test(msg)) {
  console.log()
  console.error(
    `  ${c.bgRed.white(' ERROR ')} ${c.red(
      `invalid commit message format.`
    )}\n\n` +
      c.red(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
      ) +
      `    ${c.green(`feat(compiler): add 'comments' option`)}\n` +
      `    ${c.green(`fix(v-model): handle events on blur (close #28)`)}\n\n` +
      c.red(
        `  See https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716 for more details.\n`
      )
  )
  process.exit(1)
}
