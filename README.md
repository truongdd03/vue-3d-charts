# vue-3d-charts

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<a href="https://www.npmjs.com/package/vue-3d-charts"><img src="https://img.shields.io/npm/v/vue-3d-charts?color=%2382DBCA&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjY4NTQgMy40MjkxNkMxMi4wNzM4IDIuNzgxODIgMTMuMDEyIDIuNzgxODIgMTMuNDAwNCAzLjQyOTE1TDE5LjE3NzEgMTMuMDU2OUMxOS41NzcgMTMuNzIzNSAxOS4wOTY5IDE0LjU3MTQgMTguMzE5NiAxNC41NzE0SDYuNzY2MjRDNS45ODg5NCAxNC41NzE0IDUuNTA4ODMgMTMuNzIzNSA1LjkwODc1IDEzLjA1NjlMMTEuNjg1NCAzLjQyOTE2WiIgZmlsbD0iIzgyREJDNSIvPgo8cGF0aCBkPSJNMTUuNjg1NyAxMC41NDI5QzE1LjY4NTcgOS45OTA1OSAxNi4xMzM0IDkuNTQyODggMTYuNjg1NyA5LjU0Mjg4SDI2QzI2LjU1MjIgOS41NDI4OCAyNyA5Ljk5MDU5IDI3IDEwLjU0MjlWMTkuODU3MkMyNyAyMC40MDk0IDI2LjU1MjIgMjAuODU3MiAyNiAyMC44NTcySDE2LjY4NTdDMTYuMTMzNCAyMC44NTcyIDE1LjY4NTcgMjAuNDA5NCAxNS42ODU3IDE5Ljg1NzJWMTAuNTQyOVoiIGZpbGw9IiM0RjRGNEYiLz4KPGNpcmNsZSBjeD0iMTYiIGN5PSIyMiIgcj0iNiIgZmlsbD0iI0VGQUMzNSIvPgo8L3N2Zz4K" alt="npm package"></a>
![](https://github.com/truongdd03/vue-3d-charts/workflows/Build/badge.svg)


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
