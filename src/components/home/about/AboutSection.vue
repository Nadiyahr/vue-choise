<template>
  <section class="md-p-2">
    <div fluid class="text-dark py-5">
      <b-row class="gap-3 pb-5">
        <b-col v-if="mobile">
          <b-img
            center
            src="images/infoMobile1.png"
            alt="Info Image"
            class="mx-auto"
          ></b-img>
        </b-col>
        <b-col>
          <div class="p-4">
            <h2 class="fw-bolder mb-3 lg-p-2">
              {{ $t('Home.Title About Section') }}
            </h2>
            <div class="fs-xs">
              <p class="mb-3 lg-p-2">{{ $t('Home.First paragraph') }}</p>
              <p class="mb-5 lg-p-2">{{ $t('Home.Second paragraph') }}</p>
            </div>
            <div class="lg-p-2">
              <b-button pill size="md" variant="primary" class="w-btn">
                {{ $t('Home.Get Started') }}
              </b-button>
            </div>
          </div>
        </b-col>
        <b-col v-if="desktop || tablet">
          <b-img fluid src="images/infoAbout1.png" alt="Info Image"></b-img>
        </b-col>
      </b-row>
      <b-row class="gap-3 pt-5" :class="mobile && 'flex-column'">
        <b-col v-if="mobile">
          <b-img center src="images/infoMobile2.png" alt="Info Image"></b-img>
        </b-col>
        <b-col v-if="desktop || tablet">
          <b-img fluid src="images/infoAbout2.png" alt="Info Image"></b-img>
        </b-col>
        <b-col>
          <div class="p-4">
            <h2 class="fw-bolder mb-3 lg-p-2">
              {{ $t('Home.And a new social network') }}
            </h2>
            <div class="fs-xs">
              <p class="mb-3 lg-p-2">{{ $t('Home.Fourth paragraph') }}</p>
              <p class="mb-5 lg-p-2">{{ $t('Home.Fifth paragraph') }}</p>
            </div>
            <div class="p-2">
              <b-button pill size="md" variant="primary" class="w-btn">
                {{ $t('Home.Get Started') }}
              </b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useBreakpoints } from '@/plugins/breakpoints';

const { isMobile, isDesktop, isTablet } = useBreakpoints();
const { t } = useI18n();

const mobile = ref(isMobile);
const desktop = ref(isDesktop);
const tablet = ref(isTablet);

const SectionTitle = computed(
  () =>
    `Choicie ${t('Home.is')} ${t('Home.a')} ${t('Home.universal menu')} ${t(
      'Home.for'
    )} ${t('Home.all')} ${t('Home.restaurants')}.`
);

//`Choicie&nbsp;is&nbsp;a&nbsp;universal menu&nbsp;for&nbsp;all&nbsp;restaurants.`
</script>
