<template>
  <!-- <div class=""> -->
  <div
    :style="`max-width: 28rem; min-width: 28rem; max-height: 15rem; min-height: 15rem; bottom: ${bottom}; right: ${right} `"
    class="sceletton bg-white"
  >
    <div class="bg-dark sceletton_header">
      <div class="sceletton_point"></div>
      <div class="sceletton_point"></div>
      <div class="sceletton_point"></div>
      <div class="sceletton_point sceletton_point--lg"></div>
    </div>
    <div class="d-flex gap-2 m-3">
      <div class="bg-black sceletton_col rounded">
        <div class="sceletton_lg"></div>
        <div class="sceletton_sm"></div>
        <div class="sceletton_sm"></div>
        <div class="sceletton_sm"></div>
        <div class="sceletton_sm"></div>
        <div class="sceletton_sm"></div>
      </div>
      <b-col class="bg-black sceletton_col"> </b-col>
    </div>
  </div>
  <!-- </div> -->
</template>

<script setup lang="ts">
export interface Props {
  inner?: "cards" | "diagram";
  bottom: string;
  right: string;
}

const { inner = "cards", bottom, right } = defineProps<Props>();
</script>

<style scoped lang="scss">
.sceletton {
  position: absolute;

  &_header {
    height: 2rem;
    padding: 0.25rem;
    border-top-left-radius: 4px;
  }

  &_point {
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    margin-left: 0.25rem;
    background-color: $gray-40;
    border-radius: 50%;

    &--lg {
      width: 0.75rem;
      height: 0.75rem;
    }
  }

  &_col {
    width: 3rem;
    height: 5rem;
  }

  &_lg {
    width: 70%;
    // height: 10px;
  }
}
</style>
