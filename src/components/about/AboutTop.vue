<template>
  <section :class="bgColor" class="py-5 mt-lg-5">
    <div class="">
      <h2>{{ $t('About.About title') }}</h2>
      <div class="py-5 lg-py-5 d-flex justify-content-between">
        <b-button pill size="md" variant="primary" @click="toggleForm()">
          {{ toggleFormBtnName }}
        </b-button>
        <b-button pill size="md" variant="primary" @click="clearStorage()" class="">
          {{ $t('About.Clear storage') }}
        </b-button>
      </div>
      <div v-if="!isForm">
        <ul id="itemList">
          <li v-for="post in list.slice(3 * (current - 1), 3 * current)" :key="post.id">
            <AboutPost :args="post" />
          </li>
        </ul>
        <div class="my-5">
          <b-pagination
            @page-click="onPageChanged"
            v-model="current"
            align="center"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="#itemList"
            pills
            class="customPagination"
          ></b-pagination>
        </div>
      </div>
      <AboutForm v-else />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';
import AboutPost from './AboutPost.vue';
import AboutForm from './AboutForm.vue';

onMounted(async () => {
  store.dispatch('GET_FEEDBACK');
});

const route = useRoute();
const bgColor = route.meta.headerClass;
const { t } = useI18n();

const store = useStore();

const list = computed(() => store.state.feedbacks);
const perPage = computed(() => store.state.perPage);
let curr = computed(() => store.state.currentPage);
const rows = computed(() => store.getters.gelLength);
const toggleFormBtnName = computed(() =>
  isForm ? t('About.Return to feedbacks') : t('About.Add feedback')
);
let cur = curr.value;
const current = ref(cur);

let isForm = ref(false);

const onPageChanged = (bvEvent: Event, page: number) => {
  store.commit('SET_PAGE', page);
  window.scrollTo({
    top: 200,
    left: 0,
    behavior: 'smooth',
  });
};

const toggleForm = () => {
  isForm.value = !isForm.value;
};

const clearStorage = () => localStorage.clear();
</script>

<style scoped lang="scss">
:deep(.customPagination .page-link) {
  margin-left: 4px;
  background: $my-prymary-2;
  color: $my-prymary;
  border: #3b2186 1px solid;
}

:deep(.customPagination .active button) {
  background: $my-prymary;
  color: $white;
}
</style>
