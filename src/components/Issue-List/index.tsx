import React, { useState } from "react";
import styled from "styled-components";
import { Color } from "@/common/designSystem";
import Dropdown, {
  DropdownItem,
  DropdownType,
  FixPoint,
} from "../Common/Dropdown";
import openIssueImg from "@/asset/img/alert-circle.svg";
import closeIssueImg from "@/asset/img/archive.svg";
import milestonImg from "@/asset/img/milestone.svg";
import SVG from "react-inlinesvg";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

interface LabelInfo {
  labelID: string;
  labelName: string;
  labelColor: string;
}

interface IssueInfo {
  issueTitle: string;
  labelGroup: LabelInfo[];
  milestoneGroup: string[]; //TODO 마일스톤 형식 정의되면 바꿀 예정
  reportDate: Date;
  register: string; //TODO user 형식 정의되면 바꿀 예정
  issueId: string;
  assignGroup: string[]; //TODO 담당자 형식 정의되면 바꿀 예정
}

dayjs.extend(relativeTime);
dayjs.locale("ko");

const IssueList = () => {
  //TODO: 더미데이터
  const [dropdownGroup, setDropdownGroup] = useState<DropdownItem[]>([
    {
      type: DropdownType.none,
      itemTitle: "필터1",
      isChecked: false,
    },
    {
      type: DropdownType.none,
      itemTitle: "필터2",
      isChecked: false,
    },
    {
      type: DropdownType.none,
      itemTitle: "필터3",
      isChecked: false,
    },
  ]);
  const [issueGroup, setIssueGroup] = useState<IssueInfo[]>([
    {
      issueTitle: "FE 이슈트래커 개발",
      labelGroup: [
        {
          labelID: "1",
          labelColor: Color.DarkBlue,
          labelName: "documentation",
        },
        {
          labelID: "2",
          labelColor: Color.DarkGreen,
          labelName: "documentation2",
        },
      ],
      milestoneGroup: ["마스터즈 코스", "마스터즈 코스2"],
      reportDate: new Date("2022-02-08T10:56:00"),
      register: "Oni",
      issueId: "1",
      assignGroup: ["assigUser"],
    },
    {
      issueTitle: "FE 이슈트래커 개발2",
      labelGroup: [
        {
          labelID: "1",
          labelColor: Color.DarkBlue,
          labelName: "documentation",
        },
        {
          labelID: "3",
          labelColor: Color.DarkPurple,
          labelName: "documentation3",
        },
      ],
      milestoneGroup: ["마스터즈 코스2", "마스터즈 코스3"],
      reportDate: new Date("2022-02-07T10:56:00"),
      register: "Choi",
      issueId: "2",
      assignGroup: ["assigUser"],
    },
  ]);

  const clickItem = (clickItemIndex: number) => {
    const newDropdownGroup = [...dropdownGroup];
    newDropdownGroup[clickItemIndex].isChecked =
      !newDropdownGroup[clickItemIndex].isChecked;
    setDropdownGroup(newDropdownGroup);
  };
  const displayedAt = (createdAt: Date) => {
    return dayjs().to(createdAt);
  };
  //TODO: 매 시간 비교를 할지 아니면 첫  조회 시간만 비교할지 고민
  const reportDateInfo = (reportDate: Date, register: string) => {
    return `이 이슈가 ${displayedAt(
      reportDate
    )}, ${register}님에 의해 작성되었습니다`;
  };
  const labelList = (labelGroup: LabelInfo[]) =>
    labelGroup.map((labelItem, labelItemIndex) => {
      return (
        <IssueLabel key={labelItemIndex} color={labelItem.labelColor}>
          {labelItem.labelName}
        </IssueLabel>
      );
    });
  const milestoneList = (milestoneGroup: string[]) =>
    milestoneGroup.map((milestoneItem, milestoneItemIndex) => {
      return (
        <IssueMilestone key={milestoneItemIndex}>
          <SvgImg src={milestonImg} fill={Color.Label} />
          <IssueSpan>{milestoneItem}</IssueSpan>
        </IssueMilestone>
      );
    });
  const issueInfoList = issueGroup.map((issueItem, issueItemIndex) => (
    <IssueItem key={issueItemIndex}>
      <IssueItemInfoGroup>
        <CheckBox type="checkbox" />
        <IssueInfo>
          <IssueTitleWrapper>
            <SvgImg
              color={Color.Blue}
              fill={Color.LightBlue}
              src={openIssueImg}
            />
            <IssueTitle>{issueItem.issueTitle}</IssueTitle>
            {labelList(issueItem.labelGroup)}
          </IssueTitleWrapper>
          <IssueContextWrapper>
            <IssueSpan>#{issueItem.issueId}</IssueSpan>
            <IssueSpan>
              {reportDateInfo(issueItem.reportDate, issueItem.register)}
            </IssueSpan>
            {milestoneList(issueItem.milestoneGroup)}
          </IssueContextWrapper>
        </IssueInfo>
      </IssueItemInfoGroup>
      <IssueInfoGroup></IssueInfoGroup>
    </IssueItem>
  ));
  console.log(issueInfoList);

  return (
    <Wrapper>
      <Head>
        <IssueInfoGroup>
          <CheckBox type="checkbox" />
          <IssueLink>
            <SvgImg src={openIssueImg} />
            <IssueSpan>열린 이슈(1)</IssueSpan>
          </IssueLink>
          <IssueLink>
            <SvgImg src={closeIssueImg} />
            <IssueSpan>닫힌 이슈(1)</IssueSpan>
          </IssueLink>
        </IssueInfoGroup>
        <IssueInfoGroup>
          <Dropdown
            dropdownTitle="담당자"
            dropdwonGroupTitle="담당자 필터"
            dropdownGroup={dropdownGroup}
            clickItem={clickItem}
            dropdownPopupFixPoint={FixPoint.right}
          ></Dropdown>

          <Dropdown
            dropdownTitle="레이블"
            dropdwonGroupTitle="레이블 필터"
            dropdownGroup={dropdownGroup}
            clickItem={clickItem}
            dropdownPopupFixPoint={FixPoint.right}
          ></Dropdown>

          <Dropdown
            dropdownTitle="마일스톤"
            dropdwonGroupTitle="마일스톤 필터"
            dropdownGroup={dropdownGroup}
            clickItem={clickItem}
            dropdownPopupFixPoint={FixPoint.right}
          ></Dropdown>

          <Dropdown
            dropdownTitle="작성자"
            dropdwonGroupTitle="작성자 필터"
            dropdownGroup={dropdownGroup}
            clickItem={clickItem}
            dropdownPopupFixPoint={FixPoint.right}
          ></Dropdown>
        </IssueInfoGroup>
      </Head>
      {issueInfoList}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${Color.Line};
  border: 1px solid ${Color.Line};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
`;

const Head = styled.div`
  width: 100%;
  height: 64px;
  background: ${Color.Background};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px 16px 0px 0px;
`;

const IssueItem = styled.div`
  margin: 1px 0px;
  width: 100%;
  height: 100px;
  background: ${Color.offWhite};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  :last-of-type {
    border-radius: 0px 0px 16px 16px;
  }
`;

const IssueInfoGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const IssueItemInfoGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

const IssueInfo = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;

const IssueTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 32px;
  column-gap: 8px;
  align-items: center;
`;

const IssueTitle = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 32px;
  ${Color.TitleActive}
`;

const IssueContextWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  height: 28px;
  column-gap: 16px;
`;

const CheckBox = styled.input`
  margin: 24px;
`;

const SvgImg = styled(SVG)`
  & path {
    stroke: ${(props) => props.color || Color.Label};
    fill: ${(props) => props.fill ?? null};
  }
`;

const IssueSpan = styled.span`
  color: ${Color.Label};
  align-items: center;
  display: flex;
`;

const IssueLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 24px;
  column-gap: 4px;
`;

const IssueLabel = styled.div`
  border-radius: 30px;
  padding: 0px 16px;
  background: ${(props) => props.color || Color.Label};
  height: 28px;
  align-items: center;
  display: flex;
  color: ${Color.offWhite};
`;

const IssueMilestone = styled.div`
  height: 28px;
  align-items: center;
  display: flex;
  color: ${Color.offWhite};
  column-gap: 8px;
`;
export default IssueList;
