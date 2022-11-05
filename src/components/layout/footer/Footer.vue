<template>
  <footer
    class="bg-dark footer__position text-light"
    style="background-image: url('images/cover.png')"
  >
    <b-row class="px-2">
      <b-col xs="12" md="12" lg="4" class="pb-4 footer__brand">
        <div
          class="fs-4 lg-fs-3 text-light fw-bolder d-flex flex gap-4 align-items-center"
        >
          <Alien :svgColor="'#f2cf7e'" />
          CHOICIE
        </div>
        <p class="fs-7">You know what you choose!</p>
      </b-col>
      <b-col class="pb-4 fs-5 text ps-2">
        <b-nav-item href="#"><p>Home</p></b-nav-item>
        <b-nav-item href="#"><p>Universal Menu</p></b-nav-item>
        <b-nav-item href="#howTo"><p>How do use</p></b-nav-item>
        <b-nav-item href="#map"><p>Growth Factor</p></b-nav-item>
        <b-nav-item href="#contact"><p>Contact</p></b-nav-item>
        <b-nav-item href="#"><p>Privacy Policy</p></b-nav-item>
      </b-col>
      <b-col class="ps-5 fs-5 text">
        <b-nav-item target="_blank" href="https://www.facebook.com/"
          ><p>Facebook</p></b-nav-item
        >
        <b-nav-item target="_blank" href="https://twitter.com/i/flow/login"
          ><p>Twitter</p></b-nav-item
        >
        <b-nav-item target="_blank" href="https://www.instagram.com/"
          ><p>Instagram</p></b-nav-item
        >
        <b-nav-item
          target="_blank"
          href="https://www.linkedin.com/in/nadiya-hrabchenko-78ba89205/?locale=en_US"
          ><p>LinkedIn</p></b-nav-item
        >
      </b-col>
      <b-col id="contact" xs="12" md="4" class="footer__form">
        <b-form @submit="onClick" @reset="" class="text-ligth">
          <Input v-model="data.name" placeholder="Name" />
          <Input v-model="data.email" placeholder="Email" />
          <Input v-model="data.text" placeholder="Enter Text" />
          <b-button pill type="submit" variant="secondary" class="w-100"> Send </b-button>
        </b-form>
      </b-col>
    </b-row>
  </footer>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import Alien from "@/components/icons/AlienIcon.vue";
import Input from "@/components/utils/Input.vue";

const data = reactive({
  name: "",
  email: "",
  text: "",
});

const onClick = () => {
  data.name = "";
  data.email = "";
  data.text = "";
};
</script>

<style scoped lang="scss">
.footer {
  &__position {
    padding-top: 4.2rem;
    padding-bottom: 4.2rem;
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: 400px;
  }

  &__form {
    padding: 0 2rem;

    @media (max-width: 900px) and (min-width: 601px) {
      padding: 0 0.5rem;
    }
  }
}
</style>
