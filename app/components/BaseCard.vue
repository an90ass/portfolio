<template>
  <div
    class="card-base relative group cursor-pointer overflow-hidden"
    :class="[sizeClass, hoverClass]"
    @mouseenter="tilting = true"
    @mouseleave="resetTilt"
    @mousemove="onMouseMove"
    :style="tiltStyle"
  >
    <!-- Optional gradient overlay -->
    <div v-if="gradient"
         class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
         :class="gradient" />

    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = withDefaults(defineProps<{
  size?: 'sm' | 'md' | 'lg'
  tilt?: boolean
  gradient?: string
}>(), {
  size: 'md',
  tilt: true,
})

const sizeClass = computed(() => ({
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}[props.size]))

const hoverClass = 'hover:border-accent-blue/30 hover:shadow-card-hover transition-all duration-300'

const tilting = ref(false)
const tiltX = ref(0)
const tiltY = ref(0)

const tiltStyle = computed(() => {
  if (!props.tilt || !tilting.value) return {}
  return {
    transform: `perspective(1000px) rotateX(${tiltY.value}deg) rotateY(${tiltX.value}deg) translateZ(4px)`,
    transition: 'transform 0.15s ease-out',
  }
})

function onMouseMove(e: MouseEvent) {
  if (!props.tilt) return
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const cx = rect.width / 2
  const cy = rect.height / 2
  tiltX.value = ((x - cx) / cx) * 6
  tiltY.value = -((y - cy) / cy) * 6
}

function resetTilt() {
  tilting.value = false
  tiltX.value = 0
  tiltY.value = 0
}
</script>
