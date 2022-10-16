<script setup lang="ts">
import Layout from '../components/Layout.vue'
import TopDesctop from '../components/top/TopDesctop.vue'
import VideoComponent from '../components/videoComponent/VideoComponent.vue'
import AboutSection from '../components/about/AboutSection.vue'
import HowToUseSection from '../components/howToUse/HowToUseSection.vue'
import WorldMap from '../components/worldMap/WorldMap.vue'
import Subscribe from '../components/subscribe/Subscribe.vue'
import TopMobile from '../components/top/TopMobile.vue'

const windowWidth = window.innerWidth
const mobile = 600

function isDesktop(): boolean {
    const isDesck = windowWidth > mobile
      return isDesck;
  }
</script>

<template>
  <div>
    <Layout>
      <main>
        <TopDesctop v-if="isDesktop()" />
        <TopMobile v-else />
        <VideoComponent />
        <AboutSection />
        <HowToUseSection />
        <WorldMap />
        <Subscribe />
      </main>
    </Layout>
  </div>
</template>
