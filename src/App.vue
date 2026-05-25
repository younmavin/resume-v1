<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import InfoView from '@/components/InfoView.vue'
import ContactModal from '@/components/ContactModal.vue'
import IntroView from '@/components/IntroView.vue'
import UtilView from '@/components/UtilView.vue'

import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { useTopButton } from '@/composables/useTopButton'
import { useBodyScrollLock } from '@/composables/useBodyScrollLock'

const isOpen = ref(false)
const introEnd = ref(false)

const openModal = () => {
  isOpen.value = true
}

const closeModal = () => {
  isOpen.value = false
}

// body scroll lock
useBodyScrollLock(isOpen, introEnd)

// top button
const { showTopBtn, scrollToTop } = useTopButton()

// scroll animation
useScrollAnimation(introEnd)

// 인트로 종료
function handleIntroFinish() {
  introEnd.value = true
}

//우클릭 / 드래그 방지
const disableContextMenu = (e) => {
  e.preventDefault()
}

const disableDrag = (e) => {
  e.preventDefault()
}

onMounted(() => {
  document.addEventListener('contextmenu', disableContextMenu)
  document.addEventListener('dragstart', disableDrag)
})

onUnmounted(() => {
  document.removeEventListener('contextmenu', disableContextMenu)
  document.removeEventListener('dragstart', disableDrag)
})
</script>

<template>
  <!-- 인트로 -->
  <IntroView v-if="!introEnd" @finish="handleIntroFinish" />

  <!-- 메인 -->
  <main>
    <section class="container">
      <router-view />

      <UtilView :show="showTopBtn" @scrollTop="scrollToTop" />
    </section>

    <aside>
      <InfoView @open="openModal" />
    </aside>

    <div class="contact" :class="{ on: isOpen }">
      <ContactModal :is-open="isOpen" @close="closeModal" />
    </div>
  </main>
</template>
