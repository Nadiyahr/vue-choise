<template>
  <TopDesctop v-if="desktop" />
  <TopMobile v-if="tablet || mobile" />
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";
import { useBreakpoints } from "@/plugins/breakpoints";

const { isMobile, isDesktop, isTablet } = useBreakpoints();

const mobile = ref(isMobile);
const desktop = ref(isDesktop);
const tablet = ref(isTablet);

const TopDesctop = defineAsyncComponent(() => import("./TopDesctop.vue"));

const TopMobile = defineAsyncComponent(() => import("./TopMobile.vue"));
</script>
