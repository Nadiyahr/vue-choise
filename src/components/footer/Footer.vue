<script setup lang="ts">
import Alien from '../icons/AlienIcon.vue'
</script>

<template>
  <footer
    class="bg-dark bg-position text-light py-5"
    style="background-image: url('images/cover.png');">
    <!-- <b-container > -->
      <b-row>
        <b-col >
        <div class="fs-3 text-light fw-bolder d-flex flex gap-4 align-items-center">
          <Alien :svgColor="'#f2cf7e'" />
          CHOICIE
        </div>
        <p class="fs-7">You know what you choose!</p>
        </b-col>
        <b-col>
          <h5>Privacy Policy</h5>
        </b-col>
        <b-col>
          <b-nav-item class="pb-2"><h5>Facebook</h5></b-nav-item>
          <b-nav-item class="pb-2"><h5>Twitter</h5></b-nav-item>
          <b-nav-item class="pb-2"><h5>Instagram</h5></b-nav-item>
          <b-nav-item class="pb-2"><h5>LinkedIn</h5></b-nav-item>
        </b-col>
        <b-col cols="4" class="px-5">
          <b-form @submit="" @reset="" class="py-4 text-ligth">
            <b-form-input
              placeholder="Name"
              class="rounded-pill bg-primary mb-3 text-light"
            ></b-form-input>
            <b-form-input
              placeholder="Email"
              class="rounded-pill bg-primary mb-3 text-light"
            ></b-form-input>
            <b-form-input
              placeholder="Enter Text"
              class="rounded-pill bg-primary mb-3 text-light"
            ></b-form-input>
            <b-button
              pill
              type="submit"
              variant="secondary"
              class="w-100"
            >
              Send
            </b-button>
          </b-form>
        </b-col>
      </b-row>
    <!-- </b-container> -->
  </footer>
</template>

<style scoped>
.bg-position {
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: 400px;
}
</style>
