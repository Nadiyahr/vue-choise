<script setup lang="ts">
import Alien from '../icons/AlienIcon.vue'
import Android from '../icons/AndroidIcon.vue'
import IOS from '../icons/iOSIcon.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const path = route.path

function isAbout() {
  return path === '/about'
}

const secondaryColor = '#f2cf7e'
const darkColor = '#2b146c'
</script>

<template>
  <header :class="isAbout() ? 'bg-light1 text-dark' : 'bg-dark text-white'">
    <b-navbar type="light" class="fs-4" :class="isAbout() ? 'bg-light1 text-dark' : 'bg-dark text-white'" >
      <b-navbar-nav class="fs-6 fw-bold" >
        <b-navbar-brand to="/" class="fs-3 text-light fw-bolder d-flex flex justify-content-between align-items-center gap-3" :class="isAbout() ? 'text-dark' : 'text-white'">
          <Alien :svgColor="isAbout() ? darkColor : secondaryColor" />
          CHOICIE
        </b-navbar-brand>
        <b-nav-item to="/" class="py-2 pe-2" :class="isAbout() ? 'text-dark' : 'text-white'">Home</b-nav-item>
        <b-nav-item to="/about" class="py-2 pe-2" :class="isAbout() ? 'text-dark' : 'text-white'">About</b-nav-item>
        <b-nav-item href="#map" class="py-2 pe-2" :class="isAbout() ? 'text-dark' : 'text-white'">Client</b-nav-item>
        <b-nav-item href="#howTo" class="py-2 pe-2" :class="isAbout() ? 'text-dark' : 'text-white'">How to use</b-nav-item>
        <b-nav-item href="#contact" class="py-2" :class="isAbout() ? 'text-dark' : 'text-white'">Contact</b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
        <b-navbar-nav class="">
          <b-nav-form class="gap-3">
            <b-button
              pill
              size="md"
              variant="primary"
              style="background-color: rgba(96, 83, 177, 1)"
              class="w-btn"
            >
              <Android class="mb-1"/>
              <span class="mx-2">Android</span>
            </b-button>
            <b-button
              pill
              size="md"
              variant="secondary"
              class="w-btn"
            >
              <IOS class="mb-1"/>
              <span class="mx-2">iOS</span>
            </b-button>
          </b-nav-form>
        </b-navbar-nav>
    </b-navbar>
  </header>
</template>

<style scoped>
a {
  color: white;
  padding: 16px;
  text-decoration: none;
}
</style>
