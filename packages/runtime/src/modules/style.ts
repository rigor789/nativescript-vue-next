import { unsetValue } from '@nativescript/core/ui/core/view'
import { fromAstNodes } from '@nativescript/core/ui/styling/css-selector'
import { SyntaxTree } from '@nativescript/core/css'
// import { cssTreeParse } from '@nativescript/core/css/css-tree-parser'
const { cssTreeParse } = require('@nativescript/core/css/css-tree-parser')

import { INSVElement } from '../nodes'

type Style = string | null

export function patchStyle(el: INSVElement, prev: Style, next: Style) {
  if (prev) {
    // reset previous styles
    const localStyle = `local { ${prev} }`
    const ast: SyntaxTree = cssTreeParse(localStyle, undefined)
    const [ruleset] = fromAstNodes(ast.stylesheet.rules)

    ruleset.declarations.forEach(d => {
      ;(el.nativeView.style as any)[d.property] = unsetValue
    })
  }

  if (!next) {
    el.removeAttribute('style')
  } else {
    // set new styles
    el.style = next
  }
}
