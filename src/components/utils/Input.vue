<template>
  <b-form-input
    :v-model="props.model"
    :placeholder="placeholder"
    class="rounded-pill p-2 ps-4 mb-3 text-light border-primary"
    :class="bg"
  ></b-form-input>
</template>

<script setup lang="ts">
interface Props {
  model: string | number;
  placeholder: string;
  bg?: string;
}

const props = withDefaults(defineProps<Props>(), {
  bg: "bg-primary",
});
</script>
