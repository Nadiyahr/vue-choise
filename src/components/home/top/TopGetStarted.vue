<template>
  <article class="sm-fs-7 sm-flex">
    <div>
      <h1
        class="fw-bolder py-4 lg-pb-4 lg-mb-5 lg-p-2"
        :class="isMobile ? 'text-content-heading' : 'text-white'"
      >
        All&nbsp;the&nbsp;restaurants
        <br />in&nbsp;the&nbsp;world&nbsp;-<br />with&nbsp;one&nbsp;tap
      </h1>
      <p class="pb-3 lg-pb-0 lg-mb-5">
        And a good friend with the same name. He understands that feeling of being an
        alien in another country, so here is Choicie, an app. It can make your journey,
        date or meeting with friends much better.
      </p>
      <div class="p-2">
        <b-button
          pill
          size="md"
          :variant="isMobile ? 'primary' : 'secondary'"
          class="w-btn"
        >
          Get Started
        </b-button>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
export interface Props {
  isMobile?: boolean;
}

const { isMobile = false } = defineProps<Props>();
</script>
