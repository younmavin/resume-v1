import { ref, onMounted, onUnmounted } from 'vue'

export function useTopButton() {
  const showTopBtn = ref(false)

  const handleScroll = () => {
    // 모바일/태블릿은 항상 표시
    if (window.innerWidth <= 1024) {
      showTopBtn.value = true
      return
    }

    // PC는 스크롤 기준
    showTopBtn.value = window.scrollY > 200
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  onMounted(() => {
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleScroll)
  })

  return {
    showTopBtn,
    scrollToTop,
  }
}
