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

import chai from 'chai';
const expect = chai.expect;

//单元测试
{
  const div = document.createElement('div');
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData: {
      icon: 'setting'
    }
  });
  button.$mount(div);
  let useElement = button.$el.querySelector('use');
  let href = useElement.getAttribute('xlink:href');
  expect(href).to.eq('#i-setting');
  button.$el.remove();
  button.$destroy();
}

{
  const div = document.createElement('div');
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData: {
      icon: 'setting',
      loading: true
    }
  });
  button.$mount(div);
  let useElement = button.$el.querySelector('use');
  let href = useElement.getAttribute('xlink:href');
  expect(href).to.eq('#i-loading');
  button.$el.remove();
  button.$destroy();
}

{
  const div = document.createElement('div');
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData: {
      icon: 'setting',
      iconPosition: 'right'
    }
  });
  button.$mount(div);
  let svg = button.$el.querySelector('svg');
  let { order } = window.getComputedStyle(svg)
  expect(order).to.eq('2');
  button.$el.remove();
  button.$destroy();
}
{
  const div = document.createElement('div');
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData: {
      icon: 'setting'
    }
  });
  button.$mount(div);
  button.$on('click', function() {
    // 期望成立的事件触发
    expect(1).to.eq(1);
  });
  let btnEle = button.$el;
  btnEle.click();
  button.$el.remove();
  button.$destroy();
}
