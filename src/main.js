import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()
const vuetify = createVuetify({
    components,
    directives,
})

app.use(pinia).use(vuetify)

app.mount('#app')
