<template>
  <div>
    我是first vue

    {{ count }}
    <br />
    {{ shallowPerson.name }}

    <button @click="handleAddCount">增加</button>
    <button @click="handleClick" ref="shallow">shallow增加</button>
  </div>
</template>

<script setup lang="ts">
import { ref, isRef, shallowRef, triggerRef, onMounted } from "vue";

const count = ref(10);

const shallowPerson = shallowRef({ name: "aifuxi" });
const shallow = ref<HTMLButtonElement>();

onMounted(() => {
  console.log("shallow:", shallow);
});

function handleAddCount() {
  count.value += 10;

  console.log("isRef(count):", isRef(count));
  shallowPerson.value.name = "999999";
  console.log(shallowPerson);
}

function handleClick() {
  shallowPerson.value.name = "999999";
  console.log(shallowPerson);
  triggerRef(shallowPerson);
}
</script>

<style scoped></style>
