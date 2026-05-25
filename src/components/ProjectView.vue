<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const projects = [
  {
    id: 1,
    company: 'TS 한국교통안전공단',
    tit: 'TS 매거진',
    desc: 'GSAP 스크롤 트리거 및 웹 전체 마크업',
    img: 'https://mavin-resume.s3.ap-southeast-2.amazonaws.com/project01.jpg',
    route: 'Project01',
  },
  {
    id: 2,
    company: '사학연금',
    tit: '사학연금',
    desc: '웹 전체 마크업 및 애니메이션 구현',
    img: 'https://mavin-resume.s3.ap-southeast-2.amazonaws.com/project02.jpg',
    route: 'Project02',
  },
  {
    id: 3,
    company: '서울특별시의회',
    tit: '서울의회',
    desc: '웹 전체 마크업 및 애니메이션 구현',
    img: 'https://mavin-resume.s3.ap-southeast-2.amazonaws.com/project03.jpg',
    route: 'Project03',
  },
  {
    id: 4,
    company: '삼구아이앤씨',
    tit: '삼구애',
    desc: 'GSAP 스크롤 트리거 및 Ajax를 사용한 데이터 바인딩',
    img: 'https://mavin-resume.s3.ap-southeast-2.amazonaws.com/project04.jpg',
    route: 'Project04',
  },
  {
    id: 5,
    company: '도로교통공단',
    tit: '신호등',
    desc: '웹 전체 마크업 및 애니메이션 구현',
    img: 'https://mavin-resume.s3.ap-southeast-2.amazonaws.com/project05.jpg',
    route: 'Project05',
  },
  {
    id: 6,
    company: '한국철도공사',
    tit: '레일로',
    desc: '웹 전체 마크업 및 애니메이션 구현',
    img: 'https://mavin-resume.s3.ap-southeast-2.amazonaws.com/project06.jpg',
    route: 'Project06',
  },
  {
    id: 7,
    company: '방위사업청',
    tit: '청아람',
    desc: '웹 전체 마크업 + 애니메이션 및 이벤트 페이지 핸들링',
    img: 'https://mavin-resume.s3.ap-southeast-2.amazonaws.com/project07.jpg',
    route: 'Project07',
  },
  {
    id: 8,
    company: '한국중부발전',
    tit: '중부가족',
    desc: '웹 전체 마크업 + 애니메이션 및 이벤트 페이지 핸들링',
    img: 'https://mavin-resume.s3.ap-southeast-2.amazonaws.com/project08.jpg',
    route: 'Project08',
  },
  {
    id: 9,
    company: '공무원연금공단',
    tit: '공무원연금',
    desc: '풀페이지 스크롤 및 SEO최적화 마크업',
    img: 'https://mavin-resume.s3.ap-southeast-2.amazonaws.com/project09.jpg',
    route: 'Project09',
  },
  {
    id: 10,
    company: '용산구청',
    tit: '용산구소식',
    desc: '웹 전체 마크업 및 애니메이션 구현',
    img: 'https://mavin-resume.s3.ap-southeast-2.amazonaws.com/project10.jpg',
    route: 'Project10',
  },
  {
    id: 11,
    company: '한국해양안전교통공단',
    tit: '해안선',
    desc: '웹 전체 마크업 및 애니메이션 구현',
    img: 'https://mavin-resume.s3.ap-southeast-2.amazonaws.com/project11.jpg',
    route: 'Project11',
  },
  {
    id: 12,
    company: '고용노동부',
    tit: '월간내일',
    desc: '웹 전체 마크업 및 애니메이션 구현',
    img: 'https://mavin-resume.s3.ap-southeast-2.amazonaws.com/project12.jpg',
    route: 'Project12',
  },
  {
    id: 13,
    company: '지방공기업평가원',
    tit: '지방공공기관',
    desc: '웹 전체 마크업',
    img: 'https://mavin-resume.s3.ap-southeast-2.amazonaws.com/project13.jpg',
    route: 'Project13',
  },
  {
    id: 14,
    company: '프로스포츠협회',
    tit: '프로스뷰',
    desc: '웹 전체 마크업',
    img: 'https://mavin-resume.s3.ap-southeast-2.amazonaws.com/project14.jpg',
    route: 'Project14',
  },
  {
    id: 15,
    company: '한국감정평가사협회',
    tit: '감정평가',
    desc: '웹 전체 마크업',
    img: 'https://mavin-resume.s3.ap-southeast-2.amazonaws.com/project15.jpg',
    route: 'Project15',
  },
  {
    id: 16,
    company: '서울대학교',
    tit: '서울대사람들',
    desc: '웹 전체 디자인 및 마크업',
    img: 'https://mavin-resume.s3.ap-southeast-2.amazonaws.com/project16.jpg',
    route: 'Project16',
  },
  {
    id: 17,
    company: 'VAEX',
    tit: '벡스',
    desc: '웹 전체 디자인 및 마크업',
    img: 'https://mavin-resume.s3.ap-southeast-2.amazonaws.com/project17.jpg',
    route: 'Project17',
  },
  {
    id: 18,
    company: 'THINK BLOCK',
    tit: '씽크블락',
    desc: '웹 전체 디자인 및 마크업, 일어 번역',
    img: 'https://mavin-resume.s3.ap-southeast-2.amazonaws.com/project18.jpg',
    route: 'Project18',
  },
]

const hasVisited = sessionStorage.getItem('portfolio-loaded')
const savedGrid = sessionStorage.getItem('portfolio-grid')

const gridCount = ref(savedGrid ? Number(savedGrid) : 3)

const visibleCount = ref(hasVisited ? projects.length : 3)

const loading = ref(false)
const sentinel = ref(null)

const visibleProjects = computed(() => {
  return projects.slice(0, visibleCount.value)
})

const changeGrid = () => {
  gridCount.value = gridCount.value === 3 ? 4 : 3

  // grid 저장
  sessionStorage.setItem('portfolio-grid', gridCount.value)
}

const handleBeforeUnload = () => {
  // 새로고침 시 초기화
  sessionStorage.removeItem('portfolio-loaded')
  sessionStorage.removeItem('portfolio-grid')
}

onMounted(() => {
  window.addEventListener('beforeunload', handleBeforeUnload)

  // 이미 한번 방문했으면 전체 표시
  if (hasVisited) return

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        if (loading.value) return
        if (visibleCount.value >= projects.length) return

        loading.value = true

        setTimeout(() => {
          visibleCount.value += gridCount.value

          // 전체 로딩 완료 시 저장
          if (visibleCount.value >= projects.length) {
            sessionStorage.setItem('portfolio-loaded', 'true')
          }

          loading.value = false
        }, 400)
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: '100px',
    },
  )

  if (sentinel.value) {
    observer.observe(sentinel.value)
  }
})

onUnmounted(() => {
  window.removeEventListener('beforeunload', handleBeforeUnload)
})
</script>

<template>
  <dl class="type02 scroll-ani">
    <dt><span>포트폴리오</span></dt>

    <dd>
      <div>
        주로 <span>웹진 사이트</span>를 제작했고, 모든 웹진은 <span>마크업 100%</span>,
        <span>디자인 20%(서브페이지)</span>
        참여 했으며, 제작기간은 <span>7일~10일</span> 입니다.
      </div>
    </dd>
  </dl>

  <button class="btn-grid" @click="changeGrid">
    <span class="ico"> <img src="https://mavin-resume.s3.ap-southeast-2.amazonaws.com/icons/ico_grid.png" alt="레이아웃 아이콘" /></span>
    <span> {{ gridCount === 3 ? '작게 보기' : '크게 보기' }}</span>
  </button>

  <div class="card-wrap scroll-ani">
    <div class="card-inner" :class="{ four: gridCount === 4 }">
      <router-link v-for="project in visibleProjects" :key="project.id" :to="{ name: project.route }" class="card-item">
        <div class="img-bx">
          <img :src="project.img" :alt="project.tit" loading="lazy" />
        </div>

        <hgroup>
          <h6>{{ project.company }}</h6>

          <h4>{{ project.tit }}</h4>

          <p>{{ project.desc }}</p>

          <h5>
            작업내용 보기

            <span class="ico">
              <img src="https://mavin-resume.s3.ap-southeast-2.amazonaws.com/icons/ico_arrow_right.png" alt="오른쪽 화살표 아이콘" />
            </span>
          </h5>
        </hgroup>
      </router-link>
    </div>
  </div>

  <div v-if="loading" class="loader-wrap">
    <div class="line-loader">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <!-- observer trigger -->
  <div ref="sentinel"></div>
</template>
