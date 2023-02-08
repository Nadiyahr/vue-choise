<template>
  <TopDesctop v-if="desktop" />
  <TopMobile v-if="tablet || mobile" />
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';
import { breakpoints } from '@/plugins/breakpoints';

const mobile = breakpoints.between('mobile', 'tablet');
const desktop = breakpoints.greaterOrEqual('laptop');
const tablet = breakpoints.between('tablet', 'laptop');

const TopDesctop = defineAsyncComponent(() => import('./TopDesctop.vue'));

const TopMobile = defineAsyncComponent(() => import('./TopMobile.vue'));
</script>
