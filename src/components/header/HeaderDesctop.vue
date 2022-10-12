<script setup lang="ts">
import Alien from '../icons/AlienIcon.vue'
import Android from '../icons/AndroidIcon.vue'
import IOS from '../icons/iOSIcon.vue'

const secondaryColor = '#f2cf7e'
</script>

<template>
  <b-navbar type="dark" variant="primary" class="px-5 ">
    <!-- <div class="d-flex px-5"> -->
    <b-navbar-nav class="fs-6 fw-bold">
      <b-navbar-brand href="#" class="fs-5 text-light fw-bolder d-flex flex justify-content-between align-items-center gap-3">
        <Alien :svgColor="secondaryColor" />
        CHOICIE
      </b-navbar-brand>
      <b-nav-item href="#">Home</b-nav-item>
      <b-nav-item href="#">About</b-nav-item>
      <b-nav-item href="#">Client</b-nav-item>
      <b-nav-item href="#">How to use</b-nav-item>
      <b-nav-item href="#">Contact</b-nav-item>
    </b-navbar-nav>
    <!-- Right aligned nav items -->
      <b-navbar-nav>
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
    <!-- </div> -->
  </b-navbar>
</template>
