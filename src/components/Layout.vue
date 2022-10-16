<script setup lang="ts">
import Header from './header/Header.vue'
import HeaderDesctop from './header/HeaderDesctop.vue'
import HeaderMobile from './header/HeaderMobile.vue'
import Footer from './footer/Footer.vue'

const windowWidth = window.innerWidth
const mobile = 600

function isDesktop(): boolean {
    const isDesck = windowWidth > mobile
      return isDesck;
  }
</script>

<template>
  <main class="fs-6">
    <HeaderDesctop v-if="isDesktop()" />
    <HeaderMobile v-else />
    <!-- <Header /> -->
    <slot></slot>
    <Footer />
  </main>
</template>