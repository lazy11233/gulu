<template>
  <div class="wrapper" :class="{ error }">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    >
    <template v-if="error">
      <Icon name="error-circle" class="icon-error"></Icon>
      <span class="error-message">{{ error }}</span>
    </template>
  </div>
</template>
<script>
  import Icon from './Icon';

  export default {
    name: 'g-input',
    components: {
      Icon
    },
    props: {
      value: {
        required: false,
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    }
  }
</script>
<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 14px;
  $box-shadow-color: rgba(0, 0, 0, 0.5);
  $red: #f1354d;

  .wrapper {
    display: inline-flex;
    font-size: $font-size;
    align-items: center;
    justify-content: center;

    > :not(:last-child) { margin-right: .2em; }
    input {
      height: $height;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 0 8px;
      outline: none;
      font-size: inherit;

      &:hover { border-color: $border-color-hover; }

      &:focus { box-shadow: inset 0 1px 3px $box-shadow-color; }

      &[disabled], &[readonly] {
        border-color: #bbb;
        color: #bbb;
        cursor: not-allowed;
        user-select: none;
      }
    }

    &.error {
      > input { border-color: $red; }
    }

    .icon-error {fill: $red;}

    .error-message {color: $red;}
  }
</style>
