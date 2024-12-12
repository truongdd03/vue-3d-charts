# vue-3d-charts

**WARNING: Work In Progress!!!**

3D chart library written in Vue 3 and TresJS.

Supported Charts:
- [Bar Chart](#bar-chart)
- Line Chart (Todo)
- Heatmap (Todo)
- Pie Chart (Todo)

## Installation

```bash
npm i vue-3d-charts
```

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
import { BarChart, type ChartConfig } from 'vue-3d-charts';

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
  },
  autoRotate: true,
};
</script>
```

![bar-chart](https://github.com/user-attachments/assets/f584b3ea-f182-4b36-97c3-028735b64fb5)


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
