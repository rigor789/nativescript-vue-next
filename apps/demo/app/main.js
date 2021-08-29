import { createApp, h } from 'nativescript-vue'
import App from './components/App.vue'

const app = createApp({
  render: () => h(App),
})

app.start()
