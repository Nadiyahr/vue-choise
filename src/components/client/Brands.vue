<template>
  <section class="bg-dark ">
    <b-container fluid class="brand">
      <b-row>
        <b-col sm="12" lg="3" class="text-center brand__text">
          <p class="fs-7 text-white p-0  m-0 mt-2 w-fit">500+ RESTAURANTS TRUST CHOICIE</p>
        </b-col>
        <b-col class="brand__stamp">
          <div class="brand__container ">
            <div class="brand__container-side">
              <Brand1 class="brand__item"/>
              <Brand2 class="brand__item"/>
              <Brand3 class="brand__item"/>
            </div>
            <div class="brand__container-side brand__container-side-right">
              <Brand4 class="brand__item"/>
              <Brand5 class="brand__item"/>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import Brand1 from "../icons/Brand1.vue";
import Brand2 from "../icons/Brand2.vue";
import Brand3 from "../icons/Brand3.vue";
import Brand4 from "../icons/Brand4.vue";
import Brand5 from "../icons/Brand5.vue";
export interface Props {
  isMobile?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isMobile: false
})
</script>

<style scoped lang="scss">
.brand {
  padding: 3rem 0;
  &__text {
    padding: 0;

    @media (max-width: 600px) {
      padding-bottom: 3rem;
    }
  }

  &__stamp {
    padding-right: 0;
    padding-left: 0;
  }

  &__container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    &-side {
      display: flex;
      justify-content: space-between;
      gap: 2rem;

      @media (max-width: 600px) {
        gap: 0;
        padding-bottom: 1rem;
      }

      &-right {
        @media (max-width: 600px) {
          margin: 0 auto;
        }
      }
    }
  }

  &__item {
    padding: 0;

    @media (max-width: 600px) {
      padding: 0 16px;
    }
  }
}
</style>
