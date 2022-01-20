import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root { // 문서의 루트 요소 선택. 여기서는 html이라고 이해할 수 있음.
        --background-color: #f7f7fc;
        --main-text-color: #243542;
        --border-color: #d9dbe9;
    }
    
    body {
        font-family: Noto Sans KR;
        background-color: var(--background-color);
    }
`;

export default GlobalStyle;
