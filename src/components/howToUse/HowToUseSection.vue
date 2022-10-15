<script setup lang="ts">
import QrMenu from '../icons/QrMenu.vue'
import QrOrder from '../icons/QrOrder.vue'
import OnlineMenu from '../icons/OnlineMenu.vue'
import Feadback from '../icons/Feadback.vue'
import Apps from '../icons/Apps.vue'
import Language from '../icons/Language.vue'
import AlienIcon from '../icons/AlienIcon.vue'
</script>

<template>
  <section class="bg-light">
    <b-container fluid class="text-dark py-5">
      <h2 class="fw-bolder text-center mb-5 p-2">
        How do I use Choicie?
      </h2>
      <div class="d-flex ">
        <div class="w-75">
          <b-row>
            <b-col>
              <div
                class="bg-image bg-posiiton" 
                style="background-image: url('images/1.png');"
              >
                <QrMenu class="mb-4"/>
                <p>Scan the QR-code on the foreign language menu.</p>
              </div>
            </b-col>
            <b-col>
              <div
                class="bg-posiiton bg-image"
                style="background-image: url('images/2.png');"
              >
                <OnlineMenu class="mb-4"/>
                <p>Automatically get to the online version of menu — it will be translated into your native language.</p>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div
                class="bg-image bg-posiiton" 
                style="background-image: url('images/3.png');"
              >
                <QrOrder class="mb-4"/>
                <p>Choose and order one or more dishes you like, then show your QR-code from Choicie to the waiter.</p>
              </div>
            </b-col>
            <b-col>
              <div
                class="bg-posiiton
                bg-image"
                style="background-image: url('images/4.png');"
              >
                <Feadback class="mb-4"/>
                <p>Share your impressions, tips, and ratings to help other Choicie users.</p>
              </div>
            </b-col>
          </b-row>
        </div>
        <div class="border-start pl-5 ">
          <b-col class="px-5">
          <div class="d-flex gap-4 align-items-center ps-5">
            <Apps class="mb-3"/>
            <p>No language barrier</p>
          </div>
          <div class="d-flex gap-4 align-items-center ps-5">
            <Language class="mb-3"/>
            <p>No need to search for reviews — all collected in one place</p>
          </div>
          <div class="d-flex gap-4 align-items-center ps-5">
            <AlienIcon :svgColor="'#aaaaaf'" class="mb-3"/>
            <p>No need to install any translator — all you need is Choicie </p>
          </div>
          <div class="p-2 mt-5 ps-5">
            <b-button
              pill
              size="md"
              variant="secondary"
              class="w-btn"
            >
              Get Started
            </b-button>
          </div>
          </b-col>
        </div>
      </div>
    </b-container>
  </section>
</template>

<style scoped>
.bg-posiiton {
  background-repeat: no-repeat;
  background-position: 75% 10%;
  width: 90%;
  padding-bottom: 10px;
}

</style>
