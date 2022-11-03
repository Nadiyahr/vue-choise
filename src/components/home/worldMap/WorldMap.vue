<template>
  <section id="map" class="py-5">
    <div class="">
      <p class="md-fs-5 text-primary fw-semibold md-fw-bold text-center mb-4">
        We work with cafe and restaurant <br v-if="isMobile" />
        owners from
      </p>
      <h2 v-if="mobile" class="fw-bolder fs-2 text-center mb-4">
        10 countries, 5 continents
      </h2>
      <h2 v-else class="fw-bolder text-center mb-4">All the world</h2>
      <p class="text-prymary-light text-center mb-0">And there will be more!</p>
      <p class="text-prymary-light text-center mb-4">
        Choicie is ready to work internationally. We work with customers in 8 different
        time zones.
      </p>
      <b-img fluid src="images/map.png" alt="Map Image"></b-img>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useBreakpoints } from "@/plugins/breakpoints";

const { isMobile } = useBreakpoints();

const mobile = ref(isMobile);
</script>
