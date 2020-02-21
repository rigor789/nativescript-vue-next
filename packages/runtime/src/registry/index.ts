import { Component } from '@nativescript-vue/runtime'
console.log('REGISTRY??')
export type NSVElementResolver = () => any

export interface NSVViewMeta {
  skipAddToDom?: boolean
  isUnaryTag?: boolean
  canBeLeftOpenTag?: boolean
  component?: Component
}

export interface NSVElementDescriptor {
  meta: NSVViewMeta
  resolver?: NSVElementResolver
}

let defaultViewMeta: NSVViewMeta = {
  skipAddToDom: false,
  isUnaryTag: false,
  canBeLeftOpenTag: false
}

let elementMap: Record<string, NSVElementDescriptor> = {}

export function getViewMeta(elementName: string): NSVViewMeta | null {
  console.log(`->getViewMeta(${elementName})`)

  const normalizedName = normalizeElementName(elementName)

  const entry = elementMap[normalizedName]

  if (!entry) {
    return null
  }

  return entry.meta
}

export function getViewClass(elementName: string): any {
  console.log(`->getViewClass(${elementName})`)
  const normalizedName = normalizeElementName(elementName)
  const entry = elementMap[normalizedName]

  if (!entry) {
    throw new Error(`No known component for element ${elementName}.`)
  }

  try {
    return entry.resolver!()
  } catch (e) {
    throw new Error(`Could not load view for: ${elementName}. ${e}`)
  }
}

export function normalizeElementName(elementName: string): string {
  return elementName.replace(/-/g, '').toLowerCase()
}

export function registerElement(
  elementName: string,
  resolver?: NSVElementResolver,
  meta?: NSVViewMeta
) {
  const normalizedName = normalizeElementName(elementName)
  meta = Object.assign({}, defaultViewMeta, meta)

  if (elementMap[normalizedName]) {
    throw new Error(`Element for ${elementName} already registered.`)
  }

  elementMap[normalizedName] = {
    meta,
    resolver
  }
  console.log(`->registerElement(${elementName})`)
}

// export function isKnownView(elementName: string) {
//     return elementMap.hasOwnProperty(normalizeElementName(elementName))
// }

// register built in elements
registerElement('Label', () => require('@nativescript/core/ui/label').Label)
registerElement(
  'ContentView',
  () => require('@nativescript/core/ui/content-view').ContentView
)
