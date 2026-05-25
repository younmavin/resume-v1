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
        <h5>공무원연금공단</h5>
        <h1 class="tit"><span>공무원연금</span> 웹진</h1>
        <a class="btn-link" href="https://webzineplace.co.kr/remote/service/geps/vol01/index.html" target="_blank">
          <span>사이트 바로가기</span>
          <span class="ico"><img src="https://mavin-resume.s3.ap-southeast-2.amazonaws.com/icons/ico_arrow_right.png" alt="오른쪽 화살표 아이콘" /></span>
        </a>
      </hgroup>
      <ol class="type03 scroll-ani">
        <li>
          <h6><span>01. </span>사용 스킬</h6>
          <p>HTML / CSS / JavaScript</p>
        </li>
        <li>
          <h6><span>02. </span>참고사항</h6>
          <p>SEO 최적화 마크업</p>
        </li>
      </ol>
    </div>
  </article>
  <article class="sec02 sec">
    <div class="sec-inner">
      <dl class="type02 scroll-ani">
        <dt><span>작업내용</span></dt>
        <dd>
          <div class="img-bx">
            <img src="https://mavin-resume.s3.ap-southeast-2.amazonaws.com/project09_01.png" alt="메인 화면" />
          </div>
          <p><span>FullPage Scroll</span>로 제작했고, SEO 최적화를 고려해 마크업 구조를 세심하게 설계했습니다.</p>
          <a class="btn-link" href="https://webzineplace.co.kr/remote/service/geps/vol01/index.html" target="_blank">
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
