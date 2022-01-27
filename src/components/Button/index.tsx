/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { theme } from '@styles/theme';

interface ButtonProps {
  type?:
    | 'Large'
    | 'MediumStandard'
    | 'SmallStandard'
    | 'SmallSecondary'
    | 'MediumText'
    | 'SmallText';
  children: React.ReactNode;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button = ({ type = 'Large', children, disabled, ...props }: ButtonProps) => {
  const getStyle = (type) => {
    switch (type) {
      case 'MediumStandard':
        return [blockStyle, medium, linkMedium, filled];
      case 'SmallStandard':
        return [blockStyle, small, linkXSmall, filled, withIcon];
      case 'SmallSecondary':
        return [blockStyle, small, linkXSmall, bordered, withIcon];
      case 'MediumText':
        return [textStyle, linkSmall, withIcon];
      case 'SmallText':
        return [textStyle, linkXSmall, withIcon];
      default:
        return [blockStyle, large, linkMedium, filled];
    }
  };

  return (
    <button css={[...getStyle(type), buttonStyle]} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

const { offWhite, label, titleActive, body } = theme.greyScale;
const { blue, lightBlue, darkBlue } = theme.colors.primary;
const { linkMedium, linkSmall, linkXSmall } = theme.textStyles;

const buttonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;

  border: none;
  line-height: unset;


  &:hover:enabled {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const withIcon = css`
  & > svg {
    margin: 0 4px 1.5px 0;
    width: 16px;
    height: 16px;
  }
`;

const small = css`
  width: 120px;
  height: 40px;
  border-radius: 11px;
`;

const medium = css`
  width: 240px;
  height: 56px;
  border-radius: 20px;
`;

const large = css`
  width: 340px;
  height: 64px;
  border-radius: 20px;
`;

const blockStyle = css`
  &:focus {
    border: 4px solid ${lightBlue};
  }
`;


const textStyle = css`
  height: 32px;
  background: none;

  color: ${label};

  &:active {
    color: ${titleActive};
  }

  &:hover {
    color: ${body};
  }
`;

const filled = css`
  color: ${offWhite};

  background: ${blue};

  &:hover:enabled {
    background: ${darkBlue};
  }
`;

const bordered = css`
  background: ${offWhite};
  
  color: ${blue};
  border: 2px solid ${blue};

  &:hover:enabled {
    color: ${darkBlue};
    border: 2px solid ${darkBlue};
  }
`;

export default Button;
