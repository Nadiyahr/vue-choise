<template>
  <TopDesctop v-if="desktop" />
  <TopMobile v-if="tablet || mobile" />
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';
import { breakpoints } from '@/plugins/breakpoints';

const mobile = ref(breakpoints.between('mobile', 'tablet'));
const desktop = ref(breakpoints.between('laptop', 'desktop'));
const tablet = ref(breakpoints.between('tablet', 'laptop'));

const TopDesctop = defineAsyncComponent(() => import('./TopDesctop.vue'));

const TopMobile = defineAsyncComponent(() => import('./TopMobile.vue'));
</script>
