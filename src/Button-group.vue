<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'button-group',
    mounted() {
      console.log(this.$el.children);
    }
  }
</script>
<style lang="scss" scoped>
  .button-group {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;

    .g-button {
      border-radius: 0;
      &:not(:first-child) {
        margin-left: -1px;
      }

      &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }

      &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }

      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>
