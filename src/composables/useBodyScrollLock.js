import { watch, onMounted, onUnmounted } from 'vue'

export function useBodyScrollLock(isOpen, introEnd) {
  // 모달 스크롤 락
  watch(isOpen, (val) => {
    if (introEnd.value) {
      document.body.style.overflow = val ? 'hidden' : ''
    }
  })

  // 최초 인트로 스크롤 막기
  onMounted(() => {
    if (!introEnd.value) {
      document.body.style.overflow = 'hidden'
    }
  })

  // 인트로 끝났을 때 스크롤 복구
  watch(introEnd, (val) => {
    if (val && !isOpen.value) {
      document.body.style.overflow = ''
    }
  })

  onUnmounted(() => {
    document.body.style.overflow = ''
  })
}
