export function dumpViewTree(root) {
  const mapNode = (node) => {
    return {
      id: node.nodeId,
      type: node.tagName ? node.tagName : node.nodeType,
      text: node.text,
      children: node.childNodes.map(mapNode),
    }
  }
  return root.childNodes.map(mapNode)
}
