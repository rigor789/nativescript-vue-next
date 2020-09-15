import { createApp, h } from 'nativescript-vue'

import Home from './components/Home'

createApp({
  render: () => h('frame', [h(Home)]),
}).start()
