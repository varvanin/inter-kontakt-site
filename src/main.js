import Bulma from 'bulma/css/bulma.min.css' 

// Import global css
import '~/assets/global.css'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
}
