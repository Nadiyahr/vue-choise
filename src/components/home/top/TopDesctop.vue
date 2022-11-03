<template>
  <section class="bg-dark py-5">
    <b-container fluid class="text-light py-5">
      <b-row>
        <b-col>
          <TopGetStarted />
        </b-col>
        <b-col class="bg-dark">
          <b-img fluid src="images/startImg.png" alt="Start Image"></b-img>
        </b-col>
      </b-row>
      <b-row>
        <h4 class="text-white">We are the first of our kind! Here you can find:</h4>
        <b-col class="d-flex gap-4 align-items-center">
          <div class="col-sm-2">
            <RestaurantReview class="mb-3" />
          </div>
          <div>
            <h6 class="text-white">Restaurant Review</h6>
            <p class="fs-7">Get best tips from our users and Choicie</p>
          </div>
        </b-col>
        <b-col class="d-flex gap-4 align-items-center">
          <div class="col-sm-2">
            <MapRestaurantIcon class="mb-3" />
          </div>
          <div>
            <h6 class="text-white">Map with Restaurant Tags</h6>
            <p class="fs-7">Make simple selection by your criteria</p>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="d-flex gap-4 align-items-center">
          <div class="col-sm-2">
            <QrCode class="mb-3" />
          </div>
          <div>
            <h6 class="text-white">QR Code Menu</h6>
            <p class="fs-7">Use fast and convenient way to create orders</p>
          </div>
        </b-col>
        <b-col class="d-flex gap-4 align-items-center">
          <div class="col-sm-2">
            <BonusIcon class="mb-3" />
          </div>
          <div>
            <h6 class="text-white">Bonus Points for Clients</h6>
            <p class="fs-7">Spend it and get free drinks and dishes</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import RestaurantReview from "@/components/icons/RestaurantReviewIcon.vue";
import QrCode from "@/components/icons/QrCode.vue";
import MapRestaurantIcon from "@/components/icons/MapRestaurantIcon.vue";
import BonusIcon from "@/components/icons/BonusIcon.vue";
import TopGetStarted from "./TopGetStarted.vue";
</script>
