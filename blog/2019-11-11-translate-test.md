---
title: 내집마련 해커톤 참여 후기
description: 내집마련 해커톤'을 통한 개인 블로그 제작 과정 소개
date: 2019-09-21T00:00:00+09:00
lastmod: 2019-09-21T00:00:00+09:00
slug: hackerton_myhome
authors: [minho]
tags: [hackerton]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---

# 내집마련 해커톤 참여 후기

## **해커톤**

### 해커톤 소개

- 목적

[내집마련 해커톤](https://www.notion.so/be735a45ff444a48bd4a23a0a299e2e5)은 기존 블로깅 플랫폼([네이버 블로그](https://section.blog.naver.com/BlogHome.nhn/), [티스토리](https://www.tistory.com/), [이글루](http://www.egloos.com) 등)에서 벗어나, 개인이 홈페이지를 구축하고 서비스 할 수 있는 내 집(블로그)를 구축 및 개선하는 해커톤이다.

따라서 팀을 구성해도 되고 기존에 자신이 운영하시는 개인 블로그가 있는 참가자들은 기존 블로그를 개선하거나 블로그 플러그인, CMS 등을 개발해도 무관하였다.

- 장소 및 일시

내집마련 해커톤은 2019년 09월 21일 토요일 10:30 ~ 20:00 까지 삼성동 아셈타워의 [하이퍼커넥트](https://hyperconnect.com/)에서 진행되었다.

- 주최
  - [GODORI](https://github.com/godori) from [post-a-week](https://github.com/post-a-week/blog)


### 해커톤 참여 계기
해커톤 참여 계기는 당연하겠지만 내 집(이하 블로그)을 만들기 위해서 참여하게 되었다.

본 해커톤에서 블로그를 만들기 이전에 [지킬](https://jekyllrb-ko.github.io/)과 [Github](https://github.com/)로 구성된 블로그 사이트를 구축하여 보았었다. 하지만 항상 마감에 쫒기는 프로젝트들과 자격증 공부와 병행하여 [Ruby](https://www.ruby-lang.org/) 언어를 익히고, 지킬 구조를 파악하기엔 조금 버거웠다.

그래서 Ruby가 아닌 JAVA 기반으로 구축된 플랫폼을 찾아보기 시작했고, 그 중 눈에 띈것은 [Gatsby](http://gatsbyjs.org/)와 [Vuepress](https://vuepress.vuejs.org/)이였다. 그러던 와중에 [AsciiDoc](https://asciidoctor.org/) 이라는 마크업(Markup languages)를 발견했고, AsciiDoc의 파일 변환시 docx, PDF 등 여러 형식을 지원하는 장점에 이끌렸다.

AsciiDoc을 지원하는 여러 템플릿 엔진을 찾던 중 관련된 블로그 구축 글__([정적 사이트로 블로그 마이그레이션 - 정상혁](https://blog.benelog.net/migration-to-static-site.html))__을 발견하였고, 이 글에서 사용한 [JBake](https://jbake.org/)를 최종으로 체택하였다.


AsciiDoc 관련 링크 ::
- [Asciidoc 기본 사용법](https://narusas.github.io/2018/03/21/Asciidoc-basic.html)
- [아스키독(Asciidoc) 기반으로 책쓰기 템플릿](http://honeymon.io/tech/2018/02/27/asiidoc-book-template.html)



### 개인 블로그 제작 목적
내가 블로그를 개설하는 이유는 크게 3가지 이다.

- 공부내용 정리

기존에 공부를 해도 어딘가에 기록해 놓지 않아서, 학습할 당시에는 기억에 잘 남지만 조금만 시간이 지나도 잘 잊어버렸다. 그래서 공부했던 내용을 정리해둠으로써 복습을 함과 더불어 시간이 흐른뒤에도 내용을 보고 조금이나마 빨리 공부했었던 내용을 떠올리기 위함이다.

- 포트폴리오 정리

내가 했었던 프로젝트나 공부를 시간이 흐른뒤 특정 시점에 내가 무엇을 했는지 알기란 쉽지않았다. 그래서 본 블로그에 관련된 내용을 기록해 둠으로써 내가 언제 무엇을 해왔었는지 알기 위함이다.

- 글쓰기 연습

석사과정을 다닐 때 글 쓰는 능력이 많이 부족하다고 느꼈다. 내가 생각하는 것을 다른 사람에서 글로써 전달하는 것과 글을 논리적으로 풀어 나가야하는데 이 부부이 어렵게 느껴진다. 만약이지만 언젠가 내가 책을 집필한다던지, 박사과정을 밟는 등의 기회가 왔을 때 글을 잘 작성할 수 있다면, 막연하지만 그 기회를 잘 살릴 수 있지 않을까 생각한다.




### 해커톤 참여 소감
그 동안 바쁘다는 핑계로 미뤄왔던 개인 블로그 제작을 본 해커톤을 통해 완성을하여 기쁘다.

토요일 너무 이르지 않은 오전 10:30 부터 시작하여 너무 늦지 않은 오후 20:00 까지 진행된 해커톤으로 바쁜 직장인에게도 무리가 가지 않는 해커톤이었다고 생각한다.

언제가 될지는 모르겠지만 내집마련 해커톤 2차가 열리면, 해커톤에 다시 참가하여 본 블로그에서 개선하고 싶었던 부분을 보수하는 작업을 하고 싶다.



## **내 집 마련 과정**

본 블로그는 [개발 수양록 블로그의 정상혁님이 작성하신 글](https://blog.benelog.net/migration-to-static-site.html)을 그대로 따라서 진행하였다.

### 서비스 환경
- 정적 사이트 생성 플랫폼 : [JBake](https://jbake.org/)
- 컨텐츠 저장소 : GitHub
- 빌드 및 배포 : [Netlify(Ubuntu 14.04)](https://www.netlify.com/), [Travis CI(Ubuntu 14.04)](https://travis-ci.org/)
- 방문자 통계 집계 : [Google Analytics](https://analytics.google.com/analytics/web/)

### 구축 순서
. 블로그 레파지토리 fork
. fork 한 레파지토리의 소스를 나에게 맞게 변경
* travis 생성 및 연동
* Google Analytics 생성 및 연동
. netlify 생성 및 git 내 fork 한 레파지토리 연동


### 구축간 특이사항
초기에 travis 나 netlify 에서 빌드 할 때 에러가 발생하여, ubuntu 버전을 16.04 -> 14.04로 내려서 빌드를 하였다.
travis는 *.travis.yml* 파일에 'dist: trusty' 코드를 추가하였고, netlify 에서는 *Setting - Build & deploy* 메뉴에서 'Build image selection' 에서 수정하였다. _(netlify는 16.04 버전에서 정상동작하여 기존 14.04 -> 16.04 로 다시 변경하였다.)_

빌드 및 배포를 Netlify와 Travis CI 두군데에서 하고 있기 때문에 본 블로그는 아래 두개의 주소로 접근 할 수 있다.

* https://anew0m.netlify.com - Netlify
* https://anew0m.github.io/blog/ - Travis CI

끝.