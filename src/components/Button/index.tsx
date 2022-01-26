/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { theme } from '@styles/theme';

interface ButtonProps {
  type?: 'Large' | 'MediumStandard' | 'SmallStandard' | 'SmallSecondary';
  children: React.ReactNode;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button = ({ type = 'Large', children, disabled, ...props }: ButtonProps) => {
  const getStyle = (type) => {
    switch (type) {
      case 'MediumStandard':
        return [blockStyle, medium, filled];
      case 'SmallStandard':
        return [blockStyle, small, filled];
      case 'SmallSecondary':
        return [blockStyle, small, bordered];
      default:
        return [blockStyle, large, filled];
    }
  };

  return (
    <button css={[buttonStyle, ...getStyle(type)]} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

const offWhite = theme.greyScale.offWhite;
const { blue, lightBlue, darkBlue } = theme.colors.primary;
const { linkMedium, linkXSmall } = theme.textStyles;

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
