<template>
  <TresAxesHelper
    :args="[Math.max(xLimit, yLimit, zLimit)]"
  />

  <!-- xy -->
  <TresLineSegments
    :args="[getQuadsGrid(xLimit, yLimit), new LineBasicMaterial({color: 'white'})]"
    :position="[xLimit / 2, yLimit / 2, 0]"
  />

  <!-- xz -->
  <TresLineSegments
    :args="[getQuadsGrid(xLimit, zLimit), new LineBasicMaterial({color: 'white'})]"
    :position="[xLimit / 2, 0, zLimit / 2]"
    :rotation="[Math.PI * -0.5, 0, 0]"
  />

  <!-- yz -->
  <TresLineSegments
    :args="[getQuadsGrid(yLimit, zLimit), new LineBasicMaterial({color: 'white'})]"
    :position="[0, yLimit / 2, zLimit / 2]"
    :rotation="[Math.PI * -0.5, Math.PI / 2, 0]"
  />
</template>

<script setup lang="ts">
import { LineBasicMaterial, PlaneGeometry } from 'three';

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
  }
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
