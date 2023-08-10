import { defineStore } from "pinia";
import { ref } from "vue";

type State = {
  /** 计数 */
  count: number;
  /** 名字 */
  name: string;
};

export const useCounterStore = defineStore("counter", {
  state: (): State => {
    return {
      count: 10,
      name: "xx",
    };
  },

  actions: {
    increment() {
      this.count++;
    },
  },
});

export const useCounterStoreV2 = defineStore("counterV2", () => {
  const count = ref(1);

  function double() {
    count.value *= 2;
  }

  return { count, double };
});
