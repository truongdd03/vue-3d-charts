<template>
  <TresPerspectiveCamera
    :position="[-5, yLimit, -5]"
  />
  <OrbitControls
    :target="[xLimit / 2, yLimit / 2, zLimit / 2]"
    :auto-rotate="autoRotate"
  />
  <TresAmbientLight />
</template>

<script setup lang="ts">
import { OrbitControls } from '@tresjs/cientos';

defineProps({
  xLimit: {
    type: Number,
    required: true,
  },
  yLimit: {
    type: Number,
    required: true,
  },
  zLimit: {
    type: Number,
    required: true,
  },
  autoRotate: {
    type: Boolean,
    default: false,
  }
});
</script>
