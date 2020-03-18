//
import {
  compile,
  CompilerOptions,
  CompilerError
} from '@nativescript-vue/compiler'
import {
  registerRuntimeCompiler,
  RenderFunction,
  warn
} from '@nativescript-vue/runtime'
import * as runtime from '@nativescript-vue/runtime'
import { isString, NOOP } from '@vue/shared'

const compileCache: Record<string, RenderFunction> = Object.create(null)

function compileToFunction(
  template: string,
  options?: CompilerOptions
): RenderFunction {
  if (!isString(template)) {
    __DEV__ && warn('invalid template option: ', template)
    return NOOP
  }

  const key = template
  const cached = compileCache[key]

  if (cached) {
    return cached
  }

  const { code } = compile(template, {
    hoistStatic: true,
    onError(err: CompilerError) {
      // todo
    },
    ...options
  })

  const render = new Function('Vue', code)(runtime) as RenderFunction
  return (compileCache[key] = render)
}

registerRuntimeCompiler(compileToFunction)

export { compileToFunction as compile }
export * from '@nativescript-vue/runtime'
