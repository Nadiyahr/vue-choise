<script setup lang="ts">
import HeaderDesctop from './header/HeaderDesctop.vue'
import HeaderMobile from './header/HeaderMobile.vue'
import Footer from './footer/Footer.vue'

export interface Props {
  isHome?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isHome: false
})

const windowWidth = window.innerWidth
const mobile = 600

function isDesktop(): boolean {

  return windowWidth > mobile
}

function home(): boolean {

  return (isDesktop() && props.isHome) || (isDesktop() && !props.isHome)
}

</script>

<template>
  <main class="fs-6">
    <HeaderDesctop v-if="isDesktop()" />
    <HeaderMobile v-else />
    <!-- <Header /> -->
    <slot></slot>
    <Footer :is-home="home()"/>
  </main>
</template>