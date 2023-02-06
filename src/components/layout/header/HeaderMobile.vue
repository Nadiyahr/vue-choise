<template>
  <div>
    <b-navbar toggleable :variant="isOpen ? 'primary' : bgColor">
      <b-button
        @click="togle"
        id="menu-toggle"
        v-b-toggle="'sidebar-toggle'"
        :class="isOpen ? 'bg-primary' : `bg-${bgColor}`"
      >
        <Menu :svg-color="isOpen ? '#fff' : '#2b146c'" />
      </b-button>
      <!-- <b-nav-item>
        <LanguageSwitch :is-main="isMain" :is-mobile="mobile" />
      </b-nav-item> -->
      <b-navbar-brand
        href="#"
        :class="isOpen ? 'text-white' : 'text-dark'"
        class="fs-2 text fw-bold d-flex flex justify-content-between align-items-center gap-3"
      >
        <Alien :svg-color="primaryColor" />
        CHOICIE
      </b-navbar-brand>
      <!-- Right aligned nav items -->
      <b-navbar-nav>
        <b-nav-form class="gap-3">
          <b-button
            pill
            size="md"
            class="w-btn"
            :class="isOpen ? 'bg-white' : 'bg-blue-btn'"
          >
            <Android class="mb-1" :svg-color="isOpen ? '#2b146c' : '#fff'" />
            <span v-if="tablet" class="mx-2" :class="isOpen ? 'text-dark' : 'text-white'"
              >Android</span
            >
          </b-button>
          <b-button
            pill
            size="md"
            variant="secondary"
            class="w-btn"
            :class="isOpen ? 'bg-white' : 'bg-secondary'"
          >
            <IOS class="mb-1" />
            <span v-if="tablet" class="mx-2" :class="isOpen ? 'text-dark' : 'text-white'"
              >iOS</span
            >
          </b-button>
        </b-nav-form>
      </b-navbar-nav>
      <b-collapse id="collapse" v-model="isOpen" is-nav>
        <b-navbar-nav class="fs-4 text-white">
          <b-nav-item align="center" to="/" class="border-bottom border-light">
            {{ $t("General.Home") }}</b-nav-item
          >
          <b-nav-item align="center" to="/about" class="border-bottom border-light">{{
            $t("General.About")
          }}</b-nav-item>
          <b-nav-item align="center" to="/client" class="border-bottom border-light">{{
            $t("General.Client")
          }}</b-nav-item>
          <b-nav-item align="center" href="#howTo" class="border-bottom border-light">{{
            $t("General.How to use")
          }}</b-nav-item>
          <b-nav-item align="center" href="#contact" class="border-bottom border-light">{{
            "General.Contact"
          }}</b-nav-item>
          <b-nav-item align="center" href="" class="">
            <LanguageSwitch is-mobile />
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import Alien from "@/components/icons/AlienIcon.vue";
import Android from "@/components/icons/AndroidIcon.vue";
import IOS from "@/components/icons/iOSIcon.vue";
import Menu from "@/components/icons/Menu.vue";
import { useBreakpoints } from "@/plugins/breakpoints";
import LanguageSwitch from "./LanguageSwitch.vue";

export default defineComponent({
  components: {
    Alien,
    Android,
    IOS,
    Menu,
    LanguageSwitch,
  },
  data() {
    const route = useRoute();
    const bgColor = route.meta.headerMobile as string;
    const name = route.name as string;
    const isMain = name === "home";
    return {
      isOpen: false,
      primaryColor: "#3b2186",
      bgColor,
      name,
      isMain,
    };
  },
  setup() {
    const { isMobile, isTablet } = useBreakpoints();
    const mobile = ref(isMobile);
    const tablet = ref(isTablet);

    return {
      mobile,
      tablet,
    };
  },
  methods: {
    togle(): void {
      this.isOpen = !this.isOpen;
      this.primaryColor = this.primaryColor === "#3b2186" ? "#f2cf7e" : "#3b2186";
    },
  },
});
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
