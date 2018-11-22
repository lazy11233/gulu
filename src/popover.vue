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
    handleClick(event) {
      if(this.$refs.triggerWrapper.contains(event.target)) {
        console.log("下面");
        this.visible = !this.visible  
        if(this.visible) {
          // 点开了popover，即点击到按钮
          document.body.appendChild(this.$refs.contentWrapper)
          let {width, height, left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
          this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'

          let eventHandler = (e) => {
            this.visible = false
            document.removeEventListener('click', eventHandler)
          }
          document.addEventListener('click', eventHandler)

        }
      }else {
        console.log('上面');
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
}
.content-wraper {
  position: absolute;
  border: 1px solid #bfa;
  box-shadow: 0 0 3PX rgba(0, 0, 0, .5);
  transform: translateY(-100%);
}
</style>