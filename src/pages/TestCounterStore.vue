<template>
  <div>
    <h1>当前的Count-----{{ counter.count }} ---- {{ counter.name }}</h1>

    <button @click="counter.count++">增加Count</button>
    <button @click="usePatchIncrementCount">使用patch增加Count</button>
    <button @click="useActionIncrementCount">使用action增加Count</button>
    <button @click="counter.$reset">重置</button>

    <hr />

    <h1>V2：当前的Count-----{{ counterV2.count }}</h1>
    <button @click="counterV2.double">DOUBLE</button>

    <hr />
    <h1>storeToRefs解构出来的count：{{ count }}</h1>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCounterStore, useCounterStoreV2 } from "../stores/counter";

const counter = useCounterStore();

function usePatchIncrementCount() {
  counter.$patch({ count: counter.count + 1 });
}

function useActionIncrementCount() {
  counter.increment();
}

const counterV2 = useCounterStoreV2();

const { count } = storeToRefs(counterV2);
</script>

<style scoped></style>
