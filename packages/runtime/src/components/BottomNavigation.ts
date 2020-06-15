import { FunctionalComponent, h } from '@vue/runtime-core'
import { NSVElement } from '../nodes'

export const BottomNavigation: FunctionalComponent = (props, ctx) => {
  return h(
    'InternalBottomNavigation',
    {
      ...ctx.attrs,
      onVnodeMounted(vnode) {
        const el = vnode.el as NSVElement
        console.log(el)
        // TODO: Implement
      },
    },
    ctx.slots.default ? ctx.slots.default() : undefined
  )
}
