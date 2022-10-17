<script setup lang="ts">
import Review from '../icons/Review.vue'
import QrCodeMobile from '../icons/QrCodeMobile.vue'
import MapTagMobile from '../icons/MapTagMobile.vue'
import BonusMobile from '../icons/BonusMobile.vue'

</script>

<template>
  <article class="p-2">
    <h4 class="mb-4">We are the first of our kind! Here you can find:</h4>
    <div class="d-flex flex-row mb-3 gap-4">
      <div>
      <Review />
    </div>
    <div>
      <h6>Restaurant Review</h6>
      <p class="fs-7">Get best tips from our users and Choicie</p>
    </div>
    </div>
    <div class="d-flex flex-row mb-3 gap-4">
      <div>
      <MapTagMobile />
    </div>
    <div>
      <h6>Map with Restaurant Tags</h6>
      <p class="fs-7">Make simple selection by your criteria</p>
    </div>
    </div>
    <div class="d-flex flex-row mb-3 gap-4">
    <div>
      <QrCodeMobile />
    </div>
    <div>
      <h6>QR Code Menu</h6>
      <p class="fs-7">Use fast and convenient way to create orders</p>
    </div>
  </div>
    <div class="d-flex flex-row mb-3 gap-4">
      <div>
      <BonusMobile />
    </div>
    <div>
      <h6>Bonus Points for Clients</h6>
      <p class="fs-7">Spend it and get free drinks and dishes</p>
    </div>
    </div>
  </article>
</template>
