import { Trace } from '@nativescript/core'

type DebugCategory = string | typeof Trace.categories

export function debug(
  s: any,
  category: DebugCategory = Trace.categories.Debug
) {
  Trace.write(s, category as string, Trace.messageType.log)
}

// const onRE = /^on[^a-z]/
const onRE = /^on.+/
export const isOn = (key: string) => onRE.test(key)
