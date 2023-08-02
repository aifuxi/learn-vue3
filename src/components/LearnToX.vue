<template>
  <div>
    <hr />
    {{ p }}

    <br />

    <code>{{ name }}</code> -- <code>{{ age }}</code>

    <button type="button" @click="handleClick">修改</button>

    <h3>{{ newName }}</h3>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs, toRaw, onMounted, toRef } from "vue";

const p = reactive({ name: "gg", age: 20 });

// 如果想要解构reactive包装的值，需要使用toRefs
const { name, age } = toRefs(p);

const newName = toRef(p, "name");

onMounted(() => {
  // toRaw 返回原始值
  console.log(toRaw(p));
});

function handleClick() {
  newName.value = "我是新的name";
}
</script>

<style scoped></style>
