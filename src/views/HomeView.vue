<script setup lang="ts">
import Layout from '../components/Layout.vue'
import Top from '../components/top/Top.vue'
import VideoComponent from '../components/videoComponent/VideoComponent.vue'
import AboutSection from '../components/about/AboutSection.vue'
import HowToUseSection from '../components/howToUse/HowToUseSection.vue'
import WorldMap from '../components/worldMap/WorldMap.vue'
import Subscribe from '../components/subscribe/Subscribe.vue'
</script>

<template>
  <div>
    <Layout>
      <main>
        <Top />
        <VideoComponent />
        <AboutSection />
        <HowToUseSection />
        <WorldMap />
        <Subscribe />
      </main>
    </Layout>
  </div>
</template>
