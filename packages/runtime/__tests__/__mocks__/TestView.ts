export const elementInstances: TestView[] = []

export class TestView {
  constructor() {
    elementInstances.push(this)
  }
}
