<script setup lang="ts">
import Alien from '../icons/Alien.vue'
import Android from '../icons/Android.vue'
import IOS from '../icons/iOS.vue'
</script>

<template>
  <b-navbar toggleable="lg" type="dark" variant="primary" class="px-0 lg-px-5 text-light ">
    <b-navbar-brand href="#" class="fs-5 text-light fw-bolder d-flex flex justify-content-between align-items-center gap-3">
      <Alien />
      CHOICIE
    </b-navbar-brand>
      <b-navbar-nav class="fs-6">
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#">About</b-nav-item>
        <b-nav-item href="#">Client</b-nav-item>
        <b-nav-item href="#">How to use</b-nav-item>
        <b-nav-item href="#">Contact</b-nav-item>
      </b-navbar-nav>
    <!-- Right aligned nav items -->
      <b-navbar-nav>
        <b-nav-form class="gap-3">
          <b-button pill size="sm" variant="primary" style="background-color: rgba(96, 83, 177, 1)">
            <Android />
            <span>Android</span>
          </b-button>
          <b-button pill size="sm" variant="secondary">
            <IOS />
            <span>iOS</span>
          </b-button>
        </b-nav-form>
      </b-navbar-nav>
  </b-navbar>
</template>
