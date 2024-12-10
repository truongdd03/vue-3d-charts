<template>
  <Chart3D
    :type="ChartType.Bar"
    :data="data"
  />
</template>

<script setup lang="ts">
import Chart3D from './components/Chart3D.vue';
import { ChartType } from './types/types';

const data = [
  [5, 2, 4, 6, 2],
  [9, 2, 3, 1, 3],
  [5, 5, 3, 1, 1],
  [4, 2, 5, 1, 7],
  [6, 1, 3, 7, 3],
  [9, 2, 1, 4, 7],
];
</script>
