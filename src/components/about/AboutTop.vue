<template>
  <section :class="bgColor" class="py-5">
    <div class="">
      <h1>This is an example request from {JSON} Placeholder</h1>
      <ul>
        <AboutPost v-for="post in list" :args="post" />
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import AboutPost from "./AboutPost.vue";

const route = useRoute();
const bgColor = route.meta.headerClass;

const store = useStore();

onMounted(() => {
  store.dispatch("GET_POSTS", 1);
  store.dispatch("GET_PHOTOS", 1);
});

const list = computed(() => store.getters.completPosts);

console.log(list);
</script>
