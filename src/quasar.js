import Vue from 'vue'

import './styles/quasar.scss'
import 'quasar/dist/quasar.ie.polyfills'
import iconSet from 'quasar/icon-set/fontawesome-v5.js'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import '@quasar/extras/material-icons-sharp/material-icons-sharp.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import '@quasar/extras/ionicons-v4/ionicons-v4.css'
import '@quasar/extras/mdi-v4/mdi-v4.css'
import '@quasar/extras/eva-icons/eva-icons.css'
import { Quasar } from 'quasar'

Vue.use(Quasar, {
  config: {},
  plugins: {
  },
  iconSet: iconSet
 })