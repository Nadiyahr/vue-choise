import { useBreakpoints } from '@vueuse/core';

export const breakpoints = useBreakpoints({
  mobile: 320,
  tablet: 640,
  laptop: 1024,
  desktop: 1280,
});

export default useBreakpoints;
