import React from "react";
import styled from "styled-components";
import { Tab, Button } from "@/components/atoms";
import { useNavigate } from "react-router-dom";
import { IStyle } from "@/constants/type";

interface IIssueFilterOptionProps {
  styles?: IStyle;
}
const IssueFilterOption: React.FC<IIssueFilterOptionProps> = ({ styles }) => {
  const navigate = useNavigate();
  return (
    <IssueOptionWrap>
      <Tab />
      <Button
        btnType="smallStandard"
        onClick={() => {
          navigate("/issue/add");
        }}
      >
        이슈 작성
      </Button>
    </IssueOptionWrap>
  );
};

const IssueOptionWrap = styled.div`
  display: flex;
  & > * {
    margin-left: 16px;
  }
`;
export default IssueFilterOption;
