<template>
  <header :class="bgColor">
    <b-navbar type="light" fixed="top" class="my-header" :class="bgColor">
      <b-navbar-nav class="fs-6 fw-normal align-middle pl-5">
        <b-navbar-brand
          to="/"
          class="fs-3 fw-bolder d-flex flex align-items-center gap-2"
          :class="(bgColor, brandColor)"
        >
          <svg class="icon icon--yelow">
            <use
              href="/src/assets/icons/icons_list.svg#alien"
              width="53"
              height="52"
              viewBox="0 0 53 52"
              :fill="iconColor"
            ></use>
          </svg>
          CHOICIE
        </b-navbar-brand>
        <router-link
          to="/"
          active-class="active-link-home"
          class="route-link"
          :class="textColor"
        >
          Home
        </router-link>
        <router-link
          to="/about"
          active-class="active-link"
          class="route-link"
          :class="textColor"
        >
          About
        </router-link>
        <router-link
          to="/client"
          active-class="active-link"
          class="route-link"
          :class="textColor"
        >
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
      <b-navbar-nav class="pr-5">
        <b-nav-form class="gap-3">
          <b-button
            pill
            size="md"
            variant="primary"
            style="background-color: rgba(96, 83, 177, 1)"
            class="w-btn"
          >
            <svg class="icon icon--android" viewBox="0 0 16 16">
              <use href="/src/assets/icons/icons_list.svg#android"></use>
            </svg>
            <!-- <Android class="mb-1" /> -->
            <span class="mx-2">Android</span>
          </b-button>
          <b-button pill size="md" variant="secondary" class="w-btn">
            <svg class="icon icon--ios">
              <use href="/src/assets/icons/icons_list.svg#ios"></use>
            </svg>
            <!-- <IOS class="mb-1" /> -->
            <span class="mx-2">iOS</span>
          </b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
  </header>
</template>

<script setup lang="ts">
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

<style scoped lang="scss">
a {
  font-size: 16px;
  padding: 16px;
  margin-top: 3px;
  line-height: 20px;
  text-decoration: none;
}

.icon {
  display: inline-block;

  &--yelow {
    width: 53px;
    height: 52px;
  }

  &--android {
    width: 16px;
    height: 16px;
    margin-bottom: 4px;
    fill: #fff;
  }

  &--ios {
    width: 16px;
    height: 16px;
    margin-bottom: 4px;
    fill: #3b2186;
  }
}

.my-header {
  box-shadow: 0 0 16px 8px rgba(59, 33, 134, 0.54);
  padding: 0 148px;
}
</style>
