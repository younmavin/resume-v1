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
        <h5>지방공기업</h5>
        <h1 class="tit"><span>지방공공기관</span> 웹진</h1>
        <a class="btn-link" href="https://www.erc.re.kr/webzine/vol52/index.jsp" target="_blank">
          <span>사이트 바로가기</span>
          <span class="ico"><img src="https://mavin-resume.s3.ap-southeast-2.amazonaws.com/icons/ico_arrow_right.png" alt="오른쪽 화살표 아이콘" /></span>
        </a>
      </hgroup>
      <ol class="type03 scroll-ani">
        <li>
          <h6><span>01. </span>사용 스킬</h6>
          <p>HTML / CSS / JavaScript / JSP</p>
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
          <div class="img-bx">
            <img src="https://mavin-resume.s3.ap-southeast-2.amazonaws.com/project13_01.png" alt="메인 화면" />
          </div>
          <p>표와 텍스트 스타일을 중점으로 세심하게 마크업 했습니다.</p>
          <a class="btn-link" href="https://www.erc.re.kr/webzine/vol52/04.jsp" target="_blank">
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
