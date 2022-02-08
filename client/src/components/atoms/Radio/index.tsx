import React from "react";
import styled from "styled-components";
import { CheckCircle } from "@/components/atoms/Icons";
import { IStyle } from "@/constants/type";

interface IRadio {
  styles?: IStyle;
}
const Radio: React.FC<IRadio> = () => {
  return (
    <RadioWrap>
      <RadioLabel>Label</RadioLabel>
      <RadioOption>
        <CheckCircle type="off" onClick={() => {}} />
        Option1
      </RadioOption>
      <RadioOption>
        <CheckCircle type="off" onClick={() => {}} />
        Option2
      </RadioOption>
    </RadioWrap>
  );
};

const RadioLabel = styled.div``;
const RadioOption = styled.div``;
const RadioWrap = styled.div`
  width: 352px;
  height: 40px;
  background: #eff0f6;
  padding-top: 3px;
  border-radius: 11px;
  box-sizing: border-box;
  padding-left: 24px;
  display: flex;
  align-items: center;
  ${RadioLabel} {
    width: 80px;
    height: 40px;
    line-height: 40px;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #6e7191;
  }
  ${RadioOption} {
    width: 104px;
    height: 28px;
    line-height: 20px;
    display: flex;
    align-items: center;
    & > svg {
      margin-right: 3px;
      margin-bottom: 3px;
      cursor: pointer;
    }
  }
`;
export default Radio;
