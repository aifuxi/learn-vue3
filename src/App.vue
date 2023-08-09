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
import CustomInput from "./components/CustomInput.vue";
import CustomInputV2 from "./components/CustomInputV2.vue";
import UserName from "./components/UserName.vue";
import FancyButton from "./components/FancyButton.vue";
import BaseLayout from "./components/BaseLayout.vue";
import { useMouse } from "./hooks";
import { RouterView } from "vue-router";

const post = ref({
  title: "我我我哦我试试棒棒糖",
  content: "ggggggggggggggg",
  count: 10000,
});

const btnFontSize = ref(1);

const inputValue = ref("1122231");

const inputValueV2 = ref("GG");

const firstName = ref("first");
const lastName = ref("last");

const { x, y } = useMouse();
</script>

<template>
  <RouterLink to="/"> HOME </RouterLink>
  <RouterLink to="/about"> ABOUT </RouterLink>
  <RouterLink to="/users/123"> USER1</RouterLink>
  <RouterLink to="/users/456"> USER2 </RouterLink>

  <RouterView></RouterView>

  <hr />
  <h1 style="margin-bottom: 100vh">{{ x }}, {{ y }}</h1>

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

  <CustomInput v-model="inputValue" />
  <h2>{{ inputValue }}</h2>

  <hr />
  <CustomInputV2 v-model="inputValueV2" />
  <h2>{{ inputValueV2 }}</h2>

  <UserName
    v-model:first-name.capitalize="firstName"
    v-model:last-name.uppercase="lastName"
  />

  <FancyButton>
    <span>Button span1</span>

    <span>Button span2</span>
  </FancyButton>

  <FancyButton />

  <BaseLayout>
    <template #header>
      <h2>我是HEADER</h2>
    </template>

    <template #main>
      <p>我是MAIN</p>
    </template>
    <template #footer> 我是FOOTER </template>

    <template #default> 我是默认的DEFAULT </template>
  </BaseLayout>
</template>
