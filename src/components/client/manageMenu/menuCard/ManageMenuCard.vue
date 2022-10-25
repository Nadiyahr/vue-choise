<template>
  <div :style="`bottom: ${bottom}; right: ${right} `" class="skeleton bg-white">
    <div class="bg-dark skeleton_header">
      <div class="skeleton_point"></div>
      <div class="skeleton_point"></div>
      <div class="skeleton_point"></div>
    </div>
    <div class="d-flex gap-3 m-3 ms-4 me-0">
      <b-col cols="3" class="bg-black p-2 pt-3">
        <Placeholder width="70%" height="5%" gray="80" />
        <Placeholder gray="80" />
        <Placeholder gray="80" />
        <Placeholder gray="80" />
        <Placeholder gray="80" />
        <Placeholder gray="80" />
        <Placeholder gray="80" />
      </b-col>
      <b-col v-if="inner" class="skeleton_col 4 position-relative">
        <div class="bg-gray-10 skeleton_header skeleton_header-gr">
          <Placeholder width="25%" height="35%" add-class="mb-3" />
          <div class="mt-1">
            <div class="skeleton_point skeleton_point--lg"></div>
            <div class="skeleton_point skeleton_point--lg"></div>
            <div class="skeleton_point skeleton_point--lg"></div>
          </div>
        </div>
        <b-img fluid class="my-4" src="images/bgLine1.svg" alt="Map Image"></b-img>
        <b-img
          fluid
          class="position-absolute start-0 t-30"
          src="images/bgLine2.svg"
          alt="Map Image"
        ></b-img>
        <div class="bg-gray-10 w-100 skeleton_line"></div>

        <div class="bg-gray-10 d-flex gap-2 skeleton_bottom">
          <div class="skeleton_point m-auto"></div>
          <Placeholder width="16%" height="0.2rem" add-class="d-inline-block" />
          <Placeholder width="16%" height="0.2rem" add-class="d-inline-block" />
          <Placeholder width="16%" height="0.2rem" add-class="d-inline-block" />
          <Placeholder width="16%" height="0.2rem" add-class="d-inline-block" />
        </div>
        <div class="bg-gray-10 d-flex gap-2 skeleton_bottom">
          <div class="skeleton_point m-auto"></div>
          <Placeholder width="16%" height="0.2rem" add-class="d-inline-block" />
          <Placeholder width="16%" height="0.2rem" add-class="d-inline-block" />
          <Placeholder width="16%" height="0.2rem" add-class="d-inline-block" />
          <Placeholder width="16%" height="0.2rem" add-class="d-inline-block" />
        </div>
      </b-col>
      <b-col v-else class="skeleton_col skeleton_col-else gap-3">
        <div class="d-flex gap-3">
          <CardPlaceholder />
          <CardPlaceholder />
          <CardPlaceholder />
        </div>
        <div class="d-flex gap-3">
          <CardPlaceholder />
          <CardPlaceholder />
          <CardPlaceholder />
        </div>
      </b-col>
    </div>
  </div>
</template>

<script setup lang="ts">
import Placeholder from "./Placeholder.vue";
import CardPlaceholder from "./CardPlaceholder.vue";
export interface Props {
  inner?: boolean;
  bottom: string;
  right: string;
}

const { inner = true, bottom, right } = defineProps<Props>();
</script>

<style scoped lang="scss">
.skeleton {
  position: absolute;
  max-width: 92%;
  min-width: 92%;
  max-height: 52%;
  min-height: 50%;
  overflow: hidden;

  &_header {
    height: 2rem;
    padding: 0.25rem;
    border-top-left-radius: 4px;

    &-gr {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 3.5rem;
      padding-left: 0.75rem;
      border-radius: 0;
    }
  }

  &_point {
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    margin-left: 0.25rem;
    background-color: $gray-20;
    border-radius: 50%;

    &--lg {
      width: 1.3rem;
      height: 1.3rem;
      margin-right: 0.4rem;
    }
  }

  &_col {
    width: 5rem;
    height: 16rem;
    background-repeat: no-repeat;
    background-position: 60% 40%;

    &-else {
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
    }
  }

  &_img {
    width: 7rem;
    height: 8rem;
    @media (max-width: 600px) {
      width: 5rem;
      height: 7rem;
    }
  }

  &_right {
    width: 4.5rem;
    height: 11rem;
  }

  &_line {
    height: 0.2rem;
    margin-bottom: 1.2rem;
  }

  &_bottom {
    display: flex;
    gap: 26px;
    height: 1.5rem;
    margin-bottom: 0.5rem;
  }
}

.t-30 {
  top: 30%;
}

.b-skeleton-text {
  border-radius: 0.5rem;
  margin: auto 0.2rem;
}
</style>
