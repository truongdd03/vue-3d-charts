<template>
  <BarChart
    :data="data"
    style="width: 100vw; height: 100vh;"
    x-label="Season"
    y-label="Mean Temperature"
    z-label="Time Period"
  />
</template>

<script setup lang="ts">
import BarChart from './components/BarChart.vue';

const data = [
  [5, 2, 4, 6, 2],
  [9, 2, 3, 1, 3],
  [5, 5, 3, 1, 1],
  [4, 2, 5, 1, 7],
  [6, 1, 3, 7, 3],
  [9, 2, 1, 4, 7],
];
</script>
