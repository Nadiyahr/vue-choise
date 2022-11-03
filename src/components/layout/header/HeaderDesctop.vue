<template>
  <header :class="bgColor">
    <b-navbar type="light" :class="bgColor">
      <b-navbar-nav class="fs-6 fw-bold">
        <b-navbar-brand
          to="/"
          class="fs-3 fw-bolder d-flex flex align-items-center gap-2"
          :class="(bgColor, brandColor)"
        >
          <Alien :svgColor="iconColor" />
          CHOICIE
        </b-navbar-brand>
        <router-link to="/" active-class="active-link-home" :class="textColor">
          Home
        </router-link>
        <router-link to="/about" active-class="active-link" :class="textColor">
          About
        </router-link>
        <router-link to="/client" active-class="active-link" :class="textColor">
          Client
        </router-link>
        <b-nav-item v-if="name === 'home'" href="#howTo" class="py-2 fs-5">
          <span :class="textColor">How to use</span>
        </b-nav-item>
        <b-nav-item href="#contact" class="py-2 fs-5">
          <span :class="textColor">Contact</span>
        </b-nav-item>
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
            <Android class="mb-1" />
            <span class="mx-2">Android</span>
          </b-button>
          <b-button pill size="md" variant="secondary" class="w-btn">
            <IOS class="mb-1" />
            <span class="mx-2">iOS</span>
          </b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
  </header>
</template>

<script setup lang="ts">
import Alien from "@/components/icons/AlienIcon.vue";
import Android from "@/components/icons/AndroidIcon.vue";
import IOS from "@/components/icons/iOSIcon.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const bgColor = route.meta.headerClass;
const iconColor = route.meta.iconClass as string;
const textColor = route.meta.textClass;
const brandColor = route.meta.brandClass;
const name = route.name;
</script>

<style scoped lang="css">
a {
  font-size: 16px;
  padding: 16px;
  text-decoration: none;
}
</style>
