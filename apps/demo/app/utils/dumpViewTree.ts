import { INSVElement, INSVNode } from 'nativescript-vue'

export function dumpViewTree(root: INSVNode) {
  const mapNode: any = (node: INSVNode | INSVElement) => {
    const type = 'tagName' in node ? node.tagName : node.nodeType
    return {
      id: node.nodeId,
      type,
      text: node.text,
      children: node.childNodes.map(mapNode),
    }
  }

  return root.childNodes.map(mapNode)
}
