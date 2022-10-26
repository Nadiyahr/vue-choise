<template>
  <div class="fs-6">
    <HeaderDesctop v-if="desktop" />
    <HeaderMobile v-else />
    <slot></slot>
    <Subscribe />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";
import Subscribe from "./subscribe/Subscribe.vue";
import Footer from "./footer/Footer.vue";
import { useBreakpoints } from "../../plugins/breakpoints";

export interface Props {
  isHome?: boolean;
}

const { isDesktop } = useBreakpoints();

const desktop = ref(isDesktop);

const HeaderDesctop = defineAsyncComponent(() => import("./header/HeaderDesctop.vue"));

const HeaderMobile = defineAsyncComponent(() => import("./header/HeaderMobile.vue"));
</script>
