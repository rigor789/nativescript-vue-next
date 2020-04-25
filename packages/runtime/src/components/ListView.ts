import { FunctionalComponent, h } from '@vue/runtime-core'
import { nodeOps, NSVRoot, render } from '@nativescript-vue/runtime'
import { ItemEventData } from '@nativescript/core/ui/list-view'
import { debug } from '@nativescript-vue/shared'

type ListViewProps = {
  items: Array<string>
}
const NSV_LVR_REF = Symbol('NSV_LVR_REF')
const isListViewThingSymbol = Symbol()

interface ListViewRealized {
  [isListViewThingSymbol]: true
  container: NSVRoot | null
}

export const ListView: FunctionalComponent<ListViewProps> = (props, ctx) => {
  const defaultKeyedTemplate = {
    key: 'test',
    createView(): ListViewRealized {
      // debug('createView for test template')
      return {
        [isListViewThingSymbol]: true,
        container: null,
      }
    },
  }

  return h('InternalListView', {
    items: props.items,
    itemTemplates: [defaultKeyedTemplate],
    itemTemplateSelector: (item: any, index: any) => {
      // debug('itemTemplateSelector', item, index)
      return 'test'
    },

    onitemLoading(args: ItemEventData) {
      // debug('item loading', args.view)

      const item = props.items[args.index]

      const getSlotVnode = (slotName: string) =>
        ctx.slots[slotName]!({
          item,
          index: args.index,
          even: !!(args.index % 2),
          odd: !(args.index % 2),
        })[0]
      let view
      if ((args.view as any)[isListViewThingSymbol]) {
        debug('INITIAL LVR CREATING' + args.index, 'ListView')
        // it is an initial render into this view holder
        const lvr = (args.view as unknown) as ListViewRealized
        // lets create an initial root
        lvr.container = nodeOps.createRoot()
        render(getSlotVnode('default'), lvr.container)

        if (lvr.container.el) {
          lvr.container.el.nativeView[NSV_LVR_REF] = lvr
          view = lvr.container.el.nativeView
        }
      } else {
        debug('LVR UPDATING' + args.index, 'ListView')
        const lvr = (args.view as any)[NSV_LVR_REF] as ListViewRealized
        render(getSlotVnode('default'), lvr.container!)
        view = lvr.container!.el!.nativeView
      }

      args.view = view
    },
  })
}
