<template>
  <div v-if="type == Type.Bar">
    <BarChart
      style="width: 100vw; height: 100vh;"
      :data="data"
    />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import BarChart from './BarChart.vue';
import { type ChartType, ChartType as Type } from '../types/types';

defineProps({
  type: {
    type: String as PropType<ChartType>,
    required: true,
  },
  data: {
    type: Array<Array<number>>,
    required: true,
  }
});
</script>
