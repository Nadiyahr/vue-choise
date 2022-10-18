<script setup lang="ts">
import Barcode from "../icons/Barcode.vue";
import Chat from "../icons/Chat.vue";
import MenuMobile from "../icons/MenuMobile.vue";
import HowToGetStart from "./HowToGetStart.vue";
</script>

<template>
  <section class="bg-light">
    <b-container class="p-2 vw-100 overflow-auto no-scroll">
     <b-row class="w-max">
      <b-col>
        <div
          class="bg-image bg-posiiton col-3"
          style="background-image: url('images/1.png');"
        >
          <Barcode class="my-4"/>
          <p>Scan the QR-code on the foreign language menu.</p>
        </div>
      </b-col>
      <b-col>
        <div
          class="bg-posiiton bg-image col-3"
          style="background-image: url('images/2.png');"
        >
          <Chat class="my-4"/>
          <p>Automatically get to the online version of menu — it will be translated into your native language.</p>
        </div>
      </b-col>
      <b-col>
        <div
          class="bg-image bg-posiiton col-3" 
          style="background-image: url('images/3.png');"
        >
          <MenuMobile class="my-4"/>
          <p>Choose and order one or more dishes you like, then show your QR-code from Choicie to the waiter.</p>
        </div>
      </b-col>
      <b-col>
        <div
          class="bg-posiiton bg-image col-3"
          style="background-image: url('images/4.png');"
        >
          <MenuMobile class="my-4"/>
          <p>Share your impressions, tips, and ratings to help other Choicie users.</p>
        </div>
      </b-col>
     </b-row>
    </b-container>
    <div class="p-2">
      <HowToGetStart />
    </div>
  </section>
</template>

<style scoped>
.w-max {
  width: max-content;
}

.w-fit {
  width: fit-content;
}

.bg-posiiton {
  width: 250px;
  background-repeat: no-repeat;
  background-position: 75% 10%;
}
</style>
