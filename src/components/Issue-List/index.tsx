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

interface LabelInfo {
  labelID: string;
  labelName: string;
  labelColor: string;
}

interface IssueInfo {
  issueTitle: string;
  labelGroup: LabelInfo[];
  milestoneGroup: string[]; //TODO 마일스톤 형식 정의되면 바꿀 예정
  reportDate: string;
  register: string; //TODO user 형식 정의되면 바꿀 예정
  issueId: string;
  assignGroup: string[]; //TODO 담당자 형식 정의되면 바꿀 예정
}

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
      ],
      milestoneGroup: ["마스터즈 코스"],
      reportDate: "reportDate",
      register: "Oni",
      issueId: "1",
      assignGroup: ["assigUser"],
    },
  ]);

  const clickItem = (clickItemIndex: number) => {
    const newDropdownGroup = [...dropdownGroup];
    newDropdownGroup[clickItemIndex].isChecked =
      !newDropdownGroup[clickItemIndex].isChecked;
    setDropdownGroup(newDropdownGroup);
  };
  const reportDateInfo = (reportDate: string, register: string) => {
    //TODO: 현재 시간이랑 작성시간 비교해서 작성 내용 바꾸는 함수 구현 예정
    return `이 이슈가 8분 전, ${register}님에 의해 작성되었습니다`;
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
      <IssueInfoGroup>
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
      </IssueInfoGroup>
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
  width: 880px;
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
