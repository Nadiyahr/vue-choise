<template>
  <div class="fs-6">
    <Header />
    <slot></slot>
    <Subscribe />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Subscribe from './subscribe/Subscribe.vue';
import Footer from './footer/Footer.vue';
import Header from './header/Header.vue';
</script>
