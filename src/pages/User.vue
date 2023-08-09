<template>
  <div>
    当前用户ID为：
    {{ route.params["id"] }}

    <div>
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

console.log(route.params);
</script>

<style scoped></style>
