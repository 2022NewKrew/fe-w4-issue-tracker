import React from "react";
import { Header } from "@/components/organisms";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Issue: React.FC = () => {
  return (
    <IssueWrap>
      <Header></Header>
      <Outlet />
    </IssueWrap>
  );
};

const IssueWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 1440px;
  margin: auto;
  padding-left: 80px;
  padding-right: 80px;
  background-color: ${({ theme }) => theme.color.background};
`;
export default Issue;
