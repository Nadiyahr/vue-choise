<script setup lang="ts">
import Alien from '../icons/Alien.vue'
import Android from '../icons/Android.vue'
import IOS from '../icons/iOS.vue'
</script>

<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="primary" class="px-0 lg-px-5 text-light ">
    <!-- <b-navbar-toggle target="nav-collapse" type="light"> -->
    <a href="javascript:void(0)" id="menu-toggle" v-b-toggle="'sidebar-fifi-toggle'" class="text-light">
      <span class="navbar-toggler-icon mb-1 mr-sm-1" aria-hidden="true"></span>
    </a>
      <!-- <template>
      <Menu />
    </template> -->
    <!-- </b-navbar-toggle> -->
    <b-navbar-brand href="#" class="fs-5 text-light fw-bolder d-flex flex justify-content-between align-items-center gap-3">
      <Alien />
      CHOICIE
    </b-navbar-brand>
    <b-collapse id="sidebar-fifi-toggle" type="light" is-nav>
      <b-navbar-nav class="fs-6">
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#">About</b-nav-item>
        <b-nav-item href="#">Client</b-nav-item>
        <b-nav-item href="#">How to use</b-nav-item>
        <b-nav-item href="#">Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    <!-- Right aligned nav items -->
      <b-navbar-nav>
        <b-nav-form class="gap-3">
          <b-button pill size="sm" variant="primary" style="background-color: rgba(96, 83, 177, 1)">
            <Android />
            <span class="d-none d-md-inline">Android</span>
          </b-button>
          <b-button pill size="sm" variant="secondary">
            <IOS />
            <span class="d-none d-md-inline">iOS</span>
          </b-button>
        </b-nav-form>
      </b-navbar-nav>
  </b-navbar>
</div>
</template>
