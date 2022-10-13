<script setup lang="ts">
import Header from './header/Header.vue'
import Footer from './footer/Footer.vue'
</script>

<template>
  <main class="fs-6">
    <Header />
    <slot></slot>
    <Footer />
  </main>
</template>