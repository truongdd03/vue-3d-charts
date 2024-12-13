<template>
  <div class="flex">
    <div
      style="width: 50vw; height: 100vh"
    >
      <BarChart
        :data="data"
        :config="config"
        style="width: 50vw; height: 100vh;"
      />
    </div>
    <div
      style="width: 50vw; height: 100vh"
    >
      <BarChart
        :data="data1"
        :config="config1"
        style="width: 50vw; height: 100vh;"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import BarChart from './components/BarChart.vue';
import type { ChartConfig } from './types/types';

const data = [
  [5, 2, 4, 6, 2],
  [9, 2, 3, 1, 3],
  [5, 5, 3, 1, 1],
  [4, 2, 5, 1, 7],
];

const data1 = [
  [0.5, 0.2, 0.4, 0.6, 0.2],
  [0.9, 0.2, 0.3, 0.1, 0.3],
  [0.5, 0.1, 0.3, 0.1, 0.1],
  [0.4, 0.2, 0.5, 0.1, 0.7],
];

const config: ChartConfig = {
  labels: {
    x: 'Season',
    y: 'Mean Temperature',
    z: 'Time Period',
    color: 'orange',
    xData: ['Spring', 'Summer', 'Fall', 'Winter'],
    hideXTicks: true,
  }
};

const config1: ChartConfig = {
  labels: {
    x: 'Season',
    y: 'Mean Temperature',
    z: 'Time Period',
  },
  autoRotate: true,
};
</script>
