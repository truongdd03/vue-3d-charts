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
</script>
