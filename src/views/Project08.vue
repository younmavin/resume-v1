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
        <h5>한국중부발전</h5>
        <h1 class="tit"><span>중부가족</span> 웹진</h1>
        <a class="btn-link" href="https://komipo-webzine.co.kr/page/vol25/index.html" target="_blank">
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
          <p>마크업 및 애니메이션</p>
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
            <img src="https://mavin-resume.s3.ap-southeast-2.amazonaws.com/project08_01.png" alt="메인 화면" />
          </div>
          <p><span>FullPage Scroll</span>로 제작했고, 전체적인 마크업 및 인터랙션과 애니메이션 디테일에 신경 써 작업했습니다.</p>
          <a class="btn-link" href="https://komipo-webzine.co.kr/page/vol25/index.html" target="_blank">
            <span>페이지 바로가기</span>
            <span class="ico"><img src="https://mavin-resume.s3.ap-southeast-2.amazonaws.com/icons/ico_arrow_right.png" alt="오른쪽 화살표 아이콘" /></span>
          </a>
        </dd>
        <dd>
          <h6>이벤트 페이지</h6>
          <div class="img-bx">
            <img src="https://mavin-resume.s3.ap-southeast-2.amazonaws.com/project08_02.png" alt="메인 화면" />
          </div>
          <p>Java Script 이벤트핸들링으로 숨은그림 찾기 미니게임을 구현했습니다.</p>
          <a class="btn-link" href="https://komipo-webzine.co.kr/page/vol25/event.html" target="_blank">
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
