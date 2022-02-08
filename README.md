# **fe-w4-issue-tracker**

- [**fe-w4-issue-tracker**](#fe-w4-issue-tracker)
- [**1. Feature List**](#1-feature-list)
- [**2. 기능 구현 문서**](#2-기능-구현-문서)
  - [**1. 기초 환경 설정(react)**](#1-기초-환경-설정react)
  - [**2. Rest API server 구성**](#2-rest-api-server-구성)
    - [**1. json-server 사용 환경 구성**](#1-json-server-사용-환경-구성)
    - [**2. 데이터 구조 생성**](#2-데이터-구조-생성)
    - [**3. rest api url 구성**](#3-rest-api-url-구성)
    - [**4. 프레임워크 서버로 업그레이드**](#4-프레임워크-서버로-업그레이드)
    - [**5. db table 구성**](#5-db-table-구성)
  - [**3. 구조 디자인**](#3-구조-디자인)
    - [**1. 디자인 패턴: 아토믹 패턴**](#1-디자인-패턴-아토믹-패턴)
    - [**2. 컴포넌트 구현**](#2-컴포넌트-구현)
      - [**1. atoms**](#1-atoms)
        - [**1. buttons**](#1-buttons)
      - [**2. molecules**](#2-molecules)
      - [**3. organisms**](#3-organisms)
      - [**4. templates**](#4-templates)
      - [**5. pages**](#5-pages)
  - [**4. 기능 구현**](#4-기능-구현)
    - [**1. 이슈목록 모든 기능**](#1-이슈목록-모든-기능)
      - [**1. 이슈목록**](#1-이슈목록)
      - [**2. 이슈목록 / 필터**](#2-이슈목록--필터)
      - [**3. 이슈목록 / 다중선택**](#3-이슈목록--다중선택)
    - [**2. 새로운 이슈 작성**](#2-새로운-이슈-작성)
    - [**3. 이슈 상세**](#3-이슈-상세)
    - [**4. 레이블 목록**](#4-레이블-목록)
    - [**5. 마일스톤 목록**](#5-마일스톤-목록)
    - [**6. 로그인**](#6-로그인)
      - [**1. oAuth**](#1-oauth)
    - [**7. 마크업 완성**](#7-마크업-완성)

# **1. Feature List**

- [X] 기초 환경 설정(react)
- [ ] Rest API server 구성
  - [X] json-server 사용 환경 구성
  - [X] 데이터 구조 생성
  - [X] rest api url 구성
  - [ ] 프레임워크 서버로 업그레이드
  - [ ] db table 구성
- [X] 구조 디자인
  - [ ] 디자인 패턴: 아토믹 패턴
  - [ ] 컴포넌트 구현
    - [ ] atoms
      - [X] buttons
    - [ ] molecules
    - [ ] organisms
    - [ ] templates
    - [ ] pages
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

# **2. 기능 구현 문서**

## **1. 기초 환경 설정(react)**
- 기본 구성
  - src
  - public 
- webpack
- babel
- package.json
  - script
    - $ npm run dev
    - $ npm run build
## **2. Rest API server 구성**
- json-server 사용 -> lowdb 사용
### **1. json-server 사용 환경 구성**
- $ json-server --watch db.json --port 3001
- json-server 만으로는 라우팅이 불가능해 lowdb를 이용하여 서버를 구성
  - server.js 파일 직접 실행
    - $ node server.js
### **2. 데이터 구조 생성**
- 기본 데이터 테이블
  - users
  - issues
  - labels
  - milestones
### **3. rest api url 구성**
- CRUD
  - 전체 목록(issues, labels, milestones)
    - url: http://localhost:[port]/[component]
    - GET, POST
  - 개별 항목(issue, label, milestone)
    - url: http://localhost:[port]/[component]/[id]
    - GET, PUT, DELETE
### **4. 프레임워크 서버로 업그레이드**
### **5. db table 구성**
## **3. 구조 디자인**
- 컴포넌트 구조에 아토믹 패턴을 적용하기로 결정
### **1. 디자인 패턴: 아토믹 패턴**
- https://zoomkoding.github.io/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/%EC%9A%B0%EC%95%84%ED%95%9C%ED%85%8C%ED%81%AC%EC%BA%A0%ED%94%84/2020/07/09/atomic-design-pattern.html
- 하위 컴포넌트(atom에서 시작)들을 여러 개 중첩시켜 상위 컴포넌트를 만들고, 이렇게 만들어진 컴포넌트들을 다시 여러 개 모아 상위 컴포넌트를 만드는 작업을 반복
- atoms -> molecules -> organisms -> templates -> pages
### **2. 컴포넌트 구현**
#### **1. atoms**
- 기능을 가진 컴포넌트의 최소 단위
##### **1. buttons**

  
BaseBtn

ㄴ SmallBtn, MediumBtn, LargeBtn
#### **2. molecules**
#### **3. organisms**
#### **4. templates**
#### **5. pages**
## **4. 기능 구현**
### **1. 이슈목록 모든 기능**
#### **1. 이슈목록**
#### **2. 이슈목록 / 필터**
#### **3. 이슈목록 / 다중선택**
### **2. 새로운 이슈 작성**
### **3. 이슈 상세**
### **4. 레이블 목록**
### **5. 마일스톤 목록**
### **6. 로그인**
#### **1. oAuth**
### **7. 마크업 완성**
