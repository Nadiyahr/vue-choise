<template>
  <div v-if="mobile">
    <HeaderMobile />
  </div>
  <header v-if="desktop" :class="bgColor">
    <HeaderDesctop />
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { breakpoints } from '@/plugins/breakpoints';
import HeaderDesctop from './HeaderDesctop.vue';
import HeaderMobile from './HeaderMobile.vue';

const route = useRoute();

const isDesktop = breakpoints.between('laptop', 'desktop');
const isMobile = breakpoints.between('mobile', 'laptop');

const mobile = ref(isMobile);
const desktop = ref(isDesktop);

const bgColor = route.meta.headerClass as string;
</script>
