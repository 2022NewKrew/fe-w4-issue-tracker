import React from "react";
import styled from "styled-components";
import { IStyle } from "@/constants/type";

interface IProgressProps {
  value: number;
  max: number;
  styles?: IStyle;
}
const Progress: React.FC<IProgressProps> = ({ value, max }) => {
  const StyledProgressProps = {
    value: value,
    max: max,
  };
  return <StyledProgress {...StyledProgressProps}></StyledProgress>;
};

const StyledProgress = styled.progress.attrs(props => {
  return {
    value: props.value,
    max: props.max,
  };
})`
  width: 244px;
  height: 8px;
`;
export default Progress;
