<template>
<svg class="g-icon">
  <use :xlink:href="`#i-${name}`"></use>
</svg>
</template>
<script>
export default {
  name: 'g-icon',
  props: {
    name: {
      required: true,
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
.g-icon {
  height: 1em;
  width: 1em;
}
</style>

