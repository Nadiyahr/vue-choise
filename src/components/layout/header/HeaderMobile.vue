<template>
  <div>
    <b-navbar toggleable :class="isOpen ? 'bg-primary' : bgColor" >
      <b-button @click="togle" id="menu-toggle" v-b-toggle="'sidebar-toggle'" :class="isOpen ? 'bg-primary' : bgColor">
        <!-- <span class="navbar-toggler-icon mb-1" aria-hidden="true"></span> -->
        <Menu :svg-color="isOpen ? '#fff' : '#2b146c'" />
      </b-button>
      <b-navbar-brand href="#" :class="isOpen ? 'text-white' : 'text-dark'" class="fs-2 text fw-bold d-flex flex justify-content-between align-items-center gap-3">
        <Alien :svgColor="primaryColor" />
        CHOICIE
      </b-navbar-brand>
      <!-- Right aligned nav items -->
      <b-navbar-nav>
        <b-nav-form class="gap-3">
          <b-button pill size="md" style="background-color: rgba(96, 83, 177, 1)">
            <Android class="mb-1"/>
          </b-button>
          <b-button pill size="md" variant="secondary">
            <IOS class="mb-1"/>
          </b-button>
        </b-nav-form>
      </b-navbar-nav>
      <b-collapse id="collapse" v-model="isOpen"  is-nav>
        <b-navbar-nav class="fs-4 text-white " >
          <b-nav-item align="center" to="/" class="border-bottom border-light"> Home</b-nav-item>
          <b-nav-item align="center" to="/about" class="border-bottom border-light">About</b-nav-item>
          <b-nav-item align="center" to="/client" class="border-bottom border-light">Client</b-nav-item>
          <b-nav-item align="center" href="#howTo" class="border-bottom border-light">How to use</b-nav-item>
          <b-nav-item align="center" href="#contact" class="">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useRoute } from 'vue-router'
import Alien from '../../icons/AlienIcon.vue'
import Android from '../../icons/AndroidIcon.vue'
import IOS from '../../icons/iOSIcon.vue'
import Menu from '../../icons/Menu.vue'

export default defineComponent({
  components: {
    Alien,
    Android,
    IOS,
    Menu
  },
  // props() {
  //   name
  //   bgColor = route.meta.headerClass
    // let isOpen = false
    // let primaryColor = '#3b2186'

    // function togle(): void {
    //   isOpen = !isOpen
    //   primaryColor = isOpen ? '#3b2186' : b
    // }
  // },
  data() {
    const route = useRoute()
    const bgColor = route.meta.headerClass as string
    return {
      isOpen: false,
      primaryColor: '#3b2186',
      bgColor
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

.mobile-active {
  color: #f2cf7e;
}
</style>
