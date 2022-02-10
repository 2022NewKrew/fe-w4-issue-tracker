import React from "react";
import styled, { css } from "styled-components";
import { Label, Text } from "@/components/atoms";
import { theme } from "@/styles/theme";
import { ExamIcons } from "@/components/atoms/Icons";
import { IStyle } from "@/constants/type";

interface IIssueListItem {
  key?: string;
  styles?: IStyle;
  assignees?: any[];
  comments?: any[];
  labels?: any;
  milestone?: any;
  status?: string;
  num?: number;
  timestamp?: string;
  title?: string;
  writer?: any;
  onClick?: any;
}
const IssueListItem: React.FC<IIssueListItem> = ({
  styles,
  assignees,
  comments,
  labels,
  milestone,
  status,
  num,
  timestamp,
  title,
  writer,
  onClick,
  ...props
}) => {
  const Props = {
    IssueItemWrapProps: {
      value: num,
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
        background: labels[0]?.backgroundColor ?? "",
        margin: "0px 0px 0px 10px",
        color: labels[0]?.color ?? styles?.color,
      },
    },
  };

  return (
    <IssueItemWrap {...Props.IssueItemWrapProps}>
      <IssueCheckInput>
        <input type="checkbox" name="xxx" value={num} />
      </IssueCheckInput>
      <IssueItemMeta>
        <LabelWrap>
          <Label type="large" {...Props.OpenLabelProps}>
            <Text type="medium" {...Props.MediumTextProps}>
              {title}
            </Text>
          </Label>
          <Label type="small-light" {...Props.IssueLabelProps}>
            {labels[0]?.name}
          </Label>
        </LabelWrap>
        <IssueInfoWrap>
          <Text type="issue">#{num}</Text>
          <Text type="issue">{timestamp}</Text>
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
const IssueItemWrap = styled.div<any>`
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
