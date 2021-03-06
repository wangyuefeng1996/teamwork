// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//vant组件 引入和注册
import { NavBar } from 'vant';
Vue.use(NavBar);
import { ActionSheet } from 'vant';
Vue.use(ActionSheet);
import { Progress } from 'vant';
Vue.use(Progress);


//引入字体图标
import './font/font-player/iconfont.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
