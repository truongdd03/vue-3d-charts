<template>
  <div>
    <TresCanvas>
      <MyCamera />
      <Grid3D
        :x-limit="safeGetMatrixWidth(data)"
        :y-limit="safeGetMaxValInMatrix(data)"
        :z-limit="data.length"
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
  }
});
</script>
