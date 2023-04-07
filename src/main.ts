import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.less'
import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.directive('json', (el: HTMLElement, binding) => {
  el.setAttribute(binding.arg ?? '', JSON.stringify(binding.value))
})

app.mount('#app')
