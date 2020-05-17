import {
  isBuiltInType,
  Namespaces,
  ParserOptions,
  TextModes,
} from '@vue/compiler-core'
import { decodeHtml } from './decodeHtml'
import { ACTION_BAR, TRANSITION, TRANSITION_GROUP } from './runtimeHelpers'

export const enum DOMNamespaces {
  HTML = Namespaces.HTML,
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
  isVoidTag: () => false,
  isNativeTag: () => false,
  isPreTag: (tag) => tag === 'pre',
  isBuiltInComponent,
  decodeEntities: decodeHtml,
  // todo: we might add support for different namespaces in the future
  // for example - it would be neat to be able to write inline svg
  // with the svg plugin?
  getNamespace() {
    return DOMNamespaces.HTML
  },

  // https://html.spec.whatwg.org/multipage/parsing.html#parsing-html-fragments
  getTextMode() {
    return TextModes.DATA
  },
}
