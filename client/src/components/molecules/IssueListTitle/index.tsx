import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Indicator, Label } from "@/components/atoms";
import { IStyle } from "@/constants/type";
import { useIssueStore } from "@/stores/issue";
import { DropDown } from "@/components/molecules";
import { useLabelStore } from "@/stores/label";
import { useMilestoneStore } from "@/stores/milestone";

interface IIssueListTitle {
  styles?: IStyle;
  open?: number;
  close?: number;
  visible?: boolean;
}
const DropDownGroup: React.FC = () => {
  const { labelList } = useLabelStore();
  const { milestoneList } = useMilestoneStore();

  const DropDownProp = {
    styles: {
      right: "0px",
      width: "",
    },
  };
  useEffect(() => {
    console.log(milestoneList);
  }, [milestoneList]);
  return (
    <>
      <DropDown {...DropDownProp} optionList={[]}>
        담당자
      </DropDown>
      <DropDown
        {...DropDownProp}
        optionList={labelList.reduce((acc: string[], cur: { name: string }) => {
          acc.push(cur.name);
          return acc;
        }, [])}
      >
        레이블
      </DropDown>
      <DropDown
        {...DropDownProp}
        optionList={milestoneList.reduce((acc: string[], cur: { title: string }) => {
          acc.push(cur.title);
          return acc;
        }, [])}
      >
        마일스톤
      </DropDown>
      <DropDown {...DropDownProp} optionList={[]}>
        작성자
      </DropDown>
    </>
  );
};
const IssueListTitle: React.FC<IIssueListTitle> = ({ styles }) => {
  const { issueFilter, setIssueFilter, openIssueCounts, closeIssueCounts } = useIssueStore();
  const Props = {
    IssueTitleWrapProps: {
      ...styles,
    },
    OpenLabelProps: {
      styles: {
        background: "#F7F7FC",
        color: "#14142B",
        fontSize: "16px",
      },
      onClick: () => {
        setIssueFilter({ ...issueFilter, status: "open" });
      },
    },
    CloseLabelProps: {
      styles: {
        background: "#F7F7FC",
        color: "#6E7191",
        fontSize: "16px",
        width: "120px",
        margin: "0px 0px 0px 4px",
      },
      onClick: () => {
        setIssueFilter({ ...issueFilter, status: "close" });
      },
    },
  };

  return (
    <IssueTitleWrap {...Props.IssueTitleWrapProps}>
      <IssueCheckInput>
        <input type="checkbox" name="xxx" value="yyy" />
      </IssueCheckInput>
      <IssueTitleMeta>
        <Label type="large-open" {...Props.OpenLabelProps}>
          ({openIssueCounts})
        </Label>
        <Label type="large-close" {...Props.CloseLabelProps}>
          ({closeIssueCounts})
        </Label>
      </IssueTitleMeta>
      <IssueTitleFilter>
        <DropDownGroup />
      </IssueTitleFilter>
    </IssueTitleWrap>
  );
};

const IssueCheckInput = styled.div``;
const IssueTitleMeta = styled.div``;
const IssueTitleFilter = styled.div``;
const IssueTitleWrap = styled.div<IStyle>`
  ${({ width, height }) => {
    return css`
      width: ${width ?? "1280px"};
      height: ${height ?? "64px"};
    `;
  }}
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  padding-left: 80px;
  position: relative;
  ${IssueCheckInput} {
    width: 80px;
    position: absolute;
    left: 32px;
    top: 26px;
    & > input {
      width: 16px;
      height: 16px;
    }
  }
  ${IssueTitleMeta} {
    display: flex;
    justify-content: flex-start;
  }
  ${IssueTitleFilter} {
    display: flex;
    & > div {
      margin-right: 32px;
    }
  }
`;
export default IssueListTitle;
