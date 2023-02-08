<template>
  <article class="sm-fs-7 d-sm-flex">
    <!-- <div> -->
    <div class="d-md-inline-block" :class="tablet && 'w-50'">
      <h1
        class="fw-bolder py-4 lg-pb-4 lg-mb-5 lg-p-2"
        :class="mobile || tablet ? 'text-content-heading' : 'text-white'"
      >
        {{ $t('Home.All the restaurants') }}
        <br />
        {{ $t('Home.in the world') }}
        <br />
        {{ $t('Home.with one tap') }}
      </h1>
      <p class="pb-3 lg-pb-0 lg-mb-5">{{ $t('Home.And a good friend') }}</p>
      <div class="p-2">
        <b-button
          pill
          size="md"
          :variant="mobile ? 'primary' : 'secondary'"
          class="w-btn"
        >
          {{ $t('Home.Get Started') }}
        </b-button>
      </div>
    </div>
    <div v-if="tablet" class="d-md-inline-block w-50">
      <b-img fluid src="images/startImg.png" alt="Start Image"></b-img>
    </div>
    <!-- </div> -->
  </article>
</template>

<script setup lang="ts">
import { breakpoints } from '@/plugins/breakpoints';

const mobile = breakpoints.between('mobile', 'tablet');
const tablet = breakpoints.between('tablet', 'laptop');
</script>
