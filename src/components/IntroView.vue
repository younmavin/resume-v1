<script setup>
import { onMounted, ref } from 'vue'

const emit = defineEmits(['finish'])

const hide = ref(false)

onMounted(() => {
  document.body.style.overflow = 'hidden'

  // 슬라이드 업
  setTimeout(() => {
    hide.value = true
  }, 2200)

  // 제거
  setTimeout(() => {
    document.body.style.overflow = ''
    emit('finish')
  }, 3200)
})
</script>

<template>
  <div class="intro" :class="{ hide }">
    <div class="loader-wrap">
      <p class="txt">
        LOADING
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </p>
      <div class="line"></div>
    </div>
  </div>
</template>
