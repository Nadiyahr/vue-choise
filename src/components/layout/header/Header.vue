<template>
  <div v-if="mobile">
    <HeaderMobile />
  </div>
  <header v-if="desktop" :class="bgColor">
    <HeaderDesctop />
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { breakpoints } from '@/plugins/breakpoints';
import HeaderDesctop from './HeaderDesctop.vue';
import HeaderMobile from './HeaderMobile.vue';

const { name } = useRoute();

const mobile = breakpoints.between('mobile', 'laptop');
const desktop = breakpoints.greaterOrEqual('laptop');

const isMain = computed(() => name === 'home');
const bgColor = computed(() => (isMain.value ? 'bg-dark' : 'bg-info'));
</script>
