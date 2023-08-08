<template>
  <div>
    <hr />
    <input type="text" v-model="value" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps(["modelValue"]);
const emits = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(v) {
    emits("update:modelValue", v);
  },
});
</script>

<style scoped></style>
