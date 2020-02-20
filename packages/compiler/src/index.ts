import {
    baseCompile,
    baseParse,
    CompilerOptions,
    CodegenResult,
    ParserOptions,
    RootNode,
} from '@vue/compiler-core'

export function compile(
    template: string,
    options: CompilerOptions = {}
): CodegenResult {
    return baseCompile(template, {
        ...options,
        nodeTransforms: [],
        directiveTransforms: {
            ...(options.directiveTransforms || {})
        },
        // transformHoist: stringifyStatic
    })
}

export function parse(template: string, options: ParserOptions = {}): RootNode {
    return baseParse(template, {
        // ...parserOptions,
        ...options
    })
}

// export * from './runtimeHelpers'
// export { transformStyle } from './transforms/transformStyle'
// export { createDOMCompilerError, DOMErrorCodes } from './errors'
export * from '@vue/compiler-core'
