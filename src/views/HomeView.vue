<script setup lang="ts">
import Layout from '../components/Layout.vue'
import TopDesctop from '../components/top/TopDesctop.vue'
import VideoComponent from '../components/videoComponent/VideoComponent.vue'
import AboutSection from '../components/about/AboutSection.vue'
import HowToUseSection from '../components/howToUse/HowToUseSection.vue'
import WorldMap from '../components/worldMap/WorldMap.vue'
import Subscribe from '../components/subscribe/Subscribe.vue'
import TopMobile from '../components/top/TopMobile.vue'
import HowToUseMobile from '../components/howToUse/HowToUseMobile.vue'

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
      <main v-if="isDesktop()">
        <TopDesctop />
        <VideoComponent />
        <AboutSection />
        <HowToUseSection />
        <WorldMap />
        <Subscribe />
      </main>
      <main v-else>
        <TopMobile />
        <AboutSection is-mobile/>
        <HowToUseMobile />
        <WorldMap />
        <Subscribe />
      </main>
    </Layout>
  </div>
</template>
