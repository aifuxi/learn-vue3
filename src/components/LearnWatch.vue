<template>
  <hr />
  <div>
    <input type="text" v-model="name" />
    <input type="text" v-model="com.foo.bar.zin" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const name = ref("gg bound");

watch(name, (newVal, oldVal) => {
  console.log(newVal, oldVal);
});

const com = ref({
  foo: {
    bar: {
      zin: "abcdedg",
    },
  },
});

watch(
  com,
  (newVal, oldVal) => {
    console.log(newVal, oldVal);
  },
  { deep: true, immediate: true }
);
</script>

<style scoped></style>
