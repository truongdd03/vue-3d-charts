# vue-3d-charts

**WARNING: Work In Progress!!!**

3D chart library written in Vue 3 and TresJS.

Supported Charts:
- [Bar Chart](#bar-chart)
- Line Chart (Todo)
- Heatmap (Todo)
- Pie Chart (Todo)

## Installation

Todo

## Getting Started

### Bar Chart

```vue
<template>
  <BarChart
    :data="data"
    :config="config"
    style="width: 100vw; height: 100vh;"
  />
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

const config: ChartConfig = {
  labels: {
    x: 'Season',
    y: 'Mean Temperature',
    z: 'Time Period',
    color: 'red',
  }
};
</script>
```

<img width="398" alt="Screenshot 2024-12-10 at 7 33 45 PM" src="https://github.com/user-attachments/assets/eb0fcae0-7fcc-47b3-993b-426ea343a5ba">

## For Developers

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
