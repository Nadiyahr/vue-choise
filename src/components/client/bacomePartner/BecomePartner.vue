<template>
  <section class="relative">
    <div class="relative__container">
      <h2 class="fw-bold pb-2 lh-sm">
        Choicie for cafes and restaurants.<br />Five growth drivers for your development
      </h2>
      <p class="fs-6 text-prymary-light">
        Choicie helps you analyze user actions and improve your cafe or restaurant.
      </p>
      <div class="d-flex flex-wrap py-3">
        <div class="d-flex align-items-center gap-3 py-2 pe-4 m-2">
          <Quality />
          <p class="fs-7 text fw-bold">Quality of Service</p>
        </div>
        <div class="d-flex align-items-center gap-3 py-2 pe-4 m-2">
          <Reputation />
          <p class="fs-7 text fw-bold">Reputation and promotion on the web</p>
        </div>
        <div class="d-flex align-items-center gap-3 py-2 pe-4 m-2">
          <Scan />
          <p class="fs-7 text fw-bold">Visibility</p>
        </div>
        <div class="d-flex align-items-center gap-3 lg-2 pe-4 m-2">
          <UserProfile />
          <p class="fs-7 text fw-bold">Number of orders</p>
        </div>
        <div class="d-flex align-items-center gap-3 py-2 pe-4 m-2">
          <Happy />
          <p class="fs-7 text fw-bold">Convenience of work with clients</p>
        </div>
      </div>
      <h4 class="relative__title">What Does it Take?</h4>
      <b-button pill size="md" variant="primary" class="relative_btn">
        Become a Choicie partner!
      </b-button>
    </div>
    <div class="absolute">
      <WaveLine class="w-100" />
    </div>
  </section>
</template>

<script setup lang="ts">
import Quality from "../../icons/Quality.vue";
import Reputation from "../../icons/Reputation.vue";
import Scan from "../../icons/Scan.vue";
import UserProfile from "../../icons/UserProfile.vue";
import Happy from "../../icons/Happy.vue";
import WaveLine from "../../icons/WaveLine.vue";
</script>

<style scoped lang="scss">
.relative {
  position: relative;
  padding-top: 2rem;
  padding-bottom: 20rem;
  background-color: transparent;

  @media (max-width: 600px) {
    padding: 2rem 1.25rem 20rem;
  }

  &__container {
    width: 75%;

    @media (max-width: 600px) {
      width: 100%;
    }
  }

  &__title {
    margin-top: 3rem;

    @media (max-width: 600px) {
      margin-bottom: 2rem;
    }
  }

  &_btn {
    width: 19rem;
    height: 3.2rem;
    margin-top: 2rem;

    @media (max-width: 600px) {
      width: 90%;
    }
  }
}

.absolute {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: -20em;
  left: 0em;
  z-index: -1;

  @media (max-width: 600px) {
    bottom: -45em;
  }
}
</style>
