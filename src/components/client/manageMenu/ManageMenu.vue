<template>
  <section class="pt-5">
    <div class="">
      <p
        class="text-primary fs-4 text-center text-uppercase fw-semibold md-fw-bolder mb-4"
      >
        {{ $t('Client.Dashboard Performance') }}
      </p>
      <h2 class="fw-bolder fs-2 text-center mb-4">
        {{ $t('Client.Manage your menu so your customers’ll like it') }}
      </h2>
      <p class="fs-4 text-prymary-light text-center mb-5">
        {{ $t('Client.We created an advanced dashboard') }}
      </p>
    </div>
    <div>
      <b-card-group deck>
        <b-card
          bg-variant="info"
          border-variant="info"
          text-variant="content-heading"
          style="min-height: 30rem"
          class="pt-3 px-3 rounded-0 mb-5"
        >
          <b-card-title class="fs-2 fw-bolder title">
            {{ $t('Client.Creation of') }}<br />{{ $t('Client.a Restaurant menu') }}
          </b-card-title>
          <b-card-text class="position-relative">
            {{ $t('Client.Upload your cafe or restaurant menu') }}
          </b-card-text>
          <ManageMenuCard bottom="0" right="0" inner />
        </b-card>
        <b-card
          bg-variant="light"
          border-variant="light"
          text-variant="content-heading"
          style="min-height: 30rem"
          class="pt-3 px-3 rounded-0 mb-5"
        >
          <b-card-title class="fs-2 fw-bolder title">
            {{ $t('Client.The biggest feedback from your customers') }}
          </b-card-title>
          <b-card-text class="position-relative">
            {{ $t('Client.Rating on the waiter') }}
          </b-card-text>
          <ManageMenuCard bottom="0" right="0" />
        </b-card>
      </b-card-group>
    </div>
  </section>
</template>

<script setup lang="ts">
import ManageMenuCard from './menuCard/ManageMenuCard.vue';
</script>

<style scoped lang="scss">
.title {
  letter-spacing: 0.9px;
}
</style>
