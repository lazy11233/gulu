<template>
  <div class="col"
      :class="[span && `col-${span}`, offset && `offset-${offset}`]"
      :style="{paddingLeft: gutter / 2 + 'px', paddingRight: gutter / 2 +'px'}">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'g-col',
    props: {
      span: {
        type: Number,
        required: false
      },
      offset: {
        type: Number,
        required: false
      }
    },
    data () {
      return {
        gutter: 0
      }
    }
  }
</script>
<style lang="scss" scoped>
  .col {
    height: 100px;
    width: 50%;
  }

  $class-prefix: col-;
  @for $n from 1 through 24 {
    .#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }

  $offset-prefix: offset-;
  @for $n from 1 through 24 {
    .#{$offset-prefix}#{$n} {
      margin-right: ($n / 24) * 100%;
    }
  }
</style>
