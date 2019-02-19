import Vue from 'vue';
import Button from './Button';
import ButtonGroup from './Button-group';
import Icon from './Icon';

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);


new Vue({
  el: '#app',
  data: {
    loading1: false
  }
});
