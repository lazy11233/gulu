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
import spies from 'chai-spies';

chai.use(spies);
const expect = chai.expect;

//单元测试
{
  /* 测试button的icon参数 */
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
  /* 测试button的loading参数 */
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
  /* 测试iconPosition参数 */
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
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2');
  button.$el.remove();
  button.$destroy();
}
{
  /* 测试button的点击事件 */
  const div = document.createElement('div');
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData: {
      icon: 'setting'
    }
  });
  button.$mount(div);
  const spy = chai.spy(function() {})
  button.$on('click', spy);
  let btnEle = button.$el;
  btnEle.click();

  expect(spy).to.have.been.called();

  button.$el.remove();
  button.$destroy();
}
