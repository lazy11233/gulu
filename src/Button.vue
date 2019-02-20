<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}"
          @click="$emit('click')">
    <g-icon v-if="loading" class="loading icon" name="loading"></g-icon>
    <g-icon v-if="icon && !loading" :name="icon" class="icon"></g-icon>
    <span class="content">
      <slot></slot>
    </span>
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
        default: 'left',
        validator(value) {
          return ['left', 'right'].includes(value);
        }
      },
      loading: {
        required: false,
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

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

    > .content { order: 2; }

    &.icon-right {
      > .icon { order: 2; margin-right: 0; margin-left: .3em; }

      > .content { order: 1; }
    }

    .loading { animation: spin 1s linear infinite; }
  }
</style>
