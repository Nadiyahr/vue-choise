<template>
  <section :class="bgColor" class="vh-100 py-5">
    <div class="">
      <h1>This is an about page</h1>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const bgColor = route.meta.headerClass;
</script>
