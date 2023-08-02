<template>
  <div>
    <form action="" @submit.prevent="handleFormSubmit">
      <input type="text" v-model="p.name" />
      <br />
      <input type="text" v-model="p.age" />
      <br />
      <button type="submit">提交</button>
    </form>

    <pre>{{ p2 }}</pre>

    <hr />

    <button type="button" @click="handleModify">修改ShallowReactive</button>
    <pre>
      {{ p3 }}
    </pre>
  </div>
</template>

<script setup lang="ts">
import { reactive, readonly, shallowReactive } from "vue";

type Person = {
  name: string;
  age: string;
};

const p = reactive<Person>({ name: "", age: "" });
const p2 = readonly(p);
const p3 = shallowReactive<any>({ key: { key2: { key3: "sssss" } } });

function handleFormSubmit() {
  console.log("p.name:", p.name);
  console.log("p.age:", p.age);
}

function handleModify() {
  // p3.key.key2.key3 = "996996996";
  // console.log(p3.key.key2.key3);

  p3.key = {
    key2: {
      key3: "'let's go",
    },
  };
}
</script>

<style scoped></style>
