<template>
  <div>
    <TresCanvas>
      <MyCamera
        :x-limit="safeGetMatrixWidth(data)"
        :y-limit="safeGetMaxValInMatrix(data)"
        :z-limit="data.length"
      />
      <Grid3D
        :x-limit="data.length"
        :y-limit="safeGetMaxValInMatrix(data)"
        :z-limit="safeGetMatrixWidth(data)"
        :config="config"
      />

      <!-- Actual Bar Chart Starts Here -->
      <template
        v-for="(row, i) in data"
        :key="i"
      >
        <TresMesh
          v-for="(cell, j) in row"
          :key="j"
        >
          <TresBoxGeometry
            :args="[0.5, cell, 0.5]"
            :translate="[i + 0.5, cell / 2, j + 0.5]"
          />
          <TresMeshStandardMaterial
            :color="getBarColor(cell, safeGetMaxValInMatrix(data), 'red')"
            :opacity="0.7"
            :transparent="true"
          />
        </TresMesh>
      </template>
    </TresCanvas>
  </div>
</template>

<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import Grid3D from './shared/Grid3D/Grid3D.vue';
import MyCamera from './shared/MyCamera.vue';
import { safeGetMatrixWidth, safeGetMaxValInMatrix } from '@/utils/utils';
import type { ChartConfig } from '@/types/types';
import type { PropType } from 'vue';
import parse from 'color-parse';

defineProps({
  data: {
    type: Array<Array<number>>,
    required: true,
  },
  config: {
    type: Object as PropType<ChartConfig>,
    required: false,
    default() {
      return { color: 'black' };
    },
  },
});

const getBarColor = (value: number, maxValue: number, baseColor: string) => {
  const brightness = value / maxValue;
  const color = parse(baseColor);
  const adjustedColor = [
    Math.floor(color.values[0] * brightness),
    Math.floor(color.values[1] * brightness),
    Math.floor(color.values[2] * brightness),
  ];
  return `rgb(${adjustedColor.join(",")})`;
};
</script>
