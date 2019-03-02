<template>
  <div class="row" :style="{marginRight: -gutter / 2 + 'px', marginLeft: -gutter / 2 + 'px',}">
    <slot>

    </slot>
  </div>
</template>
<script>
  export default {
    name: 'g-row',
    props: {
      gutter: {
        type: Number,
        required: false
      }
    },
    mounted() {
      const self = this;
      this.$children.forEach(vm => {
         vm.gutter = self.gutter;
      })
    }
  }
</script>
<style lang="scss" scoped>
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    background-color: gray;
    border: 1px solid red;
  }
</style>
