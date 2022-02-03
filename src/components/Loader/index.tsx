import React from "react";
import { ClockLoader } from "react-spinners";
import styled from "styled-components";

export type LengthType = number | string;

export type LoaderType = {
  loading: boolean;
  message?: string;
  css: string;
  size: LengthType;
};

const Loader = (props: LoaderType) => {
  return (
    <Wrapper>
      <ClockLoader
        size={300}
        color={"#333"}
        loading={props.loading}
        css={props.css}
      />
      <MessageWrapper>
        <span>{props.message}</span>
      </MessageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20vh;
`;

const MessageWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  justify-content: center;
  font-size: 24px;
`;

export default Loader;
