import {
  TextModes,
  ParserOptions,
  ElementNode,
  Namespaces,
  isBuiltInType
  // NodeTypes,
  // isBuiltInType
} from '@vue/compiler-core'
import { makeMap } from '@vue/shared'
// import { isKnownView } from '@nativescript-vue/runtime'
import namedCharacterReferences from './namedChars.json'
import { ACTION_BAR, TRANSITION, TRANSITION_GROUP } from './runtimeHelpers'

const isRawTextContainer = /*#__PURE__*/ makeMap('style,script', true)

export const enum DOMNamespaces {
  HTML = Namespaces.HTML
}

const isBuiltInComponent = (tag: string): symbol | undefined => {
  if (isBuiltInType(tag, `ActionBar`)) {
    return ACTION_BAR
  } else if (isBuiltInType(tag, `Transition`)) {
    return TRANSITION
  } else if (isBuiltInType(tag, `TransitionGroup`)) {
    return TRANSITION_GROUP
  }
}

export const parserOptions: ParserOptions = {
  // We don't have void tags in NativeScript (<br>, <hr> etc.)
  isVoidTag: tag => false,
  isNativeTag: tag => {
    if (isBuiltInComponent(tag)) {
      return false
    }
    // in case we encounter an element that is not a built-in component
    // we will assume it's a plugin provided element
    return true
  },
  isPreTag: tag => tag === 'pre',
  isBuiltInComponent,
  // todo: we might add support for different namespaces in the future
  // for example - it would be neat to be able to write inline svg
  // with the svg plugin?
  getNamespace(tag: string, parent: ElementNode | undefined): DOMNamespaces {
    return DOMNamespaces.HTML
  },

  // https://html.spec.whatwg.org/multipage/parsing.html#parsing-html-fragments
  getTextMode(tag: string, ns: DOMNamespaces): TextModes {
    // todo: look into if any of this would be useful in ns
    if (ns === DOMNamespaces.HTML) {
      if (tag === 'textarea' || tag === 'title') {
        return TextModes.RCDATA
      }
      if (isRawTextContainer(tag)) {
        return TextModes.RAWTEXT
      }
    }
    return TextModes.DATA
  },

  // https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references
  namedCharacterReferences,
  maxCRNameLength: /*#__PURE__*/ Object.keys(namedCharacterReferences).reduce(
    (max, name) => Math.max(max, name.length),
    0
  )
}
