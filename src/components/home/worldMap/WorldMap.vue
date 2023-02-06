<template>
  <section id="map" class="py-5">
    <div class="">
      <p class="md-fs-5 text-primary fw-semibold md-fw-bold text-center mb-4">
        {{ $t('Home.We work with cafe and restaurant') }}<br v-if="isMobile" />
        {{ $t('Home.owners from') }}
      </p>
      <h2 v-if="mobile" class="fw-bolder fs-2 text-center mb-4">
        {{ $t('Home.10 countries, 5 continents') }}
      </h2>
      <h2 v-else class="fw-bolder text-center mb-4">{{ $t('Home.All the world') }}</h2>
      <p class="text-prymary-light text-center mb-0">
        {{ $t('Home.And there will be more!') }}
      </p>
      <p class="text-prymary-light text-center mb-4">
        {{ $t('Home.Choicie is ready to work') }}
      </p>
      <b-img fluid src="images/map.png" alt="Map Image"></b-img>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useBreakpoints } from '@/plugins/breakpoints';

const { isMobile } = useBreakpoints();

const mobile = ref(isMobile);
</script>
