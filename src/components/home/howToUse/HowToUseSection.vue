<template>
  <section id="howTo" class="bg-light">
    <b-container fluid class="text-dark py-5">
      <h2 class="fw-bolder text-center mb-5 p-2">How do I use Choicie?</h2>
      <div class="d-flex">
        <div class="w-75">
          <b-row>
            <b-col>
              <div
                class="bg-image bg-posiiton"
                style="background-image: url('images/1.png')"
              >
                <QrMenu class="mb-4" />
                <p>Scan the QR-code on the foreign language menu.</p>
              </div>
            </b-col>
            <b-col>
              <div
                class="bg-posiiton bg-image"
                style="background-image: url('images/2.png')"
              >
                <OnlineMenu class="mb-4" />
                <p>
                  Automatically get to the online version of menu — it will be translated
                  into your native language.
                </p>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div
                class="bg-image bg-posiiton"
                style="background-image: url('images/3.png')"
              >
                <QrOrder class="mb-4" />
                <p>
                  Choose and order one or more dishes you like, then show your QR-code
                  from Choicie to the waiter.
                </p>
              </div>
            </b-col>
            <b-col>
              <div
                class="bg-posiiton bg-image"
                style="background-image: url('images/4.png')"
              >
                <Feadback class="mb-4" />
                <p>
                  Share your impressions, tips, and ratings to help other Choicie users.
                </p>
              </div>
            </b-col>
          </b-row>
        </div>
        <div class="border-start pl-5">
          <b-col class="px-5">
            <HowToGetStart />
          </b-col>
        </div>
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import QrMenu from "../../icons/QrMenu.vue";
import QrOrder from "../../icons/QrOrder.vue";
import OnlineMenu from "../../icons/OnlineMenu.vue";
import Feadback from "../../icons/Feadback.vue";
import HowToGetStart from "./HowToGetStart.vue";
</script>

<style scoped>
.bg-posiiton {
  background-repeat: no-repeat;
  background-position: 75% 10%;
  width: 90%;
  padding-bottom: 10px;
}
</style>
