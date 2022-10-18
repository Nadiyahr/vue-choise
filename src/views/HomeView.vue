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
import Layout from '../components/Layout.vue'
import VideoComponent from '../components/videoComponent/VideoComponent.vue'
import AboutSection from '../components/about/AboutSection.vue'
import WorldMap from '../components/worldMap/WorldMap.vue'
import Subscribe from '../components/subscribe/Subscribe.vue'
// import HowToUseMobile from '../components/howToUse/HowToUseMobile.vue'
// import HowToUseSection from '../components/howToUse/HowToUseSection.vue'
// import TopMobile from '../components/top/TopMobile.vue'
// import TopDesctop from '../components/top/TopDesctop.vue'

const TopDesctop = defineAsyncComponent(() =>
  import('../components/top/TopDesctop.vue')
)

const TopMobile = defineAsyncComponent(() =>
  import('../components/top/TopMobile.vue')
)

const HowToUseSection = defineAsyncComponent(() =>
  import('../components/howToUse/HowToUseSection.vue')
)

const HowToUseMobile = defineAsyncComponent(() =>
  import('../components/howToUse/HowToUseMobile.vue')
)

const windowWidth = window.innerWidth
const mobile = 600

function isDesktop(): boolean {
    const isDesck = windowWidth > mobile
      return isDesck;
  }
</script>
