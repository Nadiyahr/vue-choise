<script lang="ts">
import HeaderDesctop from './HeaderDesctop.vue'
import HeaderMobile from './HeaderMobile.vue'

export default {
    name: "Header",
    components: {
      HeaderDesctop,
      HeaderMobile
    },
    data() {
        return {
            windowWidth: window.innerWidth as number,
            success: false,
            mobile: 600 as number
        };
    },
    mounted() {
        window.onresize = () => {
            this.windowWidth = window.innerWidth;
        };
    },
    methods: {
        isDesktop(): boolean {
            return this.windowWidth > this.mobile;
        }
    }
}

</script>

<template>
  <div>
    <HeaderDesctop v-if="isDesktop()" />
    <HeaderMobile v-else />
  </div>
</template>
