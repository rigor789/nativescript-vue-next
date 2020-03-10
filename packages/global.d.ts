// Global compile-time constants
declare var __DEV__: boolean
declare var __TEST__: boolean

// todo: remove after PR merged into core
// https://github.com/NativeScript/NativeScript/pull/8423
declare module '@nativescript/core/css/css-tree-parser' {
  export function cssTreeParse(css: any, source: any): any
}

declare module 'set-value' {
  function set(target: any, path: any, value: any, options?: any): void

  export = set
}

declare module 'unset-value' {
  function unset(target: any, path: any): void

  export = unset
}
