import React, { useState } from "react";
import styled, { css } from "styled-components";
import { theme } from "@/styles/theme";
import { Search } from "@/components/atoms/Icons";
import useInput from "@/hooks/useInput";
import { inputWrapMediaStyle } from "@/styles/common";
import { IStyle } from "@/constants/type";
import { DropDown } from "@/components/molecules";

interface IIssueFilterBar {
  styles?: IStyle;
  onClick?: VoidFunction;
}
const IssueFilterBar: React.FC<IIssueFilterBar> = ({ styles, onClick }) => {
  const { value, className, onChange, onFocus, onBlur } = useInput({
    initialValue: "is:issue is:open",
    inputType: "FilterBar",
  });
  const [visible, setVisible] = useState(false);

  const Props = {
    BarWrap: {
      ...styles,
    },
    BarInputProps: {
      className: className,
      onChange: onChange,
      onFocus: onFocus,
      onBlur: onBlur,
      placeholder: value,
    },
    BarLineProps: {
      className: className,
    },
    BarInputWrapProps: {
      className: className,
    },
    BarButtonProps: {
      className: className,
    },
    DropDownProp: {
      visible,
      styles: {
        width: "130px",
        childCSS: css`
          position: absolute;
          z-index: 1;
          right: 1020px;
          top: 135px;
        `,
      },
      optionList: [
        "열린 이슈",
        "내가 작성한 이슈",
        "나에게 할당된 이슈",
        "내가 댓글을 남긴 이슈",
        "닫힌 이슈",
      ],
      onClick: () => {
        setVisible(!visible);
      },
    },
  };
  return (
    <BarWrap {...Props.BarWrap}>
      <DropDown {...Props.DropDownProp}>필터</DropDown>
      <BarLine {...Props.BarLineProps} />
      <BarInputWrap {...Props.BarInputWrapProps}>
        <Search color={theme.color.placeholder} />
        <BarInput {...Props.BarInputProps} />
      </BarInputWrap>
    </BarWrap>
  );
};

const BarButton = styled.div``;
const BarLine = styled.div``;
const BarInputWrap = styled.div``;
const BarInput = styled.input.attrs(props => {
  return { placeholder: props.placeholder };
})``;
const BarWrap = styled.div<IStyle>`
  display: flex;
  align-items: center;
  ${({ width, height, borderColor }) => css`
    width: ${width ?? "601px"};
    height: ${height ?? "42px"};
    border: 1px solid ${borderColor ?? theme.color.line}};
  `}
  border-radius: 11px;
  ${BarButton} {
    border-radius: 11px 0px 0px 11px;
    width: 128px;
    height: 40px;
    line-height: 40px;
    font-weight: bold;
    font-style: normal;
    font-size: 16px;
    background: ${theme.color.background};
    position: relative;
    padding-left: 24px;
    padding-top: 2px;
    color: ${theme.color.label};
    ${inputWrapMediaStyle};
    cursor: pointer;
    & > svg {
      position: absolute;
      right: 24px;
      top: 13px;
    }
    &:hover {
      background: ${theme.color.line};
    }
  }
  ${BarLine} {
    width: 1px;
    height: 40px;
    background: ${theme.color.line};
    &.active {
      width: 0px;
    }
  }
  ${BarInputWrap} {
    width: 472px;
    height: 40px;
    position: relative;
    background: ${theme.color.inputBackground};
    border-radius: 0px 11px 11px 0px;
    ${inputWrapMediaStyle};
    & > svg {
      position: absolute;
      left: 26px;
      top: 13px;
    }
    & > ${BarInput} {
      width: 400px;
      background: ${theme.color.inputBackground};
      border: 0px;
      height: 38px;
      font-weight: normal;
      font-size: 16px;
      line-height: 38px;
      margin-left: 48px;
      padding-top: 3px;
      color: ${theme.color.titleActive};
      ${inputWrapMediaStyle};
      &:hover,
      &:focus {
        border: 0px;
        outline: none;
      }
    }
  }
`;
export default IssueFilterBar;
