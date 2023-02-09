<template>
  <header :class="bgColor">
    <b-navbar type="light" fixed="top" class="my-header" :class="bgColor">
      <b-navbar-nav class="fs-6 fw-normal align-middle">
        <b-navbar-brand
          to="/"
          class="fs-3 fw-bold d-flex flex align-items-center gap-2 me-4"
          :class="(bgColor, brandColor)"
        >
          <svg class="icon icon--yelow">
            <use
              href="/src/assets/icons/icons_list.svg#alien"
              width="53"
              height="52"
              viewBox="0 0 53 52"
              :fill="iconColor"
            ></use>
          </svg>
          CHOICIE
        </b-navbar-brand>
        <router-link
          to="/"
          active-class="active-link-home"
          class="route-link"
          :class="textColor"
        >
          {{ $t('General.Home') }}
        </router-link>
        <router-link
          to="/about"
          active-class="active-link"
          class="route-link"
          :class="textColor"
        >
          {{ $t('General.About') }}
        </router-link>
        <router-link
          to="/client"
          active-class="active-link"
          class="route-link"
          :class="textColor"
        >
          {{ $t('General.Client') }}
        </router-link>
        <b-nav-item v-if="isMain" href="#howTo" class="py-2 href-link fs-6">
          <span :class="textColor">{{ $t('General.How to use') }}</span>
        </b-nav-item>
        <b-nav-item href="#contact" class="py-2 href-link fs-6">
          <span :class="textColor">{{ $t('General.Contact') }}</span>
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="pr-5">
        <b-nav-form class="gap-3">
          <b-button
            pill
            size="md"
            variant="primary"
            style="background-color: rgba(96, 83, 177, 1)"
            class="w-btn"
          >
            <svg class="icon icon--android" viewBox="0 0 16 16">
              <use href="/src/assets/icons/icons_list.svg#android"></use>
            </svg>
            <span class="mx-2">Android</span>
          </b-button>
          <b-button pill size="md" variant="secondary" class="w-btn">
            <svg class="icon icon--ios">
              <use href="/src/assets/icons/icons_list.svg#ios"></use>
            </svg>
            <span class="mx-2">iOS</span>
          </b-button>
          <div class="select">
            <LanguageSwitch :is-main="isMain" />
          </div>
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import LanguageSwitch from './LanguageSwitch.vue';

const { name } = useRoute();

const routeName = ref(name);

const isMain = computed(() => routeName.value === 'home');
const bgColor = computed(() => (isMain.value ? 'bg-dark' : 'bg-info'));
const iconColor = computed(() => (isMain.value ? '#f2cf7e' : '#2b146c'));
const brandColor = computed(() => (isMain.value ? 'text-white' : ''));
const textColor = computed(() => (isMain.value ? 'text-white' : 'text-dark'));
</script>

<style scoped lang="scss">
a.font {
  font-weight: 900 !important;
}

a {
  font-size: 14px;
  padding-top: 15px;
  margin-top: 6px;
  margin-right: 20px;
  line-height: 18px;
  text-decoration: none;

  &:last-of-type {
    margin-right: 12px;
  }
}

.route-link {
  font-size: 14px;
  margin-top: 6px;
  line-height: 18px;
  text-decoration: none;
}

.href-link {
  margin-top: 3px;
}

.icon {
  display: inline-block;

  &--yelow {
    width: 53px;
    height: 52px;
  }

  &--mobile {
    width: 44px;
    height: 44px;
  }

  &--android {
    width: 16px;
    height: 16px;
    margin-bottom: 4px;
    fill: #fff;
  }

  &--ios {
    width: 16px;
    height: 16px;
    margin-bottom: 4px;
    fill: #3b2186;
  }
}

.my-header {
  /* box-shadow: 0 0 16px 8px rgba(59, 33, 134, 0.54); */
  padding: 0 60px 0 135px;
}

.shadow {
  box-shadow: 0 0 16px 8px rgba(59, 33, 134, 0.54);
}

.select {
  width: 50px;
}
</style>
