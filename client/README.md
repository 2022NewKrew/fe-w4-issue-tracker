# fe-w4-issue-tracker

## 아토믹 패턴 룰

- 위치를 결정하는 스타일 속성은 props로 전달
- 스타일 단위는 atoms 이나 molecule, organism 에 필요한 것들은 해당 파일 내부에 css in js 로 첨부 (atoms 의 공통 style 은 styles/Common 에 저장)
- 로직과의 연결이 필요한 경우 Atom에 함수를 전달하거나 훅 사용
- 서비스 내에서 변하지 않는 데이터는 상태 관리 라이브러리 사용 [예정]
- → [미정] Context Api or Recoil 사용해서 store 를 두고 원할한 비즈니스 로직 구성
