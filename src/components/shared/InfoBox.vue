<template>
  <p
    class="relative bg-black text-white p-2 inline-block rounded select-none"
    :style="{ left: `${mousePos.x + 15}px`, top: `${mousePos.y - 20}px` }"
  >
    {{ text }}
  </p>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';

const mousePos: Ref<{x: number, y: number}> = ref({x: 0, y: 0});

defineProps({
  text: {
    type: String,
    required: true,
  }
});

window.onmousemove = (e) => {
  mousePos.value = { x: e.offsetX, y: e.offsetY };
};
</script>
