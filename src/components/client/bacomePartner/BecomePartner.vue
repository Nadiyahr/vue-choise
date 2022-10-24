<template>
  <section class="relative">
    <div class="w-75 relative_div">
      <h2 class="fw-bold">
        Choicie for cafes and restaurants.<br />Five growth drivers for your development
      </h2>
      <p class="fs-6 text-prymary-light">
        Choicie helps you analyze user actions and improve your cafe or restaurant.
      </p>
      <div class="d-flex flex-wrap py-3">
        <div class="d-flex align-items-center gap-3 py-2 pe-4 m-2">
          <Qualyty />
          <p class="fs-7 text">Quality of Service</p>
        </div>
        <div class="d-flex align-items-center gap-3 py-2 pe-4 m-2">
          <Reputation />
          <p class="fs-7 text">Reputation and promotion on the web</p>
        </div>
        <div class="d-flex align-items-center gap-3 py-2 pe-4 m-2">
          <Scan />
          <p class="fs-7 text">Visibility</p>
        </div>
        <div class="d-flex align-items-center gap-3 py-2 pe-4 m-2">
          <UserProfile />
          <p class="fs-7 text">Number of orders</p>
        </div>
        <div class="d-flex align-items-center gap-3 py-2 pe-4 m-2">
          <Happy />
          <p class="fs-7 text">Convenience of work with clients</p>
        </div>
      </div>
      <h4 class="relative_h">What Does it Take?</h4>
      <b-button pill size="md" variant="primary" class="relative_btn">
        Become a Choicie partner!
      </b-button>
    </div>
    <div class="absolute d-flex gap-0">
      <b-row class="w-100">
        <b-col cols="8" class="p-0">
          <WaveLine class="w-100" />
        </b-col>
        <b-col cols="4" class="p-0 d-flex position-relative">
          <!-- <b-col> -->
          <VerticalLine class="vertical" />
          <!-- </b-col>
          <b-col> -->
          <DashedLine class="w-100" />
          <EllipseYellow class="position-absolyte ellipse" />
          <!-- </b-col> -->
        </b-col>
      </b-row>
      <!-- <div class="w-100 position-relative wave">
      <WaveLine class="" />
        </div>
        <div>
        <ColorLine class="position-absolute wave__color" />
      </div>
      <div class="w-25 position-relative">
        </div>
        <div>
      </div> -->
    </div>
  </section>
</template>

<script setup lang="ts">
import Qualyty from "../../icons/Qualyty.vue";
import Reputation from "../../icons/Reputation.vue";
import Scan from "../../icons/Scan.vue";
import UserProfile from "../../icons/UserProfile.vue";
import Happy from "../../icons/Happy.vue";
import WaveLine from "../../icons/WaveLine.vue";
import ColorLine from "../../icons/ColorLine.vue";
import VerticalLine from "../../icons/VerticalLine.vue";
import DashedLine from "../../icons/DashedLine.vue";
// import EllipseWhite from "../../icons/EllipseWhite.vue";
import EllipseYellow from "../../icons/EllipseYellow.vue";
</script>

<style scoped lang="scss">
.relative {
  position: relative;
  padding-top: 2rem;
  padding-bottom: 22rem;
  background-color: transparent;
  background-repeat: no-repeat, no-repeat;
  background-position: 0em 20em, 0em 21em;
  background-size: 70% 70%, 70% 70%;

  &_h {
    margin-top: 3rem;
  }

  &_btn {
    width: 19rem;
    height: 3.2rem;
    margin-top: 2.3rem;
  }
}

.absolute {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: -22em;
  left: 0em;
  background-repeat: no-repeat, no-repeat;
  background-position: 62em 18em, 62em 27em;
  background-size: 30% 20%, auto 70%;
  // z-index: -1;
}

.wave {
  &__wave {
    width: 100%;
    bottom: 2%;
    left: 0;
  }

  &__color {
    width: 100%;
    bottom: 0;
    left: 0;
  }

  &__vertical {
    // height: 55%;
    bottom: -8%;
    left: 0;
  }

  &__dashed {
    width: 100%;
    bottom: 62%;
    right: 0;
  }
}

.vertical {
  height: 50%;
  margin-top: 100px;
}

.ellipse {
  top: 0;
  left: 100%;
}
</style>
