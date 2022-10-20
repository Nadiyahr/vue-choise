<template>
  <footer
    class="bg-dark bg-position text-light py-5"
    style="background-image: url('images/cover.png')">
      <b-row class="px-2 lg-px-0">
        <b-col sm="12" md="3" class="pb-3">
        <div class="fs-4 lg-fs-3 text-light fw-bolder d-flex flex gap-4 align-items-center">
          <Alien :svgColor="'#f2cf7e'" />
          CHOICIE
        </div>
        <p class="fs-7">You know what you choose!</p>
        </b-col>
        <b-col class="pb-4 lg-pb-0 fs-5 text ps-2">
          <b-nav-item href="#"><p>Home</p></b-nav-item>
          <b-nav-item href="#"><p>Universal Menu</p></b-nav-item>
            <b-nav-item href="#howTo"><p>How do use</p></b-nav-item>
            <b-nav-item href="#map"><p>Growth Factor</p></b-nav-item>
            <b-nav-item href="#contact"><p>Contact</p></b-nav-item>
            <b-nav-item href="#"><p>Privacy Policy</p></b-nav-item>
        </b-col>
        <b-col class="ps-5 fs-5">
          <b-nav-item target="_blank" href="https://www.facebook.com/"><p>Facebook</p></b-nav-item>
          <b-nav-item target="_blank" href="https://twitter.com/i/flow/login"><p>Twitter</p></b-nav-item>
          <b-nav-item target="_blank" href="https://www.instagram.com/"><p>Instagram</p></b-nav-item>
          <b-nav-item target="_blank" href="https://www.linkedin.com/in/nadiya-hrabchenko-78ba89205/?locale=en_US"><p>LinkedIn</p></b-nav-item>
        </b-col>
        <b-col id="contact" lg="4" class="lg-px-5">
          <b-form @submit="" @reset="" class="text-ligth">
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
  </footer>
</template>

<script setup lang="ts">
import Alien from '../../icons/AlienIcon.vue'
</script>

<style scoped>
.bg-position {
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: 400px;
}
</style>
