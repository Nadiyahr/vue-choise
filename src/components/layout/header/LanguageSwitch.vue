<template>
  <b-form-select
    v-model="$i18n.locale"
    :options="languages"
    class="my-select"
    @input="$emit('on-input')"
    :class="{
      mobile: props.isMobile,
      main: props.isMain,
      secondary: !props.isMain && !props.isMobile,
    }"
  ></b-form-select>
</template>

<script setup lang="ts">
const props = defineProps({
  isMain: {
    type: Boolean,
    default: false,
  },
  isMobile: {
    type: Boolean,
    default: false,
  },
});
const languages = ['en', 'it', 'ua'];
</script>

<style scoped lang="scss">
.form-select.my-select {
  font-size: 14px;
  font-weight: 600;
  padding-right: 0;
  margin-left: 20px;
  margin-top: 3px;
  line-height: 18px;
  background-image: url('../icons/chevron-white.svg');
  background-position: 90% 55%;
  background-size: 10px 10px, 10px 10px;
  background-repeat: no-repeat;
  border: none;
  color: $white;
  outline: none !important;
  text-transform: uppercase;

  &:focus {
    border: 1px solid;
    border-radius: 0;
    outline: none !important;
    outline-width: 0 !important;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
  }
}
.main {
  background-color: $my-dark;
}

.mobile {
  background-color: $my-prymary;
}

.secondary {
  background-color: $my-prymary-2 !important;
  background-image: url('../icons/chevron.svg') !important;
  color: $my-prymary !important;
}
</style>
