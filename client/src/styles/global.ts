import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';
import { ITheme } from './themeInterface';

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
    ${reset};

    ${({ theme }) => {
        return css`
            // 문서의 루트 요소 선택. 여기서는 html이라고 이해할 수 있음.
            :root {
                // 자주 쓰는 변수들은 theme의 타입명시없이 var()로 쓸 수 있도록 변수화
                --background-color: ${theme.colors.background};
                --placeholder-color: ${theme.colors.placeholder};
                --input-background-color: ${theme.colors.inputBackground};
            }

            body {
                font-family: Noto Sans KR;
                background-color: var(--background-color);
            }
            input {
                outline: none;
                border: none;
            }
            input:focus {
                outline: none;
            }
        `;
    }}
`;

export default GlobalStyle;
