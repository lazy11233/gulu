<template>
  <button class="g-button">按钮</button>
</template>
<script>
export default {
  name: 'g-button',
}
</script>
<style lang="scss" scoped>
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  background-color: var(--button-bg);

  &:hover { border-color: var(--border-color-hover); }

  &:active { background: var(--button-bg-active); }

  &:focus { outline: none; }
}
</style>
