<template>
  <Suspense
    v-for="x in limit + 1"
    :key="x"
  >
    <Text3D
      :font="fontPath"
      :text="`${axis == 'y' ? x : x - 1}`"
      :size="0.2"
      :bevel-enabled="false"
      :rotation="getRotation()"
      :position="getPosition(axis == 'y' ? x : x - 1, 0.3)"
      :height="0.01"
    >
      <TresMeshBasicMaterial :color="color" />
    </Text3D>
  </Suspense>
  <Suspense v-if="title">
    <Text3D
      :font="fontPath"
      :text="title"
      :size="0.2"
      :bevel-enabled="false"
      :rotation="getTitleRotation()"
      :position="getPosition(limit / 2, 1)"
      :height="0.01"
    >
      <TresMeshBasicMaterial :color="color" />
    </Text3D>
  </Suspense>
</template>

<script setup lang="ts">
import { Text3D } from '@tresjs/cientos';
import type { PropType } from 'vue';

const fontPath = 'https://raw.githubusercontent.com/Tresjs/assets/main/fonts/FiraCodeRegular.json';

const props = defineProps({
  axis: {
    type: String as PropType<'x' | 'y' | 'z'>,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
  limit: {
    type: Number,
    required: true,
  },
  xLimit: {
    type: Number,
    required: true,
  },
});

const getPosition = (offset: number, spacing: number) => {
  switch (props.axis) {
    case 'x':
      return [offset, 0, -spacing];

    case 'y':
      return [props.xLimit, offset, -spacing];

    case 'z':
      return [-spacing, 0, offset];
  }
};

const getRotation = () => {
  switch (props.axis) {
    case 'x':
      return [Math.PI * 0.5, Math.PI, 0];

    case 'y':
      return [0, Math.PI * -0.5, 0];

    case 'z':
      return [Math.PI * 0.5, Math.PI, Math.PI * 0.5];
  }
};

const getTitleRotation = () => {
  switch (props.axis) {
    case 'x':
    case 'z':
      return getRotation();

    case 'y':
      return [Math.PI * 0.5, Math.PI * -0.5, 0];
  }
};
</script>
