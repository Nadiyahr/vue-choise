<template>
  <div>
    <b-navbar toggleable :variant="mainColor">
      <b-button
        @click="toggle"
        id="menu-toggle"
        v-b-toggle="'sidebar-toggle'"
        :class="`bg-${mainColor}`"
      >
        <Menu :svg-color="isOpen ? '#fff' : '#2b146c'" />
      </b-button>
      <b-navbar-brand
        href="#"
        :class="isOpen ? 'text-white' : 'text-dark'"
        class="fs-2 text fw-bold d-flex flex justify-content-between align-items-center gap-3"
      >
        <svg class="icon icon--mobile ml-2">
          <use
            href="/src/assets/icons/icons_list.svg#alien"
            width="44"
            height="44"
            viewBox="0 0 44 44"
            :fill="primaryColor"
          ></use>
        </svg>
        <!-- <Alien :svg-color="primaryColor" /> -->
        CHOICIE
      </b-navbar-brand>
      <!-- Right aligned nav items -->
      <b-navbar-nav>
        <b-nav-form class="gap-3">
          <b-button
            pill
            size="md"
            class="w-btn"
            :class="isOpen ? 'bg-white' : 'bg-blue-btn'"
          >
            <svg
              class="icon icon__android"
              viewBox="0 0 16 16"
              :fill="isOpen ? '#3b2186' : '#fff'"
            >
              <use href="/src/assets/icons/icons_list.svg#android"></use>
            </svg>
            <span v-if="tablet" class="mx-2" :class="isOpen ? 'text-dark' : 'text-white'"
              >Android</span
            >
          </b-button>
          <b-button
            pill
            size="md"
            variant="secondary"
            class="w-btn"
            :class="isOpen ? 'bg-white' : 'bg-secondary'"
          >
            <svg class="icon icon--ios">
              <use href="/src/assets/icons/icons_list.svg#ios"></use>
            </svg>
            <span v-if="tablet" class="mx-2" :class="isOpen ? 'text-dark' : 'text-white'"
              >iOS</span
            >
          </b-button>
        </b-nav-form>
      </b-navbar-nav>
      <!-- collapse nav items -->
      <b-collapse id="collapse" v-model="isOpen" is-nav>
        <b-navbar-nav class="fs-4 text-white">
          <b-nav-item
            align="center"
            to="/"
            class="border-bottom border-light"
            @click="toggle"
          >
            {{ $t('General.Home') }}
          </b-nav-item>
          <b-nav-item
            align="center"
            to="/about"
            class="border-bottom border-light"
            @click="toggle"
          >
            {{ $t('General.About') }}
          </b-nav-item>
          <b-nav-item
            align="center"
            to="/client"
            class="border-bottom border-light"
            @click="toggle"
          >
            {{ $t('General.Client') }}
          </b-nav-item>
          <b-nav-item
            align="center"
            href="#howTo"
            class="border-bottom border-light"
            @click="toggle"
          >
            {{ $t('General.How to use') }}
          </b-nav-item>
          <b-nav-item
            align="center"
            href="#contact"
            class="border-bottom border-light"
            @click="toggle"
          >
            {{ 'General.Contact' }}
          </b-nav-item>
          <div class="lang">
            <LanguageSwitch is-mobile @on-input="toggle" />
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';
import { breakpoints } from '@/plugins/breakpoints';
import LanguageSwitch from './LanguageSwitch.vue';
import Menu from '@/components/icons/Menu.vue';

const { name } = useRoute();

const tablet = ref(breakpoints.between('tablet', 'laptop'));
const routName = ref(name);
const isOpen = ref(false);
const primaryColor = ref('#3b2186');

const mainColor = computed(() => {
  if (isOpen.value) return 'primary';
  if (routName.value === 'home' && !isOpen.value) return 'light';
  if (routName.value !== 'home' && !isOpen.value) return 'info';
  return 'info';
});

const toggle = (): void => {
  isOpen.value = !isOpen.value;
  primaryColor.value = primaryColor.value === '#3b2186' ? '#f2cf7e' : '#3b2186';
};
</script>

<style scoped lang="scss">
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

  &__android {
    width: 16px;
    height: 16px;
    margin-bottom: 4px;
  }

  &--ios {
    width: 15px;
    height: 15px;
    margin-bottom: 4px;
    fill: #3b2186;
  }
}

.lang {
  padding: 2px 12px 2px 0;

  .form-select {
    width: 90% !important;

    option {
      width: inherit;
    }
  }
}
</style>
