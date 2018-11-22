<template>
  <div class="popover" @click.stop="handleClick">
    <div ref="contentWrapper" class="content-wraper" v-show="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <div ref="triggerWrapper">
      <slot></slot>
    </div>
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
        document.body.appendChild(self.$refs.contentWrapper)
        let {width, height, left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
        console.log(width, height, left, top)
        self.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
        self.$refs.contentWrapper.style.left = left + window.scrollX+ 'px'
        self.$nextTick(() => {
          let clickHandler = () => {
            self.visible = !this.visible
            document.removeEventListener('click', clickHandler)
          }
          document.addEventListener('click', clickHandler)
        })
      }
    }
  },
  mounted(){
    console.log(this.$refs.contentWrapper)
    console.log(this.$refs.triggerWrapper)
  }
}
</script>
<style scoped lang="scss">
.popover {
  display: inline-block;
  position: relative;
  vertical-align: top;
}
.content-wraper {
  position: absolute;
  border: 1px solid #bfa;
  box-shadow: 0 0 3PX rgba(0, 0, 0, .5);
  transform: translateY(-100%);
}
</style>