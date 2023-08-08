<template>
  <div>
    <input
      type="text"
      :value="modelValue"
      @input="
        $emit(
          'update:modelValue',
          ($event.currentTarget as HTMLInputElement).value
        )
      "
    />
  </div>
</template>

<script setup lang="ts">
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<style scoped></style>
