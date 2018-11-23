<template>
  <div class="popover" @click.stop="handleClick">
    <div ref="contentWrapper" class="content-wraper" v-if="visible" @click.stop>
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
        this.visible = !this.visible;
        if(this.visible) {
          this.onShow()
        }
      }
    },
    onShow() {
      this.$nextTick(() => {
        this.positionContent()
        this.listenToDocument()
      })
    },
    positionContent() {
      let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
      this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
      this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
    },
    listenToDocument() {
      let eventHandler = (e) => {
        if(!this.$refs.contentWrapper.contains(e.target)) {
          this.visible = false
          document.removeEventListener('click', eventHandler)
        }
        document.addEventListener('click', eventHandler)
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