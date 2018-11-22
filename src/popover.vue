<template>
  <div class="popover" @click.stop="handleClick">
    <div ref="contentWraper" class="content-wraper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'popover',
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    handleClick() {
      const self = this
      self.visible = !self.visible
      if(self.visible) {
        self.$nextTick(() => {
          let clickHandler = () => {
            self.visible = !this.visible
            document.removeEventListener('click', clickHandler)
          }
          document.addEventListener('click', clickHandler)
        })
      }
    }
  }
}
</script>
<style scoped lang="scss">
.popover {
  display: inline-block;
  position: relative;
  vertical-align: top;
  .content-wraper {
    position: absolute;
    left: 0;
    bottom: 100%;
    border: 1px solid #bfa;
    box-shadow: 0 0 3PX rgba(0, 0, 0, .5);
  }
}
</style>