<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
    <svg class="icon" v-if="icon">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
  export default {
    name: 'g-button',
    props: {
      icon: {
        required: false,
        type: String,
        default: ''
      },
      iconPosition: {
        required: false,
        type: String,
        default: 'left'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .g-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    background-color: var(--button-bg);

    &:hover { border-color: var(--border-color-hover); }

    &:active { background: var(--button-bg-active); }

    &:focus { outline: none; }

    > .icon { order: 1; margin-right: .3em; }
    > .content { order: 2 }

    &.icon-right {
      > .icon { order: 2; margin-right: 0; margin-left: .3em; }
      > .content { order: 1 }
    }
  }
</style>
