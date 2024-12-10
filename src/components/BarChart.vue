<template>
  <div>
    <TresCanvas>
      <MyCamera
        :x-limit="safeGetMatrixWidth(data)"
        :y-limit="safeGetMaxValInMatrix(data)"
        :z-limit="data.length"
      />
      <Grid3D
        :x-limit="safeGetMatrixWidth(data)"
        :y-limit="safeGetMaxValInMatrix(data)"
        :z-limit="data.length"
        :x-label="xLabel"
        :y-label="yLabel"
        :z-label="zLabel"
      />
    </TresCanvas>
  </div>
</template>

<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import Grid3D from './shared/Grid3D.vue';
import MyCamera from './shared/MyCamera.vue';
import { safeGetMatrixWidth, safeGetMaxValInMatrix } from '@/utils/utils';

defineProps({
  data: {
    type: Array<Array<number>>,
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
</script>
