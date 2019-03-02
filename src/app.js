import Vue from 'vue';
import Button from './Button';
import ButtonGroup from './Button-group';
import Icon from './Icon';
import Input from './input';
import Row from './row';
import Col from './col';

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);

new Vue({
  el: '#app',
  data: {
    loading1: false,
    message: '1'
  },
  methods: {
    handleChange(input) {
    }
  }
});
