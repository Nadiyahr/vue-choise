<template>
  <div>
    <Layout is-home>
      <TopDesctop v-if="isDesktop" />
      <TopMobile v-if="isTablet || isMobile" />
      <VideoComponent v-if="isTablet || isMobile" />
      <AboutSection :is-mobile="isMobile" />
      <HowToUseSection v-if="isDesktop" />
      <HowToUseMobile v-if="isTablet || isMobile" />
      <WorldMap :is-mobile="isTablet || isMobile" />
      <!-- <main v-if="isDesktop()">
        <TopDesctop />
        <VideoComponent />
        <AboutSection />
        <HowToUseSection />
        <WorldMap />
      </main>
      <main v-else>
        <TopMobile />
        <AboutSection is-mobile />
        <HowToUseMobile />
        <WorldMap is-mobile />
      </main> -->
    </Layout>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import Layout from "../components/layout/index.vue";
import VideoComponent from "../components/home/videoComponent/VideoComponent.vue";
import AboutSection from "../components/home/about/AboutSection.vue";
import WorldMap from "../components/home/worldMap/WorldMap.vue";
import { useBreakpoints } from "../plugins/breakpoints";

const {isMobile, isDesktop, isTablet } = useBreakpoints();

const TopDesctop = defineAsyncComponent(
  () => import("../components/home/top/TopDesctop.vue")
);

const TopMobile = defineAsyncComponent(
  () => import("../components/home/top/TopMobile.vue")
);

const HowToUseSection = defineAsyncComponent(
  () => import("../components/home/howToUse/HowToUseSection.vue")
);

const HowToUseMobile = defineAsyncComponent(
  () => import("../components/home/howToUse/HowToUseMobile.vue")
);

</script>
