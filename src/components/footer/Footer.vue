<script setup lang="ts">
import Alien from '../icons/AlienIcon.vue'
export interface Props {
  isHome?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isHome: false
})

</script>

<template>
  <footer
    class="bg-dark bg-position text-light py-5"
    style="background-image: url('images/cover.png');">
    <!-- <b-container > -->
      <b-row class="px-2 lg-px-0">
        <b-col sm="12" md="3" class="pb-3">
        <div class="fs-4 lg-fs-3 text-light fw-bolder d-flex flex gap-4 align-items-center">
          <Alien :svgColor="'#f2cf7e'" />
          CHOICIE
        </div>
        <p class="fs-7">You know what you choose!</p>
        </b-col>
        <b-col class="pb-4 fs-5 text ps-2">
          <div v-if="!isHome">
            <p>Home</p>
            <p>Universal Menu</p>
            <p>How do use</p>
            <p>Growth Factor</p>
            <p>Growth Factor</p>
          </div>
          <p>Privacy Policy</p>
        </b-col>
        <b-col class="ps-5 fs-5">
          <b-nav-item class=""><p>Facebook</p></b-nav-item>
          <b-nav-item class=""><p>Twitter</p></b-nav-item>
          <b-nav-item class=""><p>Instagram</p></b-nav-item>
          <b-nav-item class=""><p>LinkedIn</p></b-nav-item>
        </b-col>
        <b-col lg="4" class="lg-px-5">
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
