<template>
  <div class="d-flex gap-5 align-items-center lg-ps-5">
    <Apps class="mb-3" />
    <p>{{ $t('Home.No language barrier') }}</p>
  </div>
  <div class="d-flex gap-5 align-items-center lg-ps-5">
    <Language class="mb-3" />
    <p>{{ $t('Home.No need to search for reviews — all collected in one place') }}</p>
  </div>
  <div class="d-flex gap-5 align-items-center lg-ps-5">
    <AlienIcon :svgColor="'#beb79b'" class="mb-3" />
    <p>{{ $t('Home.No need to install any translator — all you need is Choicie') }}</p>
  </div>
  <div class="p-2 mt-4 lg-mt-5 lg-ps-5">
    <b-button pill size="md" variant="secondary" class="w-btn">{{
      $t('Home.Get Started')
    }}</b-button>
  </div>
</template>

<script setup lang="ts">
import Apps from '../../icons/Apps.vue';
import Language from '../../icons/Language.vue';
import AlienIcon from '../../icons/AlienIcon.vue';
</script>
