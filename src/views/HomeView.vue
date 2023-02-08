<template>
  <div>
    <Layout is-home>
      <TopDesctop v-if="desktop" />
      <TopMobile v-if="tablet || mobile" />
      <VideoComponent v-if="desktop" />
      <AboutSection />
      <HowToUseSection v-if="desktop" />
      <HowToUseMobile v-if="tablet || mobile" />
      <WorldMap />
    </Layout>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';
import Layout from '@/components/layout/index.vue';
import VideoComponent from '@/components/home/videoComponent/VideoComponent.vue';
import AboutSection from '@/components/home/about/AboutSection.vue';
import WorldMap from '@/components/home/worldMap/WorldMap.vue';
import { breakpoints } from '@/plugins/breakpoints';

const mobile = breakpoints.smaller('tablet');
const desktop = breakpoints.greaterOrEqual('laptop');
const tablet = breakpoints.between('tablet', 'laptop');

const TopDesctop = defineAsyncComponent(
  () => import('../components/home/top/TopDesctop.vue')
);

const TopMobile = defineAsyncComponent(
  () => import('../components/home/top/TopMobile.vue')
);

const HowToUseSection = defineAsyncComponent(
  () => import('../components/home/howToUse/HowToUseSection.vue')
);

const HowToUseMobile = defineAsyncComponent(
  () => import('../components/home/howToUse/HowToUseMobile.vue')
);
</script>
