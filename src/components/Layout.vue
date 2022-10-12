<script setup lang="ts">
import Header from './header/Header.vue'
import Top from './top/Top.vue'
import VideoComponent from './videoComponent/VideoComponent.vue'
import AboutSection from './about/AboutSection.vue'
import HowToUseSection from './howToUse/HowToUseSection.vue'
</script>

<template>
  <main>
    <Header />
    <!-- <Top />
    <VideoComponent /> -->
    <!-- <AboutSection /> -->
    <!-- <HowToUseSection /> -->
    <slot></slot>
    
  </main>
</template>