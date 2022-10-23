<template>
  <section
    class="relative"
    style="background-image: url('images/waveLine.svg'), url('images/colorLine.svg')"
  >
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
    <section
      class="vw-100 absolute"
      style="
        background-image: url('images/dashedLine.svg'), url('images/verticalLine.svg');
      "
    ></section>
  </section>
</template>

<script setup lang="ts">
import Qualyty from "../../icons/Qualyty.vue";
import Reputation from "../../icons/Reputation.vue";
import Scan from "../../icons/Scan.vue";
import UserProfile from "../../icons/UserProfile.vue";
import Happy from "../../icons/Happy.vue";
</script>

<style scoped lang="scss">
.relative {
  position: relative;
  padding-top: 2rem;
  padding-bottom: 19rem;
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
  height: 100%;
  position: absolute;
  top: 0em;
  left: 0em;
  background-repeat: no-repeat, no-repeat;
  background-position: 62em 18em, 62em 27em;
  background-size: 30% 20%, auto 70%;
  z-index: -1;
}
</style>
