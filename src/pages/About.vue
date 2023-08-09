<template>
  <div>
    ABOUT

    <h2>{{ abc }}</h2>
    <button @click="goToUser">去USER页面</button>
    <button @click="goToUserPost">去USER POST页面</button>
    <button @click="goToUserPostWithQuery">去USER POST页面带上query</button>
    <button @click="goToLong">去long页面</button>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { LONG_ROUTE_NAME } from "../constants";

defineProps(["abc"]);
const router = useRouter();

// console.log(router);

const route = useRoute();

console.log(route, "ggggggggggg");

function goToUser() {
  router.push("/users/12312321");
}
function goToUserPost() {
  router.push({ path: "/users/999/post" });
}
function goToUserPostWithQuery() {
  router.push({
    path: "/users/999/post",
    query: {
      id: 999999,
      name: "aifuxi",
    },
  });
}
function goToLong() {
  router.push({
    name: LONG_ROUTE_NAME,
  });
}
</script>

<style scoped></style>
