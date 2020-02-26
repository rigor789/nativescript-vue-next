import { NSView } from './base'

let frameStack: Frame[] = []

const topmostFrame = () => {
  if (frameStack.length > 0) {
    return frameStack[frameStack.length - 1]
  }

  return undefined
}

/*
// TODO: Complete

const pushInFrameStack = frame => {
  if (frame._isInFrameStack && frameStack[frameStack.length - 1] === frame) {
    return
  }

  if (frame._isInFrameStack) {
    const indexOfFrame = frameStack.indexOf(frame)
    frameStack.splice(indexOfFrame, 1)
  }

  frameStack.push(frame)
  frame._isInFrameStack = true
}*/

const getFrameById = (id: string) => {
  // TODO: Implement
  return topmostFrame()
}

export class Frame extends NSView {
  topmost() {
    return topmostFrame()
  }

  getFrameById(id: string) {
    return getFrameById(id)
  }
}
