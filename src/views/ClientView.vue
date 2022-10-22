<template>
   <Layout>
   <main v-if="isDesktop()">
     <ChoiceMore />
     <Brands />
     <ManageMenu />
   </main>
   <main v-else>
    <ChoiceMore is-mobile />
    <Brands is-mobile />
    <ManageMenu is-mobile />
   </main>
  </Layout>
</template>

<script setup lang="ts">
import Layout from "../components/layout/index.vue";
import ChoiceMore from "../components/client/ChoiceMore.vue";
import Brands from "../components/client/Brands.vue";
import ManageMenu from "../components/client/manageMenu/ManageMenu.vue";

const windowWidth = window.innerWidth
const mobile = 600

function isDesktop(): boolean {
  const isDesck = windowWidth > mobile
    return isDesck;
}

</script>