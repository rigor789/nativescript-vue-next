import { NSVElement, NSVNodeTypes, NSVViewNode } from './nodes'

function createRoot(tag: string = 'root') {
  return new NSVElement(tag, NSVNodeTypes.ROOT)
}

function createElement(tag: string): NSVViewNode {
  return new NSVElement(tag, NSVNodeTypes.ELEMENT)
}

function createText(text: string): NSVViewNode {
  return new NSVElement('text', NSVNodeTypes.TEXT)
}

function createComment(text: string): NSVViewNode {
  return new NSVElement('comment', NSVNodeTypes.COMMENT)
}

function setText(node: NSVViewNode, text: string) {
  node.text = text
}

function insert(
  child: NSVViewNode,
  parent: NSVViewNode,
  ref?: NSVViewNode | null
) {
  let refIndex
  if (ref != null) {
    refIndex = parent.childNodes.indexOf(ref)
    if (refIndex === -1) {
      console.error('ref: ', ref)
      console.error('parent: ', parent)
      throw new Error('ref is not a child of parent')
    }
  }

  // remove the node first, but don't log it as a REMOVE op
  remove(child)
  // re-calculate the ref index because the child's removal may have affected it
  refIndex = ref ? parent.childNodes.indexOf(ref) : -1
  if (refIndex === -1) {
    parent.childNodes.push(child)
    child.parentNode = parent
  } else {
    parent.childNodes.splice(refIndex, 0, child)
    child.parentNode = parent
  }
}

function remove(child: NSVViewNode) {
  const parent = child.parentNode
  if (parent != null) {
    const i = parent.childNodes.indexOf(child)
    if (i > -1) {
      parent.childNodes.splice(i, 1)
    } else {
      console.error('target: ', child)
      console.error('parent: ', parent)
      throw Error('target is not a childNode of parent')
    }
    child.parentNode = null
  }
}

function setElementText(el: NSVElement, text: string) {
  el.childNodes.forEach(c => {
    c.parentNode = null
  })
  if (!text) {
    el.childNodes = []
  } else {
    const node = createText(text)
    node.parentNode = el
    el.childNodes = [node]
  }
}

function parentNode(node: NSVViewNode): NSVViewNode | null {
  return node.parentNode
}

function nextSibling(node: NSVViewNode): NSVViewNode | null {
  const parent = node.parentNode
  if (!parent) {
    return null
  }
  const i = parent.childNodes.indexOf(node)
  return parent.childNodes[i + 1] || null
}

function querySelector(): any {
  throw new Error('querySelector not supported.')
}

function setScopeId(el: NSVElement, id: string) {
  el.nativeView[id] = ''
}

export const nodeOps = {
  insert,
  remove,
  createRoot,
  createElement,
  createText,
  createComment,
  setText,
  setElementText,
  parentNode,
  nextSibling,
  querySelector,
  setScopeId
}
