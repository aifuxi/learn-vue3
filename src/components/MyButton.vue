<template>
  <div>
    <button @click="handleEmitScale" :style="{ fontSize: `${props.s}rem` }">
      My Button
    </button>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits<{ (e: "scale", s: number): void }>();

const props = defineProps<{ s: number }>();

function handleEmitScale() {
  emits("scale", 2);
}
</script>

<style scoped></style>
