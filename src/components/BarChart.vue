<template>
  <div
    class="absolute"
    :style="style"
  >
    <TresCanvas>
      <MyCamera
        :x-limit="data.length"
        :y-limit="10"
        :z-limit="safeGetMatrixWidth(data)"
        :auto-rotate="config.autoRotate"
      />
      <Grid3D
        :x-limit="data.length"
        :y-limit="10"
        :y-min="minValue"
        :scaling-factor="scalingFactor"
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
          :position="[i + 0.5, getScaledValue(cell, minValue, scalingFactor) / 2, j + 0.5]"
          @pointer-enter="(e) => {
            barColors[i][j] = 'yellow';
            hoveringIndex = { x: i, y: j };
            e.stopPropagation();
          }"
          @pointer-leave="(e) => {
            barColors[i][j] = getBarColor(getScaledValue(cell, minValue, scalingFactor), 10, 'red');
            hoveringIndex = null;
          }"
        >
          <TresBoxGeometry
            :args="[0.5, getScaledValue(cell, minValue, scalingFactor), 0.5]"
          />
          <TresMeshStandardMaterial
            :color="barColors[i][j]"
            :opacity="0.7"
            :transparent="true"
          />
        </TresMesh>
      </template>
    </TresCanvas>
  </div>
  <InfoBox
    v-if="hoveringIndex"
    :text="`Value: ${data[hoveringIndex.x][hoveringIndex.y]}`"
  />
</template>

<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import Grid3D from './shared/Grid3D/Grid3D.vue';
import MyCamera from './shared/MyCamera.vue';
import InfoBox from './shared/InfoBox.vue';
import { safeGetMatrixWidth, getScalingFactor, safeGetMinValInMatrix, getScaledValue } from '@/utils/utils';
import type { ChartConfig } from '@/types/types';
import { onBeforeMount, ref, type PropType, type Ref } from 'vue';
import parse from 'color-parse';

const barColors: Ref<string[][]> = ref([]);
const minValue: Ref<number> = ref(0);
const scalingFactor: Ref<number> = ref(1); // scaled factor for better visualization
const hoveringIndex: Ref<{x: number, y: number} | null> = ref(null);

const props = defineProps({
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
  style: {
    type: Object as PropType<any>,
    required: false,
    default() {
      return {};
    },
  }
});

onBeforeMount(() => {
  barColors.value = [];
  scalingFactor.value = getScalingFactor(props.data);
  minValue.value = safeGetMinValInMatrix(props.data);

  props.data.forEach((row, i) => {
    barColors.value.push([]);
    row.forEach((cell) => {
      barColors.value[i].push(getBarColor(getScaledValue(cell, minValue.value, scalingFactor.value), 10, 'red'));
    });
  });
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
