<template>
  <div class="popover" @click="handleClick">
    <div class="content-wraper" v-if="visible">
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
      this.visible = !this.visible
      console.log('切换visible');

      if(this.visible) {
        this.$nextTick(() => {
          console.log('新增监听器');
          document.addEventListener('click', function x(){
            this.visible = false;
            document.removeEventListener('click', x)
            console.log('点击document关闭popover');
          }.bind(this))
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