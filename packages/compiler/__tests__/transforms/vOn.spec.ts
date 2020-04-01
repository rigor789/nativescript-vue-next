// todo: uncomment when vue-next#907 is released
test.todo('uncomment when vue-next#907 is released')
// import {
//   baseParse as parse,
//   transform,
//   ElementNode,
//   CompilerOptions,
//   NodeTypes,
//   VNodeCall,
//   transformElement
// } from '../../src'
// import { transformOn } from '../../src/transforms/vOn'
//
// function parseWithVOn(template: string, options: CompilerOptions = {}) {
//   const ast = parse(template)
//   transform(ast, {
//     nodeTransforms: [transformElement],
//     directiveTransforms: {
//       on: transformOn
//     },
//     ...options
//   })
//   return {
//     root: ast,
//     node: ast.children[0] as ElementNode
//   }
// }
//
// describe('compiler: transform v-on', () => {
//   test('basic', () => {
//     const { node } = parseWithVOn(`<Label v-on:click="onClick"/>`)
//     expect((node.codegenNode as VNodeCall).props).toMatchObject({
//       properties: [
//         {
//           key: {
//             content: `onClick`,
//             isStatic: true,
//             loc: {
//               start: {
//                 line: 1,
//                 column: 13
//               },
//               end: {
//                 line: 1,
//                 column: 18
//               }
//             }
//           },
//           value: {
//             content: `onClick`,
//             isStatic: false,
//             loc: {
//               start: {
//                 line: 1,
//                 column: 20
//               },
//               end: {
//                 line: 1,
//                 column: 27
//               }
//             }
//           }
//         }
//       ]
//     })
//   })
//
//   test('dynamic arg', () => {
//     const { node } = parseWithVOn(`<Label v-on:[event]="handler"/>`)
//     expect((node.codegenNode as VNodeCall).props).toMatchObject({
//       properties: [
//         {
//           key: {
//             type: NodeTypes.COMPOUND_EXPRESSION,
//             children: [`"on" + (`, { content: `event` }, `)`]
//           },
//           value: {
//             type: NodeTypes.SIMPLE_EXPRESSION,
//             content: `handler`,
//             isStatic: false
//           }
//         }
//       ]
//     })
//   })
// })
