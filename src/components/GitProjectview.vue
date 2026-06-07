<script setup>
import { ref, onMounted } from 'vue'

const repos = ref([])
const loading = ref(false)
const error = ref('')

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' })
}

onMounted(async () => {
  loading.value = true
  try {
    const res = await fetch('https://api.github.com/users/younmavin/repos?sort=updated&per_page=30')
    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)
    repos.value = await res.json()
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <dl class="type02 scroll-ani">
    <dt><span>미니 프로젝트</span></dt>
    <dd>
      <ul class="list-git">
        <li v-if="loading">불러오는 중...</li>
        <li v-else-if="error">{{ error }}</li>
        <li v-for="repo in repos" :key="repo.id" v-else>
          <a :href="repo.html_url" target="_blank" rel="noopener">
            <div>
              <h5>{{ repo.name }}</h5>
              <p v-if="repo.description">{{ repo.description }}</p>
              <p>
                <span v-if="repo.language">주요 언어 : {{ repo.language }}</span>
                <span class="date">최근 업데이트 : {{ formatDate(repo.updated_at) }}</span>
              </p>
            </div>
            <div class="ico">
              <img src="https://mavin-resume.s3.ap-southeast-2.amazonaws.com/icons/ico_arrow_right02.png" alt="" />
            </div>
          </a>
        </li>
      </ul>
    </dd>
  </dl>
</template>
