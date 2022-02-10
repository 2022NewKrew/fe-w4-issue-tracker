import { Button } from "@/components/atoms";
import { theme } from "@/styles/theme";
import React from "react";
import styled, { css } from "styled-components";
import { IStyle } from "@/constants/type";
import { Cancle } from "@/components/atoms/Icons";

interface IIssueAddSubmit {
  styles?: IStyle;
}
const IssueAddSubmit: React.FC<IIssueAddSubmit> = ({ styles }) => {
  const Props = {
    CancleBtnProps: {
      styles: {
        iconColor: theme.color.label,
      },
      iconType: <Cancle />,
    },
    SubmitBtnProps: {
      styles: { backgroundColor: theme.color.primary, margin: "0px 0px 0px 32px" },
    },
  };

  return (
    <IssueSubmit {...styles}>
      <Button btnType="textMedium" {...Props.CancleBtnProps}>
        작성 취소
      </Button>
      <Button btnType="mediumStandard" {...Props.SubmitBtnProps}>
        완료
      </Button>
    </IssueSubmit>
  );
};
const IssueSubmit = styled.div<IStyle>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${({ margin, width, height }) => css`
    margin: ${margin ?? ""};
    width: ${width ?? ""};
    height: ${height ?? ""};
  `}
`;

export default IssueAddSubmit;
