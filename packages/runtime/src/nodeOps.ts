import { markNonReactive } from '@vue/reactivity'
import { NSVElement, NSVNodeTypes, NSVViewNode } from './nodes'

export const enum NodeOpTypes {
  CREATE = 'create',
  INSERT = 'insert',
  REMOVE = 'remove',
  SET_TEXT = 'setText',
  SET_ELEMENT_TEXT = 'setElementText',
  PATCH = 'patch'
}

export interface NodeOp {
  type: NodeOpTypes
  nodeType?: NSVNodeTypes
  tag?: string
  text?: string
  targetNode?: NSVViewNode
  parentNode?: NSVViewNode
  refNode?: NSVViewNode | null
  propKey?: string
  propPrevValue?: any
  propNextValue?: any
}

let recordedNodeOps: NodeOp[] = []

export function logNodeOp(op: NodeOp) {
  recordedNodeOps.push(op)
}

export function resetOps() {
  recordedNodeOps = []
}

export function dumpOps(): NodeOp[] {
  const ops = recordedNodeOps.slice()
  resetOps()
  return ops
}

function createElement(tag: string): NSVViewNode {
  const node: NSVElement = new NSVElement(tag, NSVNodeTypes.ELEMENT)

  logNodeOp({
    type: NodeOpTypes.CREATE,
    nodeType: NSVNodeTypes.ELEMENT,
    targetNode: node,
    tag
  })
  // avoid test nodes from being observed
  markNonReactive(node)

  return node
}

function createText(text: string): NSVViewNode {
  const node = new NSVElement('text', NSVNodeTypes.TEXT)

  logNodeOp({
    type: NodeOpTypes.CREATE,
    nodeType: NSVNodeTypes.TEXT,
    targetNode: node,
    text
  })
  // avoid test nodes from being observed
  markNonReactive(node)
  return node
}

function createComment(text: string): NSVViewNode {
  const node = new NSVElement('comment', NSVNodeTypes.COMMENT)

  logNodeOp({
    type: NodeOpTypes.CREATE,
    nodeType: NSVNodeTypes.COMMENT,
    targetNode: node,
    text
  })
  // avoid test nodes from being observed
  markNonReactive(node)
  return node
}

function setText(node: NSVViewNode, text: string) {
  logNodeOp({
    type: NodeOpTypes.SET_TEXT,
    targetNode: node,
    text
  })
  node.text = text
}

function insert(
  child: NSVViewNode,
  parent: NSVElement,
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
  logNodeOp({
    type: NodeOpTypes.INSERT,
    targetNode: child,
    parentNode: parent,
    refNode: ref
  })
  // remove the node first, but don't log it as a REMOVE op
  remove(child, false)
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

function remove(child: NSVViewNode, logOp: boolean = true) {
  const parent = child.parentNode
  if (parent != null) {
    if (logOp) {
      logNodeOp({
        type: NodeOpTypes.REMOVE,
        targetNode: child,
        parentNode: parent
      })
    }
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
  logNodeOp({
    type: NodeOpTypes.SET_ELEMENT_TEXT,
    targetNode: el,
    text
  })
  el.childNodes.forEach(c => {
    c.parentNode = null
  })
  if (!text) {
    el.childNodes = []
  } else {
    el.childNodes = [
      // {
      //   id: nodeId++,
      //   type: NSVNodeTypes.TEXT,
      //   text,
      //   parentNode: el
      // }
    ]
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
  throw new Error('querySelector not supported in test renderer.')
}

function setScopeId(el: NSVElement, id: string) {
  // el.props[id] = ''
}

export const nodeOps = {
  insert,
  remove,
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
