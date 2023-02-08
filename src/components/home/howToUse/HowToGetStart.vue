<template>
  <div class="d-flex gap-5 align-items-center px-3 px-lg-0">
    <svg class="icon icon--apps">
      <use
        href="/src/assets/icons/icons_list.svg#apps"
        width="22"
        height="24"
        viewBox="0 0 24 24"
      ></use>
    </svg>
    <p>{{ $t('Home.No language barrier') }}</p>
  </div>
  <div class="d-flex gap-5 align-items-center px-3 px-lg-0">
    <svg class="icon icon--language">
      <use
        href="/src/assets/icons/icons_list.svg#language"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      ></use>
    </svg>
    <p>{{ $t('Home.No need to search for reviews — all collected in one place') }}</p>
  </div>
  <div class="d-flex gap-5 align-items-center px-3 px-lg-0">
    <svg class="icon icon--alien">
      <use
        href="/src/assets/icons/icons_list.svg#alien"
        width="24"
        height="24"
        viewBox="0 0 24 30"
        fill="#beb79b"
      ></use>
    </svg>
    <p>{{ $t('Home.No need to install any translator — all you need is Choicie') }}</p>
  </div>
  <div class="p-2 mt-4 lg-mt-5 lg-ps-5">
    <b-button pill size="md" variant="secondary" class="w-btn">{{
      $t('Home.Get Started')
    }}</b-button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.icon {
  display: inline-block;

  &--apps {
    width: 24px;
    height: 36px;
    margin-right: 4px;

    @media (max-width: 601px) {
      margin-right: 8px;
    }
  }

  &--alien {
    width: 44px;
    height: 40px;
  }

  &--language {
    width: 44px;
    height: 28px;
  }
}
</style>
