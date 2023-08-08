<template>
  <div>
    <hr />
    <h2>标题：{{ title }}</h2>
    <p>内容：{{ content }}</p>
    <div>阅读数：{{ count }}</div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  title: string;
  content: string;
  count: number;
};

defineProps<Props>();
</script>

<style scoped></style>
