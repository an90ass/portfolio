import { ref, onMounted, onUnmounted } from 'vue'

// Shared singleton mouse state
const mouseX = ref(0)
const mouseY = ref(0)
const normalizedX = ref(0) // -1 to 1
const normalizedY = ref(0) // -1 to 1

let listeners = 0

function onMouseMove(e: MouseEvent) {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
  normalizedX.value = (e.clientX / window.innerWidth) * 2 - 1
  normalizedY.value = (e.clientY / window.innerHeight) * 2 - 1
}

export function useMouse() {
  onMounted(() => {
    if (listeners === 0) window.addEventListener('mousemove', onMouseMove, { passive: true })
    listeners++
  })
  onUnmounted(() => {
    listeners--
    if (listeners === 0) window.removeEventListener('mousemove', onMouseMove)
  })

  return { mouseX, mouseY, normalizedX, normalizedY }
}
