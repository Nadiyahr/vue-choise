<template>
  <div>
    <Layout is-home>
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
        <WorldMap is-mobile/>
        <Subscribe />
      </main>
    </Layout>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import Layout from '../components/layout/index.vue'
import VideoComponent from '../components/home/videoComponent/VideoComponent.vue'
import AboutSection from '../components/home/about/AboutSection.vue'
import WorldMap from '../components/home/worldMap/WorldMap.vue'
import Subscribe from '../components/home/subscribe/Subscribe.vue'

const TopDesctop = defineAsyncComponent(() =>
  import('../components/home/top/TopDesctop.vue')
)

const TopMobile = defineAsyncComponent(() =>
  import('../components/home/top/TopMobile.vue')
)

const HowToUseSection = defineAsyncComponent(() =>
  import('../components/home/howToUse/HowToUseSection.vue')
)

const HowToUseMobile = defineAsyncComponent(() =>
  import('../components/home/howToUse/HowToUseMobile.vue')
)

const windowWidth = window.innerWidth
const mobile = 600

function isDesktop(): boolean {
    const isDesck = windowWidth > mobile
      return isDesck;
  }
</script>
