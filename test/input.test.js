const expect = chai.expect;
import Vue from 'vue';
import Input from '../src/input';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.be.ok;
  });
  describe('props', () => {
    let Constructor = {};
    let vm = {};
    beforeEach(() => {
      Constructor = Vue.extend(Input);
    });
    afterEach(() => {
      vm.$destroy();
    });
    it('接收 value.', () => {
      vm = new Constructor({
        propsData: {
          value: 'value'
        }
      }).$mount();
      const inputValue = vm.$el.querySelector('input').value;
      expect(inputValue).to.eq('value');
    });
    it('接收 disabled.', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.disabled).to.eq(true);
    });
    it('接收 readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.readOnly).to.eq(true);
    });
    it('接收error', () => {
      vm = new Constructor({
        propsData: {
          error: 'error message'
        }
      }).$mount();
      const errorSpan = vm.$el.querySelector('.error-message');
      expect(errorSpan.innerHTML).to.eq('error message');
      const errorSvg = vm.$el.querySelector('use');
      expect(errorSvg.getAttribute('xlink:href')).to.eq('#i-error-circle');
    });
  });
  describe('事件', () => {
    let Constructor = {};
    let vm = {};
    beforeEach(() => {
      Constructor = Vue.extend(Input);
    });
    afterEach(() => {
      vm.$destroy();
    });

    it('触发 blur / change / focus / input.', () => {
        vm = new Constructor({}).$mount();
      ['blur', 'change', 'focus', 'input'].forEach(eventName => {
        const callback = sinon.fake();
        vm.$on(eventName, callback);
        // 触发 change.
        let event = new Event(eventName);
        Object.defineProperty(event, 'target', { value: { value: 'hi' }, enumerable: true});
        const inputElement = vm.$el.querySelector('input');
        inputElement.dispatchEvent(event);
        expect(callback).to.have.been.calledWith('hi');
      });
    });
  });
});
