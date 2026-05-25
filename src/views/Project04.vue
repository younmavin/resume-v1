<script setup>
import Project from '@/components/ProjectView.vue'
</script>

<template>
  <article class="sec01 sec">
    <div class="sec-inner">
      <router-link to="/" class="btn-home">
        <span class="ico"> <img src="https://mavin-resume.s3.ap-southeast-2.amazonaws.com/icons/ico_home.png" alt="홈 아이콘" /></span> 홈으로 가기
      </router-link>
      <hgroup class="tit-bx">
        <h5>삼구아이앤씨</h5>
        <h1 class="tit"><span>삼구애</span> 웹진</h1>
        <a class="btn-link" href="https://webzine.samkoo.com/page/vol25/index.html" target="_blank">
          <span>사이트 바로가기</span>
          <span class="ico"><img src="https://mavin-resume.s3.ap-southeast-2.amazonaws.com/icons/ico_arrow_right.png" alt="오른쪽 화살표 아이콘" /></span>
        </a>
      </hgroup>
      <ol class="type03 scroll-ani">
        <li>
          <h6><span>01. </span>사용 스킬</h6>
          <p>HTML / CSS / JavaScript / GSAP / Ajax</p>
        </li>
        <li>
          <h6><span>02. </span>참고사항</h6>
          <p>마크업 및 애니메이션, 비동기 통신</p>
        </li>
      </ol>
    </div>
  </article>
  <article class="sec02 sec">
    <div class="sec-inner">
      <dl class="type02 scroll-ani">
        <dt><span>작업내용</span></dt>
        <dd>
          <h6>메인 페이지</h6>
          <div class="img-bx">
            <img src="https://mavin-resume.s3.ap-southeast-2.amazonaws.com/project04_01.png" alt="메인 화면" />
          </div>
          <p><span>GSAP, JavaScript</span>를 활용해 동적인 인터랙션과 애니메이션을 구현했습니다.</p>
          <a class="btn-link" href="https://webzine.samkoo.com/page/vol25/index.html" target="_blank">
            <span>페이지 바로가기</span>
            <span class="ico"><img src="https://mavin-resume.s3.ap-southeast-2.amazonaws.com/icons/ico_arrow_right.png" alt="오른쪽 화살표 아이콘" /></span>
          </a>
        </dd>
        <dd>
          <h6>이벤트 페이지</h6>
          <div class="img-bx">
            <img src="https://mavin-resume.s3.ap-southeast-2.amazonaws.com/project04_02.png" alt="메인 화면" />
          </div>
          <p><span>Ajax</span>를 활용해 참가자 데이터를 받아와 퍼센트를 계산하여 좌측 민들레가 채워지도록 구현했습니다.</p>
          <a class="btn-link" href="https://webzine.samkoo.com/page/vol25/20.html" target="_blank">
            <span>페이지 바로가기</span>
            <span class="ico"><img src="https://mavin-resume.s3.ap-southeast-2.amazonaws.com/icons/ico_arrow_right.png" alt="오른쪽 화살표 아이콘" /></span>
          </a>
        </dd>
      </dl>
    </div>
  </article>
  <article class="sec03 sec project-sec">
    <div class="sec-inner">
      <Project />
    </div>
  </article>
</template>
