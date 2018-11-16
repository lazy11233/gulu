import Vue from 'vue';
import chai from 'chai';
import Button from './button.vue';
import Icon from './icon.vue';


Vue.component('g-button', Button);
Vue.component('g-icon', Icon);

const app = new Vue({
  el: '#app',
  data: {
    loading1: false
  }
});
{
  const expert = chai.expect;
  // 单元测试
  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData: {
      icon: 'setting',
    },
  });
  button.$mount('#test');
  const useEelement = button.$el.querySelector('use');
  const href = useEelement.getAttribute('xlink:href');
  expert(href).to.eq('#i-setting');
}
