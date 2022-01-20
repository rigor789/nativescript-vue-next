/// <reference path="../../../node_modules/@nativescript/types/index.d.ts" />

// todo: figure out why api-extractor fails to extract the .d.ts for nativescript-vue...
// in the meantime, this shim should cover the typings for nativescript-vue
declare module 'nativescript-vue' {
  export * from '@nativescript-vue/compiler'
  export * from '@nativescript-vue/runtime'

  import { CompilerOptions } from '@nativescript-vue/compiler'
  import { RenderFunction } from '@nativescript-vue/runtime'

  export function compile(
    template: string,
    options?: CompilerOptions
  ): RenderFunction
}
