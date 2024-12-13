<template>
  <!-- xy -->
  <TresLineSegments
    :args="[getQuadsGrid(xLimit, yLimit + 1), new LineBasicMaterial({color: 'white'})]"
    :position="[xLimit / 2, (yLimit + 1) / 2, zLimit]"
  />

  <!-- xz -->
  <TresLineSegments
    :args="[getQuadsGrid(xLimit, zLimit), new LineBasicMaterial({color: 'white'})]"
    :position="[xLimit / 2, 0, zLimit / 2]"
    :rotation="[Math.PI * -0.5, 0, 0]"
  />

  <!-- yz -->
  <TresLineSegments
    :args="[getQuadsGrid(yLimit + 1, zLimit), new LineBasicMaterial({color: 'white'})]"
    :position="[xLimit, (yLimit + 1) / 2, zLimit / 2]"
    :rotation="[Math.PI * -0.5, Math.PI / 2, 0]"
  />

  <!-- x-Labels -->
  <AxisLabel
    axis="x"
    :color="config.labels.color || 'red'"
    :title="config.labels.x"
    :data-labels="config.labels.xData"
    :limit="xLimit"
    :x-limit="xLimit"
    :hide-ticks="config.labels.hideXTicks"
  />

  <!-- y-Labels -->
  <AxisLabel
    axis="y"
    :color="config.labels.color || 'red'"
    :title="config.labels.y"
    :limit="yLimit"
    :x-limit="xLimit"
    :y-min="yMin"
    :scaling-factor="scalingFactor"
    :hide-ticks="true"
  />

  <!-- z-Labels -->
  <AxisLabel
    axis="z"
    :color="config.labels.color || 'red'"
    :title="config.labels.z"
    :data-labels="config.labels.zData"
    :limit="zLimit"
    :x-limit="xLimit"
    :hide-ticks="config.labels.hideZTicks"
  />
</template>

<script setup lang="ts">
import AxisLabel from './AxisLabel.vue';
import type { ChartConfig } from '@/types/types';
import { LineBasicMaterial, PlaneGeometry } from 'three';
import type { PropType } from 'vue';

defineProps({
  xLimit: {
    type: Number,
    required: true,
  },
  yLimit: {
    type: Number,
    required: true,
  },
  zLimit: {
    type: Number,
    required: true,
  },
  yMin: {
    type: Number,
    required: true,
  },
  scalingFactor: {
    type: Number,
    required: true,
  },
  config: {
    type: Object as PropType<ChartConfig>,
    required: false,
    default() {
      return {};
    },
  },
});

// https://jsfiddle.net/mqdevWG/v95n0bgu/17/
const getQuadsGrid = (width: number, height: number) => {
  const g = new PlaneGeometry(width, height, width, height);
  const p = g.parameters;
  const segmentsX = (g.type == "TorusBufferGeometry" ? (p as any).tubularSegments : (p as any).radialSegments) || p.widthSegments || (p as any).thetaSegments || ((p as any).points.length - 1) || 1;
  const segmentsY = (g.type == "TorusBufferGeometry" ? (p as any).radialSegments : (p as any).tubularSegments) || p.heightSegments || (p as any).phiSegments || (p as any).segments || 1;
  const indices = [];
  for (let i = 0; i < segmentsY + 1; i++) {
    let index11 = 0;
    let index12 = 0;
    for (let j = 0; j < segmentsX; j++) {
      index11 = (segmentsX + 1) * i + j;
      index12 = index11 + 1;
      const index21 = index11;
      const index22 = index11 + (segmentsX + 1);
      indices.push(index11, index12);
      if (index22 < ((segmentsX + 1) * (segmentsY + 1) - 1)) {
        indices.push(index21, index22);
      }
    }
    if ((index12 + segmentsX + 1) <= ((segmentsX + 1) * (segmentsY + 1) - 1)) {
      indices.push(index12, index12 + segmentsX + 1);
    }
  }
  g.setIndex(indices);
  return g;
};
</script>
