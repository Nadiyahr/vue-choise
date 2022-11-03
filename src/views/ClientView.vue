<template>
  <Layout>
    <ChoiceMore :is-mobile="mobile" />
    <Brands />
    <ManageMenu />
    <BecomePartner />
    <Testimonial />
  </Layout>
</template>

<script setup lang="ts">
import Layout from "@/components/layout/index.vue";
import ChoiceMore from "@/components/client/ChoiceMore.vue";
import Brands from "@/components/client/Brands.vue";
import ManageMenu from "@/components/client/manageMenu/ManageMenu.vue";
import BecomePartner from "@/components/client/bacomePartner/BecomePartner.vue";
import Testimonial from "@/components/client/testimonial/Testimonial.vue";
import { useBreakpoints } from "@/plugins/breakpoints";
import { ref } from "vue";

const { isMobile } = useBreakpoints();

const mobile = ref(isMobile);
</script>
