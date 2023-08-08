<template>
  <hr />
  <div>
    {{ n }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const n = ref(0);
</script>

<style scoped></style>
