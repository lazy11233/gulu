<template>
  <div class="col" :class="[`col-${span}`]">
    <slot>

    </slot>
  </div>
</template>
<script>
  export default {
    name: 'g-col',
    props: {
      span: {
        type: Number,
        required: false
      }
    }
  }
</script>
<style lang="scss" scoped>
  .col {
    height: 100px;
    background-color: grey;
    border: 1px solid red;
    width: 50%;
  }

  $class-prefix: col-;
  @for $n from 1 through 24 {
    .#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
</style>
