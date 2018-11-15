<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <g-icon class="icon" :name="icon" v-if="icon && !loading"></g-icon>
    <g-icon name="loading" class="loading icon" v-if="loading"></g-icon>
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
      },
      loading: {
        type: true,
        default: false
      }
    }
  }
</script>
<style scoped lang="scss">
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

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
    .loading {
      animation: spin 2s infinite linear;
    }
  }

</style>
