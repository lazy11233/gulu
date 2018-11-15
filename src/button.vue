<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
    <g-icon class="icon" :name="icon" v-if="icon"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
  export default {
    props: {
      icon: {},
      iconPosition: {
        type: String,
        default: 'left',
        validator(val) {
          return val === 'left' || val === 'right'
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  .g-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--button-radius);
    border: 1px solid var(--border-color);
    background-color: var(--button-bg);
    &:hover {
      border-color: var(--border-hover-color);
    }
    &:active {
      background-color: var(--button-active-bg);
    }
    &:focus {
      outline: none;
    }
    > .icon { order: 1; margin-right: .3em; }
    > .content { order: 2; }

    &.icon-right {
      > .icon { order: 2;  margin-right: 0; margin-left: .3em; }
      > .content { order: 1; }
    }
  }

</style>
