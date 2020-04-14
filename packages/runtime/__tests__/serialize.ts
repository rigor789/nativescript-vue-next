import {
  NSVComment,
  NSVElement,
  NSVNode,
  NSVNodeTypes,
  NSVText
} from '../src/nodes'
import { isOn } from '@vue/shared'

export function serialize(
  node: NSVNode,
  indent: number = 0,
  depth: number = 0
): string {
  if (node.nodeType === NSVNodeTypes.ELEMENT) {
    return serializeElement(node as NSVElement, indent, depth)
  } else {
    return serializeText(node, indent, depth)
  }
}

export function serializeInner(
  node: NSVElement,
  indent: number = 0,
  depth: number = 0
) {
  const newLine = indent ? `\n` : ``
  return node.childNodes.length
    ? newLine +
        node.childNodes
          .map(c => serialize(c, indent, depth + 1))
          .join(newLine) +
        newLine
    : ``
}

function serializeElement(
  node: NSVElement,
  indent: number,
  depth: number
): string {
  const props = node.propNames
    .map(key => {
      const value = node.getAttribute(key)
      return isOn(key) || value == null
        ? ``
        : value === ``
          ? key
          : `${key}=${JSON.stringify(value)}`
    })
    .filter(Boolean)
    .join(' ')
  const padding = indent ? ` `.repeat(indent).repeat(depth) : ``
  return (
    `${padding}<${node.tagName}${props ? ` ${props}` : ``}>` +
    `${serializeInner(node, indent, depth)}` +
    `${padding}</${node.tagName}>`
  )
}

function serializeText(
  node: NSVText | NSVComment,
  indent: number,
  depth: number
): string {
  const padding = indent ? ` `.repeat(indent).repeat(depth) : ``
  return (
    padding +
    (node.nodeType === NSVNodeTypes.COMMENT ? `<!--${node.text}-->` : node.text)
  )
}
