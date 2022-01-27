# fe-w4-issue-tracker

- [fe-w4-issue-tracker](#fe-w4-issue-tracker)
- [1. Feature List](#1-feature-list)
- [2. 기능 구현 문서](#2-기능-구현-문서)
  - [기초 환경 설정(react)](#기초-환경-설정react)
  - [Rest API server 구성](#rest-api-server-구성)
    - [json-server 사용 환경 구성](#json-server-사용-환경-구성)
    - [데이터 구조 생성](#데이터-구조-생성)
    - [rest api url 구성](#rest-api-url-구성)
    - [프레임워크 서버로 업그레이드](#프레임워크-서버로-업그레이드)
    - [db table 구성](#db-table-구성)
  - [구조 디자인](#구조-디자인)
    - [디자인 패턴: 옵저버 패턴](#디자인-패턴-옵저버-패턴)
  - [기능 구현](#기능-구현)
    - [이슈목록 모든 기능](#이슈목록-모든-기능)
      - [이슈목록](#이슈목록)
      - [이슈목록 / 필터](#이슈목록--필터)
      - [이슈목록 / 다중선택](#이슈목록--다중선택)
    - [새로운 이슈 작성](#새로운-이슈-작성)
    - [이슈 상세](#이슈-상세)
    - [레이블 목록](#레이블-목록)
    - [마일스톤 목록](#마일스톤-목록)
    - [로그인](#로그인)
      - [oAuth](#oauth)
    - [마크업 완성](#마크업-완성)

# 1. Feature List

- [X] 기초 환경 설정(react)
- [ ] Rest API server 구성
  - [X] json-server 사용 환경 구성
  - [X] 데이터 구조 생성
  - [X] rest api url 구성
  - [ ] 프레임워크 서버로 업그레이드
  - [ ] db table 구성
- [ ] 구조 디자인
  - [ ] 디자인 패턴: 옵저버 패턴
- [ ] 기능 구현
  - [ ] 이슈목록 모든 기능
    - [ ] 이슈목록
    - [ ] 이슈목록 / 필터
    - [ ] 이슈목록 / 다중선택
  - [ ] 새로운 이슈 작성
  - [ ] 이슈 상세
  - [ ] 레이블 목록
  - [ ] 마일스톤 목록
  - [ ] 로그인
    - [ ] oAuth
  - [ ] 마크업 완성

# 2. 기능 구현 문서

## 기초 환경 설정(react)
- 기본 구성
  - src
  - public 
- webpack
- babel
- package.json
  - script
    - $ npm run dev
    - $ npm run build
## Rest API server 구성
- json-server 사용 -> lowdb 사용
### json-server 사용 환경 구성
- $ json-server --watch db.json --port 3001
- json-server 만으로는 라우팅이 불가능해 lowdb를 이용하여 서버를 구성
  - server.js 파일 직접 실행
    - $ node server.js
### 데이터 구조 생성
- 기본 데이터 테이블
  - users
  - issues
  - labels
  - milestones
### rest api url 구성
- CRUD
  - 전체 목록(issues, labels, milestones)
    - url: http://localhost:[port]/[component]
    - GET, POST
  - 개별 항목(issue, label, milestone)
    - url: http://localhost:[port]/[component]/[id]
    - GET, PUT, DELETE
### 프레임워크 서버로 업그레이드
### db table 구성
## 구조 디자인
### 디자인 패턴: 옵저버 패턴
## 기능 구현
### 이슈목록 모든 기능
#### 이슈목록
#### 이슈목록 / 필터
#### 이슈목록 / 다중선택
### 새로운 이슈 작성
### 이슈 상세
### 레이블 목록
### 마일스톤 목록
### 로그인
#### oAuth
### 마크업 완성
