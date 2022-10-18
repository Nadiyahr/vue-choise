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
      isOpen: false,
      primaryColor: '#3b2186'
    }
  },
  methods: {
    togle(): void {
      this.isOpen = !this.isOpen;
      this.primaryColor = this.primaryColor === '#3b2186'
        ? '#f2cf7e'
        : '#3b2186'
    }
  }
})

</script>

<template>
  <div>
    <b-navbar toggleable :variant="isOpen ? 'primary' : 'light'" >
      <b-button @click="togle" id="menu-toggle" v-b-toggle="'sidebar-toggle'" :class="isOpen ? 'bg-primary' : 'bg-light'">
        <span class="navbar-toggler-icon mb-1" aria-hidden="true"></span>
      </b-button>
      <b-navbar-brand href="#" :class="isOpen ? 'text-white' : 'text-dark'" class="fs-5 fw-bolder d-flex flex justify-content-between align-items-center gap-3">
        <Alien :svgColor="primaryColor" />
        CHOICIE
      </b-navbar-brand>
      <!-- Right aligned nav items -->
      <b-navbar-nav>
        <b-nav-form class="gap-3">
          <b-button pill size="sm" style="background-color: rgba(96, 83, 177, 1)">
            <Android />
          </b-button>
          <b-button pill size="sm" variant="secondary">
            <IOS />
          </b-button>
        </b-nav-form>
      </b-navbar-nav>
      <b-collapse id="collapse" v-model="isOpen"  is-nav>
        <b-navbar-nav class="fs-4 text-white " >
          <b-nav-item align="center" to="/" class="border-bottom border-light"><span> Home</span></b-nav-item>
          <b-nav-item align="center" to="/about" class="border-bottom border-light"><span>About</span></b-nav-item>
          <b-nav-item align="center" href="#map" class="border-bottom border-light"><span>Client</span></b-nav-item>
          <b-nav-item align="center" href="#howTo" class="border-bottom border-light"><span>How to use</span></b-nav-item>
          <b-nav-item align="center" href="#contact" class=""><span>Contact</span></b-nav-item>
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
    background-color: #f9f5e6;
}

/* .navbar-nav .nav-link.active {
    margin: 0 auto;
    color:#fff;
} */
</style>
