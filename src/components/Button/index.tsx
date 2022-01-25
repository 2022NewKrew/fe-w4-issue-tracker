/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { theme } from '@styles/theme';

const Button = ({ type, children, ...props }) => {
  const getStyle = (type) => {
    if (type === 'MediumStandard') return [blockStyle, medium, filled];
    if (type === 'SmallStandard') return [blockStyle, small, filled];
    if (type === 'SmallSecondary') return [blockStyle, small, bordered];
    return [large, filled];
  };

  return (
    <button css={[buttonStyle, ...getStyle(type)]} {...props}>
      {children}
    </button>
  );
};

const lightBlue = theme.colors.primary.lightBlue;
const offWhite = theme.greyScale.offWhite;
const blue = theme.colors.primary.blue;
const darkBlue = theme.colors.primary.darkBlue;
const linkMedium = theme.textStyles.linkMedium;
const linkXSmall = theme.textStyles.linkXSmall;

const buttonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;

  border: none;

  & > span {
    text-align: center;
  }

  & > svg {
    margin-right: 4px;
  }

  &:hover:enabled {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const small = css`
  width: 120px;
  height: 40px;
  border-radius: 11px;
  & > svg {
    width: 16px;
    height: 16px;
  }
  & > span {
    ${linkXSmall}
    margin-top: 2px;
  }
`;

const medium = css`
  width: 240px;
  height: 56px;
  border-radius: 20px;
  & > span {
    ${linkMedium}
  }
`;

const large = css`
  width: 340px;
  height: 64px;
  border-radius: 20px;
  & > span {
    ${theme.textStyles.linkMedium}
  }
`;

const blockStyle = css`
  &:focus {
    border: 4px solid ${lightBlue};
  }
`;

const filled = css`
  background: ${blue};
  color: ${offWhite};
  & > img {
    color: ${offWhite};
  }
  &:hover:enabled {
    background: ${darkBlue};
  }
`;

const bordered = css`
  background: ${offWhite};
  border: 2px solid ${blue};
  color: ${blue};
  &:hover:enabled {
    color: ${darkBlue};
    border: 2px solid ${darkBlue};
  }
`;

export default Button;
