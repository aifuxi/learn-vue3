import { onBeforeUnmount, onMounted, ref } from "vue";

export const useMouse = () => {
  const x = ref(0);
  const y = ref(0);

  const handle = (e: any) => {
    console.log(e.clientX, e.clientY);
    x.value = e.clientX;
    y.value = e.clientY;
  };

  onMounted(() => {
    window.document.addEventListener("mousedown", () => {
      window.document.addEventListener("mousemove", handle);
    });
    window.document.addEventListener("mouseup", () => {
      window.document.removeEventListener("mousemove", handle);
    });
  });

  onBeforeUnmount(() => {
    window.document.removeEventListener("mousemove", handle);
    // TODO 移除 mouseup  mousedown 事件
  });

  return { x, y };
};
