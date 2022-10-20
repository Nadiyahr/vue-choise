<template>
   <Layout>
   <main v-if="isDesktop()">
     <ChoiceMore />
   </main>
   <main v-else>
    <ChoiceMore is-mobile />
   </main>
  </Layout>
</template>

<script setup lang="ts">
import Layout from "../components/layout/index.vue";
import ChoiceMore from "../components/client/ChoiceMore.vue";

const windowWidth = window.innerWidth
const mobile = 600

function isDesktop(): boolean {
  const isDesck = windowWidth > mobile
    return isDesck;
}

</script>