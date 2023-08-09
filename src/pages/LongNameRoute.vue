<template>
  <div>
    LongNameRoute

    <h1>当前的路径{{ $route.path }}</h1>
    <button @click="$router.back()">返回</button>

    {{
      $router
        .getRoutes()
        .reduce((pre, curr) => pre + curr.path + "========", "")
    }}
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
