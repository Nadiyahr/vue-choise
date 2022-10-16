<script lang="ts">
import { defineComponent } from "vue";
import Alien from '../icons/AlienIcon.vue'
import Android from '../icons/AndroidIcon.vue'
import IOS from '../icons/iOSIcon.vue'

export default defineComponent({
  name: 'HeaderMobile',
  components: {
    Alien,
    Android,
    IOS
  },
  data() {
    return {
      isOpen: false as boolean,
      primaryColor: '#3b2186'
    }
  },
  methods: {
    togle(): void {
      this.isOpen = !this.isOpen
    }
  }
})

// const primaryColor = '#3b2186'
// let isOpen = true
// function togle() {
//   isOpen = !isOpen
//   console.log(isOpen);
  
// }
</script>

<template>
  <div>
  <b-navbar toggleable="lg" type="light" variant="ligth" :class="isOpen ? 'when-opened' : 'when-closed' ">
    <b-button @click="togle" id="menu-toggle" v-b-toggle="'sidebar-toggle'" class="bg-white">
      <span class="navbar-toggler-icon mb-1 text-light" aria-hidden="true"></span>
    </b-button>
    <b-navbar-brand href="#" class="fs-5 text-dark fw-bolder d-flex flex justify-content-between align-items-center gap-3">
      <Alien :svgColor="primaryColor" />
      CHOICIE
    </b-navbar-brand>
    <!-- Right aligned nav items -->
    <b-navbar-nav>
      <b-nav-form class="gap-3">
        <b-button pill size="sm" variant="primary" style="background-color: rgba(96, 83, 177, 1)">
          <Android />
        </b-button>
        <b-button pill size="sm" variant="secondary">
          <IOS />
        </b-button>
      </b-nav-form>
    </b-navbar-nav>
    <b-collapse id="collapse" v-model="isOpen" type="dark" is-nav>
      <b-navbar-nav class="fs-4 text-dark">
        <b-nav-item to="#" class="mx-auto">Home</b-nav-item>
        <b-nav-item to="#" class="mx-auto">About</b-nav-item>
        <b-nav-item to="#" class="mx-auto">Client</b-nav-item>
        <b-nav-item to="#" class="mx-auto">How to use</b-nav-item>
        <b-nav-item to="#" class="mx-auto">Contact</b-nav-item>
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
