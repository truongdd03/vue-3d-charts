<template>
  <TresPerspectiveCamera
    :position="[3, 3, 3]"
    :look-at="[0, 0, 0]"
  />
  <OrbitControls />
</template>

<script setup lang="ts">
import { OrbitControls } from '@tresjs/cientos';
</script>
