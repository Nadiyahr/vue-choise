<script setup lang="ts">
import RestaurantReview from '../icons/RestaurantReviewIcon.vue'
import QrCode from '../icons/QrCode.vue'
import MapRestaurantIcon from '../icons/MapRestaurantIcon.vue'
import BonusIcon from '../icons/BonusIcon.vue'
</script>
<template>
  <section class="bg-primary px-5">
   <b-container fluid class="text-light p-5 ">
    <b-row>
      <b-col>
      <div>
        <h1 class="mb-3 p-2 fw-bolder">All&nbsp;the&nbsp;restaurants in&nbsp;the&nbsp;world&nbsp;-<br/>with&nbsp;one&nbsp;tap</h1>
        <p class="mb-3 p-2">And a good friend with the same name. He understands that feeling of being an alien in another country, so here is Choicie, an app. It can make your journey, date or meeting with friends much better. </p>
        <div class="p-2">
          <b-button
            pill
            size="md"
            variant="secondary"
            class="w-btn"
          >
            Get Started
          </b-button>
        </div>
      </div>
      </b-col>
      <b-col  class="bg-primary">
        <b-img fluid src="/images/startImg.png" alt="Start Image"></b-img>
      </b-col>
      <!-- <b-row> -->
      <!-- </b-row> -->
    </b-row>
    <b-row>
        <h3>We are the first of our kind! Here you can find:</h3>
      <b-col class="d-flex gap-4 align-items-center">
        <div class="col-sm-2">
          <RestaurantReview class="mb-3" />
        </div>
        <div>
          <h5>Restaurant Review</h5>
          <p>Get best tips from our users and Choicie</p>
        </div>
      </b-col>
      <b-col class="d-flex gap-4 align-items-center">
        <div class="col-sm-2">
          <MapRestaurantIcon class="mb-3" />
        </div>
        <div>
          <h5>Map with Restaurant Tags</h5>
          <p>Make simple selection by your criteria</p>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="d-flex gap-4 align-items-center">
        <div class="col-sm-2">
          <QrCode class="mb-3" />
        </div>
        <div>
          <h5>QR Code Menu</h5>
          <p>Use fast and convenient way to create orders</p>
        </div>
      </b-col>
      <b-col class="d-flex gap-4 align-items-center">
        <div class="col-sm-2">
          <BonusIcon class="mb-3" />
        </div>
        <div>
          <h5>Bonus Points for Clients</h5>
          <p>Spend it and get free drinks and dishes</p>
        </div>
      </b-col>
    </b-row>
   </b-container>
    
  </section>
</template>
