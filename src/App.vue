<script setup lang="ts">
import FirstVue from "./components/FirstVue.vue";
import LearnComputed from "./components/LearnComputed.vue";
import LearnReactive from "./components/LearnReactive.vue";
import LearnToX from "./components/LearnToX.vue";
import LearnWatch from "./components/LearnWatch.vue";
import MyComponent from "./components/MyComponent.vue";
import TestRef from "./components/TestRef.vue";
</script>

<template>
  <FirstVue />
  <LearnReactive />
  <LearnToX />
  <LearnComputed />
  <LearnWatch />
  <TestRef />

  <hr />
  <h2>global components</h2>
  <ComponentA />
  <ComponentB />
  <ComponentC />

  <MyComponent />

  <my-component />
</template>
