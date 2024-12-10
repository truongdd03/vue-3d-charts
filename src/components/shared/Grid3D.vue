<template>
  <!-- <TresAxesHelper
    :args="[Math.max(xLimit, yLimit, zLimit)]"
  /> -->

  <!-- xy -->
  <TresLineSegments
    :args="[getQuadsGrid(xLimit, yLimit), new LineBasicMaterial({color: 'white'})]"
    :position="[xLimit / 2, yLimit / 2, zLimit]"
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
    :position="[xLimit, yLimit / 2, zLimit / 2]"
    :rotation="[Math.PI * -0.5, Math.PI / 2, 0]"
  />

  <!-- x-Labels -->
  <Suspense
    v-for="x in xLimit + 1"
    :key="x"
  >
    <Text3D
      :font="fontPath"
      :text="`${x - 1}`"
      :size="0.2"
      :bevel-enabled="false"
      :rotation="[Math.PI * 0.5, Math.PI, 0]"
      :position="[x - 1, 0, -0.3]"
      :height="0.01"
    >
      <TresMeshBasicMaterial color="orange" />
    </Text3D>
  </Suspense>
  <Suspense v-if="xLabel">
    <Text3D
      :font="fontPath"
      :text="xLabel"
      :size="0.2"
      :bevel-enabled="false"
      :rotation="[Math.PI * 0.5, Math.PI, 0]"
      :position="[xLimit / 2, 0, -1]"
      :height="0.01"
    >
      <TresMeshBasicMaterial color="orange" />
    </Text3D>
  </Suspense>

  <!-- y-Labels -->
  <Suspense
    v-for="y in yLimit"
    :key="y"
  >
    <Text3D
      :font="fontPath"
      :text="`${y}`"
      :size="0.2"
      :bevel-enabled="false"
      :rotation="[0, Math.PI * -0.5, 0]"
      :position="[xLimit, y, -0.3]"
      :height="0.01"
    >
      <TresMeshBasicMaterial color="orange" />
    </Text3D>
  </Suspense>
  <Suspense v-if="yLabel">
    <Text3D
      :font="fontPath"
      :text="yLabel"
      :size="0.2"
      :bevel-enabled="false"
      :rotation="[Math.PI * 0.5, Math.PI * -0.5, 0]"
      :position="[xLimit, yLimit / 2, -1]"
      :height="0.01"
    >
      <TresMeshBasicMaterial color="orange" />
    </Text3D>
  </Suspense>

  <!-- z-Labels -->
  <Suspense
    v-for="z in zLimit + 1"
    :key="z"
  >
    <Text3D
      :font="fontPath"
      :text="`${z - 1}`"
      :size="0.2"
      :bevel-enabled="false"
      :rotation="[Math.PI * 0.5, Math.PI, Math.PI * 0.5]"
      :position="[-0.3, 0, z - 1]"
      :height="0.01"
    >
      <TresMeshBasicMaterial color="orange" />
    </Text3D>
  </Suspense>
  <Suspense v-if="zLabel">
    <Text3D
      :font="fontPath"
      :text="zLabel"
      :size="0.2"
      :bevel-enabled="false"
      :rotation="[Math.PI * 0.5, Math.PI, Math.PI * 0.5]"
      :position="[-1, 0, zLimit / 2]"
      :height="0.01"
    >
      <TresMeshBasicMaterial color="orange" />
    </Text3D>
  </Suspense>
</template>

<script setup lang="ts">
import { Text3D } from '@tresjs/cientos';
import { LineBasicMaterial, PlaneGeometry } from 'three';

const fontPath = 'https://raw.githubusercontent.com/Tresjs/assets/main/fonts/FiraCodeRegular.json';

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
  xLabel: {
    type: String,
    required: false,
    default: '',
  },
  yLabel: {
    type: String,
    required: false,
    default: '',
  },
  zLabel: {
    type: String,
    required: false,
    default: '',
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
