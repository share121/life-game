import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import piniaPersist from 'pinia-plugin-persist'

import './assets/main.less'
import 'element-plus/theme-chalk/dark/css-vars.css'

// vue virtual scroller
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import VueVirtualScroller from 'vue-virtual-scroller'

const app = createApp(App)

app.use(createPinia().use(piniaPersist))
app.use(router)
app.use(VueVirtualScroller) // use 它

app.directive('json', (el: HTMLElement, binding) => {
  el.setAttribute(binding.arg ?? '', JSON.stringify(binding.value))
})

app.mount('#app')
