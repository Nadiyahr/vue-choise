<script setup lang="ts">
import QrCodeIcon from '../icons/QrCodeIcon.vue'
import QrCode from '../icons/QrCode.vue'
</script>

<template>
  <section class="px-5 bg-light">
    <b-container fluid class="text-dark p-5">
      <h4 class="fw-bolder text-center mb-5 p-2">How do I use Choicie?</h4>
      <div class="d-flex ">
        <div class="w-60">
          <b-row>
            <b-col>
              <div
                class="bg-image bg-posiiton" 
                style="background-image: url('/images/1.png');"
              >
                <QrCodeIcon class="mb-5"/>
                <p>Scan the QR-code on the foreign language menu.</p>
              </div>
            </b-col>
            <b-col>
              <div class="bg-posiiton" style="background-image: url('/images/1.png');">
                <QrCode />
                <p>Choose and order one or more dishes you like, then show your QR-code from Choicie to the waiter.</p>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div
                class="bg-image bg-posiiton" 
                style="background-image: url('/images/1.png');"
              >
                <QrCodeIcon />
                <p>Scan the QR-code on the foreign language menu.</p>
              </div>
            </b-col>
            <b-col>
              <div class="bg-posiiton" style="background-image: url('/images/1.png');">
                <QrCode />
                <p>Choose and order one or more dishes you like, then show your QR-code from Choicie to the waiter.</p>
              </div>
            </b-col>
          </b-row>
        </div>
        <div class="border-start">
          <b-col>
          <p>No language barrier</p>
          <p>No language barrier</p>
          <p>No language barrier</p>
          </b-col>
        </div>
      </div>
    </b-container>
  </section>
</template>

<style scoped>
.bg-posiiton {
  background-repeat: no-repeat;
  background-position: 75% 15%;
  width: 90%;
  padding-bottom: 10px;
}

.w-60 {
  width: 65%;
}
</style>
