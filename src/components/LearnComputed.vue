<template>
  <div>
    <table border="1" cellpadding="0" cellspacing="0" style="width: 100%">
      <thead>
        <tr>
          <td>名称</td>
          <td>价格</td>
          <td>数量</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>
            <button type="button" @click="item.count > 0 ? item.count-- : null">
              -
            </button>
            {{ item.count }}
            <button
              type="button"
              @click="item.count >= 0 ? item.count++ : null"
            >
              +
            </button>
          </td>
          <td><button type="button" @click="item.count = 0">删除</button></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>总价：{{ total }}元</td>
        </tr>
      </tfoot>
    </table>
  </div>
  <hr />
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";

type Product = {
  name: string;
  price: number;
  count: number;
};

const products = reactive<Product[]>([
  {
    name: "衣服",
    price: 200,
    count: 4,
  },
  {
    name: "裤子",
    price: 50,
    count: 2,
  },
  {
    name: "鞋子",
    price: 10,
    count: 20,
  },
]);

const total = computed(() => {
  return products.reduce((prev, cur) => {
    return prev + cur.count * cur.price;
  }, 0);
});
</script>

<style scoped></style>
