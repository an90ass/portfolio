// Re-export vueuse/motion helpers with sensible defaults for the portfolio
export const motionPresets = {
  fadeUp: {
    initial: { opacity: 0, y: 24 },
    enter:   { opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } },
  },
  fadeIn: {
    initial: { opacity: 0 },
    enter:   { opacity: 1, transition: { duration: 500 } },
  },
  slideLeft: {
    initial: { opacity: 0, x: -20 },
    enter:   { opacity: 1, x: 0, transition: { duration: 500 } },
  },
} as const
