<template>
  <section class="bg-dark">
    <b-container fluid class="brand">
      <b-row>
        <b-col sm="12" lg="3" class="text-center brand__text">
          <p class="fs-7 text-white p-0 m-0 mt-2 w-fit">
            {{ $t('Client.RESTAURANTS TRUST CHOICIE') }}
          </p>
        </b-col>
        <b-col class="brand__stamp">
          <div class="brand__container">
            <Brand1 class="order-1 brand__item me-2 lg-me-0" />
            <Brand2 class="order-2 brand__item me-2 lg-me-0" />
            <Brand3 class="order-4 order-md-3 brand__item" />
            <Brand4 class="order-3 order-md-3 brand__item" />
            <Brand5 class="order-5 brand__item brand__item-last" />
          </div>
        </b-col>
      </b-row>
      <b-row> </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import Brand1 from '../icons/Brand1.vue';
import Brand2 from '../icons/Brand2.vue';
import Brand3 from '../icons/Brand3.vue';
import Brand4 from '../icons/Brand4.vue';
import Brand5 from '../icons/Brand5.vue';
</script>

<style scoped lang="scss">
.brand {
  padding: 3rem 0;

  &__text {
    padding: 0;

    @media (max-width: 900px) {
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
    gap: 1rem;
    align-items: center;

    @media (max-width: 600px) {
      gap: 0;
      justify-content: center;
    }

    @media (max-width: 900px) and (min-width: 601px) {
      gap: 3rem;
      justify-content: space-evenly;
      align-items: center;
    }
  }

  &__item {
    padding: 0;

    @media (max-width: 600px) {
      padding: 0 16px;
      margin-bottom: 20px;
    }

    &-last {
      @media (max-width: 900px) and (min-width: 601px) {
        margin: auto;
      }
    }
  }
}
</style>
