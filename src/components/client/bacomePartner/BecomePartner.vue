<template>
  <section class="relative">
    <div class="relative__container">
      <h2 class="fw-bolder pb-2 lh-sm">
        {{ $t('Client.Choicie for cafes and restaurants') }}
        <br />
        {{ $t('Client.Five growth drivers for your development') }}
      </h2>
      <p class="fs-6 text-prymary-light">
        {{
          $t(
            'Client.Choicie helps you analyze user actions and improve your cafe or restaurant'
          )
        }}
      </p>
      <div class="d-flex flex-wrap py-3">
        <div class="d-flex align-items-center gap-3 py-2 pe-4 m-2">
          <Quality />
          <p class="fs-7 text fw-bolder">{{ $t('Client.Quality of Service') }}</p>
        </div>
        <div class="d-flex align-items-center gap-3 py-2 pe-4 m-2">
          <Reputation />
          <p class="fs-7 text fw-bolder">
            {{ $t('Client.Reputation and promotion on the web') }}
          </p>
        </div>
        <div class="d-flex align-items-center gap-3 py-2 pe-4 m-2">
          <Scan />
          <p class="fs-7 text fw-bolder">{{ $t('Client.Visibility') }}</p>
        </div>
        <div class="d-flex align-items-center gap-3 lg-2 pe-4 m-2">
          <UserProfile />
          <p class="fs-7 text fw-bolder">{{ $t('Client.Number of orders') }}</p>
        </div>
        <div class="d-flex align-items-center gap-3 py-2 pe-4 m-2">
          <Happy />
          <p class="fs-7 text fw-bolder">
            {{ $t('Client.Convenience of work with clients') }}
          </p>
        </div>
      </div>
      <h4 class="relative__title">{{ $t('Client.What Does it Take?') }}</h4>
      <b-button pill size="md" variant="primary" class="relative_btn">
        {{ $t('Client.Become a Choicie partner!') }}
      </b-button>
    </div>
    <div class="absolute">
      <WaveMobile v-if="mobile" />
      <WaveLine v-else class="w-100" />
    </div>
  </section>
</template>

<script setup lang="ts">
import Quality from '@/components/icons/Quality.vue';
import Reputation from '@/components/icons/Reputation.vue';
import Scan from '@/components/icons/Scan.vue';
import UserProfile from '@/components/icons/UserProfile.vue';
import Happy from '@/components/icons/Happy.vue';
import WaveLine from '@/components/icons/WaveLine.vue';
import WaveMobile from '@/components/icons/WaveMobile.vue';
import { breakpoints } from '@/plugins/breakpoints';
import { ref } from 'vue';

const mobile = breakpoints.between('mobile', 'tablet');
</script>

<style scoped lang="scss">
.relative {
  position: relative;
  padding-top: 2rem;
  padding-bottom: 22rem;
  // background-image: url(images/wave.svg);
  // background-color: transparent;
  // background-repeat: no-repeat;
  // background-size: 100%;
  // background-position-y: bottom;

  @media (max-width: 500px) {
    // background-image: none;
    padding: 2rem 1.25rem 20rem;
  }

  &__container {
    width: 75%;

    @media (max-width: 600px) {
      width: 100%;
    }
  }

  &__title {
    font-size: 24px;
    font-weight: 700;
    margin-top: 3rem;

    @media (max-width: 600px) {
      margin-bottom: 2rem;
    }
  }

  &_btn {
    width: 19rem;
    height: 3.2rem;
    margin-top: 2rem;

    @media (max-width: 600px) {
      width: 100%;
    }
  }
}

.absolute {
  width: 100%;
  height: 45em;
  position: absolute;
  bottom: 0em;
  left: 0em;
  overflow: hidden;
  z-index: -1;

  @media (max-width: 600px) {
    height: 22em;
  }
}
</style>
