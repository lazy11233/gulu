<template>
  <div class="wrapper" :error="{ error }">
    <input type="text" :value="value" @input="$emit('input')" :disabled="disabled" :readonly="readonly">
    <template v-if="error">
      <Icon name="error-circle"></Icon>
      <span>{{ error }}</span>
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

  .wrapper {
    display: inline-flex;
    font-size: $font-size;
    align-items: center;
    justify-content: center;

    input {
      height: $height;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 8px;
      outline: none;
      font-size: inherit;

      &:hover {
        border-color: $border-color-hover;
      }

      &:focus {
        box-shadow: inset 0 1px 3px $box-shadow-color;
      }

      &[disabled], &[readonly] {
        border-color: #bbb;
        color: #bbb;
        cursor: not-allowed;
        user-select: none;
      }
    }
  }
</style>
