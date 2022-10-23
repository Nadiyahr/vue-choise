<script lang="ts">
import { defineComponent } from "vue";
import HeaderDesctop from "./HeaderDesctop.vue";
import HeaderMobile from "./HeaderMobile.vue";

export default defineComponent({
  name: "Header",
  components: {
    HeaderDesctop,
    HeaderMobile,
  },
  data() {
    return {
      windowWidth: window.innerWidth as number,
      success: false,
      mobile: 600 as number,
    };
  },
  mounted() {
    window.onresize = (): void => {
      this.windowWidth = window.innerWidth;
    };
  },
  methods: {
    isDesktop(): boolean {
      const isDesck = this.windowWidth > this.mobile;
      return isDesck;
    },
  },
});
</script>

<template>
  <div>
    <HeaderDesctop v-if="isDesktop()" />
    <HeaderMobile v-else />
  </div>
</template>
