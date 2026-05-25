import { watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'

let observer = null

const initScrollAnimation = () => {
  const elements = document.querySelectorAll('.scroll-ani')

  if (!elements.length) return

  if (observer) {
    observer.disconnect()
  }

  elements.forEach((el) => {
    el.classList.remove('show')
  })

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    },
    {
      threshold: 0.15,
    },
  )

  elements.forEach((el) => {
    observer.observe(el)
  })
}

export function useScrollAnimation(introEnd) {
  const route = useRoute()

  // 인트로 종료 후 실행
  watch(introEnd, async (val) => {
    if (val) {
      await nextTick()

      setTimeout(() => {
        initScrollAnimation()
      }, 50)
    }
  })

  // 페이지 이동 시 재실행
  watch(
    () => route.path,
    async () => {
      if (!introEnd.value) return

      await nextTick()

      setTimeout(() => {
        initScrollAnimation()
      }, 50)
    },
  )
}
