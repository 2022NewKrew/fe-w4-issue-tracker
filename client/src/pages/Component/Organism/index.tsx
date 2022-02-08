import {
  Header,
  IssueDetailContent,
  IssueDetailHeader,
  IssueListContent,
  IssueListHeader,
  IssueNewContent,
  LoginForm,
} from "@/components/organisms";
import { DivLine } from "@/components/atoms";
import React from "react";
import styled from "styled-components";

const Organism: React.FC = () => {
  return (
    <OrganismWrap>
      <Header></Header>
      <DivLine />
      <IssueDetailContent />
      <DivLine />
      <IssueDetailHeader />
      <DivLine />
      <IssueListContent />
      <DivLine />
      <IssueListHeader />
      <DivLine />
      <IssueNewContent />
      <DivLine />
      <LoginForm />
    </OrganismWrap>
  );
};
const OrganismWrap = styled.div`
  width: 1440px;
  padding-left: 80px;
  padding-right: 80px;
`;
export default Organism;
