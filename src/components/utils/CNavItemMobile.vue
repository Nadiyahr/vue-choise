<template>
  <b-nav-item
    align="center"
    :to="linkPath"
    class="border-bottom border-light"
    @click="$emit('toggle')"
  >
    {{ $t(`General.${linkName}`) }}
  </b-nav-item>
</template>

<script setup lang="ts">
import { computed } from 'vue';
interface Props {
  linkName: string;
  isHreaf?: boolean;
}

const { linkName, isHreaf = false } = defineProps<Props>();

const linkPath = computed(() => {
  const link = linkName.toLowerCase();

  if (isHreaf) return `#${link}`;
  if (link === 'home') return '/';

  return `/${link}`;
});
</script>
