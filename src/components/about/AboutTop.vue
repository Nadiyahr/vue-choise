<template>
  <section :class="bgColor" class="py-5">
    <div class="">
      <h1>This is an example request from {JSON} Placeholder</h1>
      <div class="py-2 lg-py-5">
        <b-button pill size="md" variant="primary" @click="toggleForm()" class="">
          Add feedback
        </b-button>
      </div>
      <ul v-if="!isForm">
        <AboutPost v-for="post in list" :args="post" />
        <!-- <div class="mt-3">
          <h6>Default Pills</h6>
          <b-pagination v-model="curr" pills :total-rows="5"></b-pagination>
        </div> -->
      </ul>
      <AboutForm v-else />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import AboutPost from "./AboutPost.vue";
import AboutForm from "./AboutForm.vue";

const route = useRoute();
const bgColor = route.meta.headerClass;

const store = useStore();

onMounted(() => {
  store.dispatch("GET_POSTS");
  store.dispatch("GET_PHOTOS", 1);
});

const list = computed(() => store.getters.completPosts);
let isForm = ref(false);

const toggleForm = () => {
  isForm.value = !isForm.value;
};
console.log(list);
</script>
