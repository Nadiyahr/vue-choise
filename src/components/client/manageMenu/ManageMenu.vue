<template>
  <section class="py-5">
    <div class="">
      <p class="text-primary fs-4 text-center text-uppercase fw-semibold md-fw-bold mb-4">
        Dashboard Performance
      </p>
      <h2 class="fw-bolder fs-2 text-center mb-4">
        Manage your menu so your customers’ll like it
      </h2>
      <p class="fs-4 text-prymary-light text-center mb-5">
        We created an advanced dashboard. You can see: it’s very easy to implement our
        product.
      </p>
    </div>
    <div>
      <b-card-group deck>
        <b-card
          bg-variant="info"
          border-variant="info"
          text-variant="content-heading"
          style="min-height: 32rem"
          class="pt-3 px-3 rounded-0 mb-3"
        >
          <b-card-title class="fs-2 fw-bold">
            Creation of<br />a Restaurant menu
          </b-card-title>
          <b-card-text class="position-relative">
            Upload your cafe or restaurant menu to the app. Choicie will automatically
            translate it into the users’ native language and add food photos.
          </b-card-text>
          <ManageMenuCard bottom="0" right="0" inner />
        </b-card>
        <b-card
          bg-variant="light"
          border-variant="light"
          text-variant="content-heading"
          style="min-height: 30rem"
          class="pt-3 px-3 rounded-0 mb-3"
        >
          <b-card-title class="fs-2 fw-bold">
            The biggest feedback from your customers
          </b-card-title>
          <b-card-text class="position-relative">
            Rating on the waiter’s work and speed of service, review of the cleanliness of
            the place and the taste of the food — all the feedback is available in one
            place.
          </b-card-text>
          <ManageMenuCard bottom="0" right="0" />
        </b-card>
      </b-card-group>
    </div>
  </section>
</template>

<script setup lang="ts">
import ManageMenuCard from "./menuCard/ManageMenuCard.vue";
</script>

<style scoped lang="scss"></style>
