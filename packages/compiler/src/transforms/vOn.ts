import {
  transformOn as baseTransform,
  DirectiveTransform,
  createObjectProperty,
  createSimpleExpression,
  createCompoundExpression,
  isStaticExp
} from '@vue/compiler-core'
import { capitalize, makeMap } from '@vue/shared'

// todo: simplify - we only support `once` - no need to use makeMap
const isEventOptionModifier = /*#__PURE__*/ makeMap(`once,capture`)

// todo: remove - no need to loop through modifiers as only `once` is supported
const generateOptionModifiers = (modifiers: string[]) => {
  const eventOptionModifiers = []

  for (let i = 0; i < modifiers.length; i++) {
    const modifier = modifiers[i]

    if (isEventOptionModifier(modifier)) {
      // eventOptionModifiers: modifiers for addEventListener() options, e.g. .once
      eventOptionModifiers.push(modifier)
    }
  }

  return eventOptionModifiers
}

export const transformOn: DirectiveTransform = (dir, node, context) => {
  return baseTransform(dir, node, context, baseResult => {
    const { modifiers } = dir
    if (!modifiers.length) return baseResult

    let { key, value: handlerExp } = baseResult.props[0]
    const eventOptionModifiers = generateOptionModifiers(modifiers)

    if (eventOptionModifiers.length) {
      const modifierPostfix = eventOptionModifiers.map(capitalize).join('')
      key = isStaticExp(key)
        ? createSimpleExpression(`${key.content}${modifierPostfix}`, true)
        : createCompoundExpression([`(`, key, `) + "${modifierPostfix}"`])
    }

    return {
      props: [createObjectProperty(key, handlerExp)]
    }
  })
}
