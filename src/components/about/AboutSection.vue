<script setup lang="ts">
import type { ColorVariant } from 'bootstrap-vue-3';

export interface Props {
  isMobile?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isMobile: false
})
</script>
<template>
  <section class="md-p-2">
    <div fluid class="text-dark py-5">
      <b-row class="gap-3 pb-5">
        <b-col v-if="props.isMobile">
        <b-img center src="images/infoMobile1.png" alt="Info Image" class="mx-auto"></b-img>
       </b-col>
        <b-col>
          <div class="p-4">
            <h2 class="fw-bolder mb-3 lg-p-2">Choicie&nbsp;is&nbsp;a&nbsp;universal menu&nbsp;for&nbsp;all&nbsp;estaurants.</h2>
            <div class="fs-xs">
              <p class="mb-3 lg-p-2">Foreign language names are no longer a problem.</p>
              <p class="mb-5 lg-p-2">Try new dishes when you travel or just go outside — with Choicie, you can order anything using automatic menu translation pictures of dishes. Place your order on the way to the restaurant, then just show the QR-code to the waiter. </p>
            </div>
            <div class="lg-p-2">
              <b-button
                pill
                size="md"
                variant="primary"
                class="w-btn"
              >
                Get Started
              </b-button>
            </div>
          </div>
      </b-col>
      <b-col v-if="!props.isMobile">
        <b-img fluid src="images/infoAbout1.png" alt="Info Image"></b-img>
      </b-col>
      </b-row>
      <b-row class=" gap-3 pt-5" :class="isMobile && 'flex-column'">
        <b-col v-if="props.isMobile">
        <b-img center src="images/infoMobile2.png" alt="Info Image"></b-img>
      </b-col>
      <b-col v-if="!props.isMobile">
        <b-img fluid src="images/infoAbout2.png" alt="Info Image"></b-img>
      </b-col>
      <b-col>
        <div class="p-4">
          <h2 class="fw-bolder mb-3 lg-p-2">And a new social network</h2>
          <div class="fs-xs">
            <p class="mb-3 lg-p-2">For those who love food! Become an Influencer: add new restaurants to the city map, earn points, get followers.</p>
            <p class="mb-5 lg-p-2">Keep private important ordering information in your account: mark the dishes you liked and didn't like, and the foods you're allergic to.</p>
          </div>
          <div class="p-2">
            <b-button
              pill
              size="md"
              variant="primary"
              class="w-btn"
            >
              Get Started
            </b-button>
          </div>
        </div>
      </b-col>
      </b-row>
    </div>
  </section>
</template>
