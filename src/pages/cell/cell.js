import Vue from 'vue'
import cell from './cell.vue'
import router from '../../router/index.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#cell',
    router,
    components: { cell },
    template: '<cell/>'
  })