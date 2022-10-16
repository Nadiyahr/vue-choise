<script setup lang="ts">
import Alien from '../icons/AlienIcon.vue'
import Android from '../icons/AndroidIcon.vue'
import IOS from '../icons/iOSIcon.vue'

const secondaryColor = '#f2cf7e'
</script>

<template>
  <header class="bg-dark">
    <b-navbar type="dark" variant="dark" class="fs-4">
      <b-navbar-nav class="fs-6 fw-bold ">
        <b-navbar-brand to="/" class="fs-3 text-light fw-bolder d-flex flex justify-content-between align-items-center gap-3">
          <Alien :svgColor="secondaryColor" />
          CHOICIE
        </b-navbar-brand>
        <b-nav-item router-component-name="/" to="/">Home</b-nav-item>
        <b-nav-item router-component-name="/vue-choise/about" to="/about">About</b-nav-item>
        <b-nav-item href="#">Client</b-nav-item>
        <b-nav-item href="#">How to use</b-nav-item>
        <b-nav-item href="#">Contact</b-nav-item>
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
