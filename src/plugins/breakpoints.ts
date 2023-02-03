import { computed, onMounted, onUnmounted, ref } from 'vue'

export const useBreakpoints = () => {
  let windowWidth = ref(window.innerWidth)

  const onWidthChange = () => windowWidth.value = window.innerWidth
  onMounted(() => window.addEventListener('resize', onWidthChange))
  onUnmounted(() => window.removeEventListener('resize', onWidthChange))
  
  const type = computed(() => {
    if (windowWidth.value < 600) return 'sm'
    if (windowWidth.value >= 600 && windowWidth.value < 900) return 'md'
    if (windowWidth.value >= 900) return 'lg'
    return null; // This is an unreachable line, simply to keep eslint happy.
  })

  const width = computed(() => windowWidth.value)

  const isMobile = computed(() => windowWidth.value < 600)
  const isTablet = computed(() => windowWidth.value >= 600 && windowWidth.value < 900)
  const isDesktop = computed(() => windowWidth.value >= 900)

  return { width, type, isDesktop, isMobile, isTablet }
}

