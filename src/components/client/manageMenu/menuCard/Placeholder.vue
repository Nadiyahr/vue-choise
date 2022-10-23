<template>
  <b-skeleton
    :class="`bg-gray-20 ${props.addClass}`"
    animation
    :width="props.width"
    :height="props.height"
  ></b-skeleton>
</template>

<script setup lang="ts">
interface Props {
  width?: string;
  height?: string;
  addClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  width: "90%",
  height: "3%",
  addClass: "mb-2",
});
</script>
