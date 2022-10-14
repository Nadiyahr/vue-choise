<script lang="ts">
import Alien from '../icons/AlienIcon.vue'
import Android from '../icons/AndroidIcon.vue'
import IOS from '../icons/iOSIcon.vue'

export default {
  name: 'HeaderMobile',
  components: {
    Alien,
    Android,
    IOS
  },
  data() {
    return {
      isOpen: true as boolean,
      primaryColor: '#3b2186'
    }
  },
  methods: {
    togle(): void {
      this.isOpen = !this.isOpen
    }
  }
}

// const primaryColor = '#3b2186'
// let isOpen = true
// function togle() {
//   isOpen = !isOpen
//   console.log(isOpen);
  
// }
</script>

<template>
  <div>
  <b-navbar toggleable="lg" type="light" variant="" :class="isOpen ? 'when-opened' : 'when-closed'">
    <!-- <b-navbar-toggle target="nav-collapse" type="light"> -->
    <b-button @click="togle" id="menu-toggle" v-b-toggle="'sidebar-toggle'">
      <span class="navbar-toggler-icon mb-1 text-light" aria-hidden="true"></span>
    </b-button>
    <!-- </b-navbar-toggle> -->
    <b-navbar-brand href="#" class="fs-5 text-dark fw-bolder d-flex flex justify-content-between align-items-center gap-3">
      <Alien :svgColor="primaryColor" />
      CHOICIE
    </b-navbar-brand>
    <!-- Right aligned nav items -->
    <b-navbar-nav>
      <b-nav-form class="gap-3">
        <b-button pill size="sm" variant="primary" style="background-color: rgba(96, 83, 177, 1)">
          <Android />
          <!-- <span class="d-none d-md-inline">Android</span> -->
        </b-button>
        <b-button pill size="sm" variant="secondary">
          <IOS />
          <!-- <span class="d-none d-md-inline">iOS</span> -->
        </b-button>
      </b-nav-form>
    </b-navbar-nav>
    <b-collapse id="collapse" v-model="isOpen" type="light" is-nav>
      <b-navbar-nav class="fs-6">
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#">About</b-nav-item>
        <b-nav-item href="#">Client</b-nav-item>
        <b-nav-item href="#">How to use</b-nav-item>
        <b-nav-item href="#">Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<style scoped>
.colapse.show ~ .navbar {
  background-color: #fff;
}

.collapsed > .when-opened {
  background-color: #3b2186;
}
:not(.collapsed) > .when-closed {
    background-color: #fff;
}
</style>
