import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';
import { customReset } from './customReset';
import { ITheme } from './themeInterface';

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
    ${reset};
    ${customReset};
    ${({ theme }) => {
        return css`
            // 문서의 루트 요소 선택. 여기서는 html이라고 이해할 수 있음.
            :root {
                // 자주 쓰는 변수들은 theme의 타입명시없이 var()로 쓸 수 있도록 변수화

                /* Colors */
                --title-active-color: ${theme.colors.titleActive};
                --body-color: ${theme.colors.body};
                --label-color: ${theme.colors.label};
                --placeholder-color: ${theme.colors.placeholder};
                --line-color: ${theme.colors.line};
                --input-background-color: ${theme.colors.inputBackground};
                --background-color: ${theme.colors.background};
                --off-white-color: ${theme.colors.background};

                --primary1-color: ${theme.colors.primary1};
                --primary2-color: ${theme.colors.primary2};
                --primary3-color: ${theme.colors.primary3};
                --secondary1-color: ${theme.colors.secondary1};
                --secondary2-color: ${theme.colors.secondary2};
                --secondary3-color: ${theme.colors.secondary3};
                --error1-color: ${theme.colors.error1};
                --error2-color: ${theme.colors.error2};
                --error3-color: ${theme.colors.error3};
                --success1-color: ${theme.colors.success1};
                --success2-color: ${theme.colors.success2};
                --success3-color: ${theme.colors.success3};

                /* Fonts */
                --display-font-size: ${theme.fonts.size.display};
                --large-font-size: ${theme.fonts.size.large};
                --medium-font-size: ${theme.fonts.size.medium};
                --small-font-size: ${theme.fonts.size.small};
                --x-small-font-size: ${theme.fonts.size.xSmall};

                --bold-font-weight: ${theme.fonts.weight.bold};
                --bolder-font-weight: ${theme.fonts.weight.bolder};
                --normal-font-weight: ${theme.fonts.weight.normal};

                --display-font-line-height: ${theme.fonts.lineHeight.display};
                --large-font-line-height: ${theme.fonts.lineHeight.large};
                --medium-font-line-height: ${theme.fonts.lineHeight.medium};
                --small-font-line-height: ${theme.fonts.lineHeight.small};
                --x-small-font-line-height: ${theme.fonts.lineHeight.xSmall};
            }

            body {
                font-family: Noto Sans KR;
                background-color: var(--background-color);
            }
        `;
    }}
`;

export default GlobalStyle;
