<template>
  <div class="fs-6">
    <HeaderDesctop v-if="isDesktop()" />
    <HeaderMobile v-else />
    <slot></slot>
    <Subscribe />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import Subscribe from "./subscribe/Subscribe.vue";
import Footer from "./footer/Footer.vue";

export interface Props {
  isHome?: boolean;
}

const HeaderDesctop = defineAsyncComponent(() => import("./header/HeaderDesctop.vue"));

const HeaderMobile = defineAsyncComponent(() => import("./header/HeaderMobile.vue"));

const windowWidth = window.innerWidth;
const mobile = 600;

function isDesktop(): boolean {
  return windowWidth > mobile;
}
</script>
