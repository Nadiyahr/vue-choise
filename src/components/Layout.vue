<template>
  <div class="fs-6">
    <HeaderDesctop v-if="isDesktop()" />
    <HeaderMobile v-else />
    <!-- <Header /> -->
    <slot></slot>
    <Footer :is-home="home()"/>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import Footer from './footer/Footer.vue'
// import HeaderDesctop from './header/HeaderDesctop.vue'
// import HeaderMobile from './header/HeaderMobile.vue'

export interface Props {
  isHome?: boolean
}

const HeaderDesctop = defineAsyncComponent(() =>
  import('./header/HeaderDesctop.vue')
)

const HeaderMobile = defineAsyncComponent(() =>
  import('./header/HeaderMobile.vue')
)

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
