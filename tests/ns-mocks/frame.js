const NSComponent = require('./base')

let frameStack = []

const topmostFrame = () => {
  if (frameStack.length > 0) {
    return frameStack[frameStack.length - 1]
  }

  return undefined
}

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
}

const getFrameById = id => {
  // TODO: Implement
  return topmostFrame()
}

class Frame extends NSComponent {}

Frame.topmost = () => topmostFrame()
Frame.getFrameById = id => getFrameById(id)

module.exports = {
  Frame
}
