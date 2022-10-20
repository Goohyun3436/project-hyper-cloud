# 프리온보딩 프론트 개인과제 project-hyper-cloud

## 프로젝트 설명

- [하이퍼클라우드 기업사이트](https://hyper-cloud.kr/) 내 콘텐츠를 관리할 수 있는 사이트를 만들어주세요.
- 하이퍼클라우드의 BX팀(a.k.a. 유저)은 기업 사이트에 들어가는 콘텐츠를 개발팀의 도움 없이 수정하고자 합니다.
- 콘텐츠는 기업 소개글과 기업의 소식이 포함된 뉴스, 채용 포지션 등이 있습니다.
- 기업 소개글, 기업의 소식이 포함된 뉴스, 채용 포지션 등을 수정할 수 있는 관리자 페이지가 필요합니다.

  <br/>
  <br/>

## 내가 생각하는 내 앱의 장점과 단점

- 반응형 UI 스타일링에 관심이 많기 때문에 여러가지 경우의 수를 고려하여 구현했습니다.
- 상태관리를 위해 redux를 활용하였습니다.
- 컴포넌트 재사용에 집중하여 코드 재활용도가 높아졌지만 시간적 제약에 의해 많은 기능을 구현하지 못한 점이 아쉽습니다.

  <br/>
  <br/>

## 언어

- JavaScript
- React.js

  <br/>
  <br/>

## 라이브러리

- styled-components
- styled-reset
- react-dom
- react-router-dom
- axios
- prettier
- immutable
- react-quill
- react-redux
- redux
- redux-actions
- redux-devtools-extension
- validator

  <br/>
  <br/>

# 프로젝트 설치 및 실행 방법

## ✅ 설치방법

1.Node.JS를 다운받아 설치해주세요. vite를 사용하였기 때문에 최소 14.18 버전 이상이 요구됩니다.

```
https://nodejs.org/
```

<br/>

2.리포지토리를 클론해주세요.<br/>

```
git clone https://github.com/Goohyun3436/project-hyper-cloud.git
```

<br/>

3.dependencies를 설치해주세요.

```
npm install
```

<br/>

4.json-server를 설치해주세요.

```
npm install -g json-server
npm install -D json-server-auth
```

<br/>
<br/>

## ✅ 실행방법

1. 다음 명령어를 이용해 json-server 와 Dev server 를 실행시켜주세요.

```
npm run server
npm run dev
```

<br/>

2. 브라우저에서 http://127.0.0.1:5173/project-hyper-cloud/ 로 접속하거나,
[배포주소](https://goohyun3436.github.io/project-hyper-cloud/)로 접속해주시면 됩니다. **배포주소로 접속시 `npm run server` 명령어를 꼭 실행해주세요.**

   <br/>
   <br/>
   <br/>

# 주요기능 및 설명

## ✅ 메인 카테고리별 Nav 구현 (769px 이상일 때)

![Nav](https://user-images.githubusercontent.com/94745558/196828990-8a86258d-6c7c-4edd-a306-43a3331b6c7d.gif)

<br/>

## ✅ 메인 카테고리별 Nav 구현 (768px 이하일 때)

<img src="https://user-images.githubusercontent.com/94745558/196829001-388e4196-d27b-4a38-99e8-851f28a2aa20.gif" width="100%" height="100%"/>

<br/>
<br/>

## ✅ 카테고리별 Nav 경로이동 구현

![Nav 경로이동](https://user-images.githubusercontent.com/94745558/196829006-53b5ad6c-4512-4741-be79-a8430f02b5e2.gif)

<br/>
<br/>

## ✅ 로그인 / 회원가입 UI 구현

![로그인 / 회원가입](https://user-images.githubusercontent.com/94745558/196829012-c1a112df-372f-46f7-8ccc-a54e016c8708.gif)
<br/>
<br/>

## ✅ json-server-auth 활용한 회원가입 구현

![회원가입](https://user-images.githubusercontent.com/94745558/196829023-4584ebc3-782c-4dff-bed8-1ec0bab3158e.gif)
<br/>
<br/>

## ✅ json-server-auth 활용한 로그인 구현 및 토큰 유무에 따른 로그인/로그아웃 버튼 구현

![로그인](https://user-images.githubusercontent.com/94745558/196829018-d5a8e89f-cae5-4064-b61c-d91e5f9fb884.gif)
<br/>
<br/>

## ✅ 어바웃 페이지 프리뷰 UI 구현

![어바웃 프리뷰](https://user-images.githubusercontent.com/94745558/196829030-f1f70c2b-9687-43a6-a80b-a0539fd73703.gif)
<br/>
<br/>

## ✅ 로그인 / 회원가입 반응형 UI 구현

![로그인 / 회원가입 반응형](https://user-images.githubusercontent.com/94745558/196829053-fe769ec2-40bb-41da-a3be-98ecbcf00180.gif)
<br/>
<br/>

## ✅ 어바웃 페이지 프리뷰 반응형 UI 구현

![어바웃 프리뷰 반응형](https://user-images.githubusercontent.com/94745558/196829043-d8d9ffdd-d031-4d84-8ca2-346443ea11e1.gif)
<br/>
<br/>

# 소개

### ✅ 프론트엔드 구현

- 깃허브 https://github.com/Goohyun3436
- 블로그 https://velog.io/@3436rngus
