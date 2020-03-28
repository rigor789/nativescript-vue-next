import * as trace from '@nativescript/core/trace'

export function debug(s: any) {
  trace.write(s, trace.categories.Debug, trace.messageType.log)
}
