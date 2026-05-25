<script setup>
import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue'

defineProps({
  show: Boolean,
})

defineEmits(['scrollTop'])

const isAsideOpen = ref(false)

const handleCloseAside = () => {
  isAsideOpen.value = false
}

const toggleAside = async () => {
  isAsideOpen.value = !isAsideOpen.value

  const aside = document.querySelector('aside')

  if (!aside) return

  aside.classList.toggle('on', isAsideOpen.value)

  // 열릴 때 스크롤 초기화
  if (isAsideOpen.value) {
    await nextTick()

    requestAnimationFrame(() => {
      aside.scrollTop = 0
    })
  }
}

// 스크롤 락
watch(isAsideOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('closeAside', handleCloseAside)
})

onUnmounted(() => {
  window.removeEventListener('closeAside', handleCloseAside)
})
</script>

<template>
  <transition name="top-btn">
    <div v-if="show" class="btn-util-wrap">
      <router-link to="/" class="btn-home btn">
        <span class="ico">
          <img src="@/assets/images/icons/ico_home.png" alt="홈 아이콘" />
        </span>

        <span>홈으로</span>
      </router-link>

      <button class="btn-user btn" @click="toggleAside">
        <span class="ico">
          <img src="@/assets/images/icons/ico_user.png" alt="유저 아이콘" />
        </span>

        <span>정보보기</span>
      </button>

      <button class="btn-top btn" @click="$emit('scrollTop')">
        <span class="ico">
          <img src="@/assets/images/icons/ico_arrow_top.png" alt="화살표 아이콘" />
        </span>

        <span>맨위로</span>
      </button>
    </div>
  </transition>
</template>
