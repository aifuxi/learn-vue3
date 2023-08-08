<template>
  <hr />
  <div>
    {{ props.name }}
  </div>

  <button :disabled="props.disabled">我是按钮</button>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: "default name",
  },

  disabled: {
    type: Boolean,
  },
});
</script>

<style lang="scss" scoped></style>
