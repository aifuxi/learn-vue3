<script setup lang="ts">
import { ref } from "vue";
import BlogPost from "./components/BlogPost.vue";
import FirstVue from "./components/FirstVue.vue";
import LearnComputed from "./components/LearnComputed.vue";
import LearnReactive from "./components/LearnReactive.vue";
import LearnToX from "./components/LearnToX.vue";
import LearnWatch from "./components/LearnWatch.vue";
import MyComponent from "./components/MyComponent.vue";
import TestRef from "./components/TestRef.vue";
import TestProps from "./components/TestProps.vue";
import MyButton from "./components/MyButton.vue";

const post = ref({
  title: "我我我哦我试试棒棒糖",
  content: "ggggggggggggggg",
  count: 10000,
});

const btnFontSize = ref(1);
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

  <BlogPost title="这是标题" content="lorem lorem" :count="20" />
  <BlogPost v-bind="post" />

  <TestProps name="Bob" disabled />

  <MyButton :s="btnFontSize" @scale="(s) => (btnFontSize += s)" />
</template>
