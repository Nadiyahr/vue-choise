<template>
  <article class="p-2">
    <h4 class="mb-4">
      {{ $t('Home.We are the first of our kind! Here you can find:') }}
    </h4>
    <div class="d-md-inline-block me-md-5">
      <div class="d-flex flex-row mb-3 gap-4">
        <div>
          <Review />
        </div>
        <div>
          <h6>{{ $t('Home.Restaurant Review') }}</h6>
          <p class="fs-7">{{ $t('Home.Get best tips from our users and Choicie') }}</p>
        </div>
      </div>
      <div class="d-flex flex-row mb-3 gap-4">
        <div>
          <MapTagMobile />
        </div>
        <div>
          <h6>{{ $t('Home.Map with Restaurant Tags') }}</h6>
          <p class="fs-7">{{ $t('Home.Make simple selection by your criteria') }}</p>
        </div>
      </div>
    </div>
    <div class="d-md-inline-block ms-md-5">
      <div class="d-flex flex-row mb-3 gap-4">
        <div>
          <QrCodeMobile />
        </div>
        <div>
          <h6>{{ $t('Home.QR Code Menu') }}</h6>
          <p class="fs-7">
            {{ $t('Home.Use fast and convenient way to create orders') }}
          </p>
        </div>
      </div>
      <div class="d-flex flex-row mb-3 gap-4">
        <div>
          <BonusMobile />
        </div>
        <div>
          <h6>{{ $t('Home.Bonus Points for Clients') }}</h6>
          <p class="fs-7">{{ $t('Home.Spend it and get free drinks and dishes') }}</p>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import Review from '@/components/icons/Review.vue';
import QrCodeMobile from '@/components/icons/QrCodeMobile.vue';
import MapTagMobile from '@/components/icons/MapTagMobile.vue';
import BonusMobile from '@/components/icons/BonusMobile.vue';
</script>
