# Issue Tracker

## 폴더 구조

```bash
.
├── README.md
├── client
│   ├── README.md
│   ├── build(ignored)
│   ├── config
│   ├── images.d.ts
│   ├── package.json
│   ├── public
│   │   ├── icons
│   │   ├── images
│   │   └── index.html
│   ├── src
│   │   ├── @types - 공통 타입 정의
│   │   │   └── index.d.ts
│   │   ├── App.tsx
│   │   ├── components - React Components
│   │   │   ├── assets - 단독파일로서 비즈니스로직 없이 재사용이 많이 되는 작은 컴포넌트뷰
│   │   │   └── pages - App.tsx의 페이지 라우팅 컴포넌트
│   │   ├── index.tsx
│   │   ├── styles - styled components 관련된 글로벌, 테마
│   │   │   ├── styleTemplates - 재사용되는 css 혹은 styled components
│   │   └── utils - 유틸 함수
│   ├── tsconfig.json
│   └── yarn.lock
├── database
│   ├── db.json
│   ├── package.json
│   └── yarn.lock
└── server
    ├── index.js
    ├── package.json
    └── yarn.lock
```

## import문 순서 컨벤션

> 1. React ('react')
> 2. styled-components ('styled-components)
> 3. custom style 속성 (/client/src/styles/styleTemplates)
> 4. interface 및 type 정의 (/client/src/@types)
> 5. assets 등 공통 컴포넌트 (/client/src/components/assets)
> 6. 단독으로 사용하는 컴포넌트 (/client/src/components)
> 7. svg 컴포넌트 (/client/public/icons, /client/public/images)
> 8. 기타 util 함수 (/client/src/utils)
