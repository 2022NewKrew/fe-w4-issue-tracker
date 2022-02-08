import React from "react";
import styled, { css } from "styled-components";
import { Label, Text } from "@/components/atoms";
import { theme } from "@/styles/theme";
import { ExamIcons } from "@/components/atoms/Icons";
import { IStyle } from "@/constants/type";

interface IIssueListItem {
  styles?: IStyle;
  issueTitle?: string;
  issueNumber?: string;
  issueInfo?: string;
  issueLabel?: string;
  onClick?: any;
}
const IssueListItem: React.FC<IIssueListItem> = ({
  styles,
  issueTitle = "이슈 제목",
  issueNumber = "#1",
  issueInfo = "이 이슈가 8분 전, Oni님에 의해 작성되었습니다.",
  issueLabel = "레이블 이름",
  onClick,
}) => {
  const Props = {
    IssueItemWrapProps: {
      ...styles,
    },
    OpenLabelProps: {
      styles: {
        color: "#14142B",
        fontSize: "16px",
        width: "120px",
        iconColor: "#007AFF",
        background: theme.color.offWhite,
        childCSS: css`
          align-items: center;
        `,
      },
    },
    MediumTextProps: {
      styles: {
        fontSize: "bold",
        width: "",
        height: "",
      },
      onClick: onClick,
    },
    IssueLabelProps: {
      styles: {
        background: styles?.background,
        margin: "0px 0px 0px 10px",
        color: styles?.color,
      },
    },
  };

  return (
    <IssueItemWrap {...Props.IssueItemWrapProps}>
      <IssueCheckInput>
        <input type="checkbox" name="xxx" value="yyy" />
      </IssueCheckInput>
      <IssueItemMeta>
        <LabelWrap>
          <Label type="large" {...Props.OpenLabelProps}>
            <Text type="medium" {...Props.MediumTextProps}>
              {issueTitle}
            </Text>
          </Label>
          <Label type="small-light" {...Props.IssueLabelProps}>
            {issueLabel}
          </Label>
        </LabelWrap>
        <IssueInfoWrap>
          <Text type="issue">{issueNumber}</Text>
          <Text type="issue">{issueInfo}</Text>
        </IssueInfoWrap>
      </IssueItemMeta>
      <IssueItemFilter>
        <div></div>
        <div></div>
        <div></div>
        <ExamIcons width="20" height="20" />
      </IssueItemFilter>
    </IssueItemWrap>
  );
};

const IssueCheckInput = styled.div``;
const IssueItemMeta = styled.div``;
const IssueItemFilter = styled.div``;
const LabelWrap = styled.div``;
const IssueInfoWrap = styled.div``;
const IssueItemWrap = styled.div<IStyle>`
  display: flex;
  justify-content: space-between;
  padding-right: 54px;
  padding-left: 80px;
  padding-top: 16px;
  background: ${theme.color.offWhite};
  position: relative;
  ${IssueItemMeta} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #6e7191;
    ${LabelWrap} {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
    }
    ${IssueInfoWrap} {
      display: flex;
      & > * {
        margin-right: 20px;
      }
    }
  }
  ${IssueItemFilter} {
    display: flex;
    align-items: center;

    & > div {
      margin-right: 32px;
    }
  }
  ${IssueCheckInput} {
    width: 80px;
    position: absolute;
    left: 32px;
    top: 26px;
    & > input {
      width: 16px;
      height: 16px;
      outline-color: #d9dbe9;
    }
  }
  ${({ margin, width, height, background, borderColor, color }) => {
    return css`
      margin: ${margin ?? ""};
      width: ${width ?? "1280px"};
      height: ${height ?? ""};
      border-color: ${borderColor ?? ""};
      color: ${color ?? ""};
    `;
  }}
`;
export default IssueListItem;
