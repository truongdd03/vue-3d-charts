<template>
  <template v-if="!hideTicks">
    <!-- Tick labels -->
    <Suspense
      v-for="x in limit + 1"
      :key="x"
    >
      <Text3D
        :font="fontPath"
        :text="`${x - 1}`"
        :size="0.2"
        :bevel-enabled="false"
        :rotation="getRotation()"
        :position="getPosition(x - 1, 0.3)"
        :height="0.01"
      >
        <TresMeshBasicMaterial :color="color" />
      </Text3D>
    </Suspense>
  </template>

  <!-- Data labels -->
  <template v-if="dataLabels">
    <Suspense
      v-for="(x, i) in dataLabels"
      :key="x"
    >
      <Text3D
        :font="fontPath"
        :text="x"
        :size="0.2"
        :bevel-enabled="false"
        :rotation="getDataRotation()"
        :position="getPosition(i + 0.5, 0.3, dataLabelWidths[i])"
        :height="0.01"
      >
        <TresMeshBasicMaterial :color="color" />
      </Text3D>
    </Suspense>
  </template>

  <!-- Axis label -->
  <Suspense v-if="title">
    <Text3D
      :font="fontPath"
      :text="title"
      :size="0.2"
      :bevel-enabled="false"
      :rotation="getTitleRotation()"
      :position="getPosition(limit / 2, Math.max(...dataLabelWidths, 0) + 1)"
      :height="0.01"
    >
      <TresMeshBasicMaterial :color="color" />
    </Text3D>
  </Suspense>
</template>

<script setup lang="ts">
import { getTextWidth } from '@/utils/utils';
import { Text3D } from '@tresjs/cientos';
import { onBeforeMount, ref, type PropType, type Ref } from 'vue';

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
  dataLabels: {
    type: Array<string>,
    default: [],
  },
  limit: {
    type: Number,
    required: true,
  },
  xLimit: {
    type: Number,
    required: true,
  },
  yMin: {
    type: Number,
    default: 0,
  },
  scalingFactor: {
    type: Number,
    default: 1,
  },
  hideTicks: {
    type: Boolean,
    default: false,
  }
});

const dataLabelWidths: Ref<number[]> = ref([]);

onBeforeMount(async () => {
  dataLabelWidths.value = await Promise.all(props.dataLabels.map(async (label) => await getTextWidth(label)));
});

const getPosition = (offset: number, spacing: number, textWidth = 0) => {
  // By default, Text3D is centered
  // Add width / 2 here to left-center instead
  spacing += textWidth / 2;
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

const getDataRotation = () => {
  switch (props.axis) {
    case 'x':
    return [Math.PI * 0.5, Math.PI, Math.PI * 0.5];

    case 'z':
      return [Math.PI * 0.5, Math.PI, 0];

    case 'y':
      return getRotation();
  }
};
</script>
