import Vue from 'vue'
import login from './login.vue'
import VueResource from 'vue-resource'
import router from '../../router/index.js'

//引入element组件化框架
import ElementUI from "element-ui"
//引入样式文件
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#login',
    router,
    components: { login },
    template: '<login/>'
  })