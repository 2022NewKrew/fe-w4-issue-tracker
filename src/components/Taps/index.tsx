import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { Color } from "@/common/designSystem";
import tag from "@/asset/img/tag.svg";
import milestone from "@/asset/img/milestone.svg";
import SVG from "react-inlinesvg";

interface TapsProps {
  labelGroupCount: string;
  milestoneGroupCount: string;
}

const TabGroup = {
  Label: "레이블",
  Milestone: "마일스톤",
};

const Taps: FunctionComponent<TapsProps> = ({
  labelGroupCount,
  milestoneGroupCount,
}) => {
  const goToLabelPage = () => {
    //TODO: 라벨 페이지로 이동 예정
    console.log("label");
  };

  const goToMilestonPage = () => {
    //TODO: 마일스톤 페이지로 이동 예정
    console.log("milestone");
  };
  const tapClick = {
    [TabGroup.Label]: goToLabelPage,
    [TabGroup.Milestone]: goToMilestonPage,
  };
  const handleTapClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    const tapItem = (event.target as HTMLElement).closest(".Tap");
    if (!tapItem) {
      return;
    }

    const tapItemKey = (tapItem as HTMLElement).dataset["key"];
    if (!tapItemKey) {
      return;
    }
    tapClick[tapItemKey]();
  };
  return (
    <TapsWrapper onClick={handleTapClick}>
      <Tap className="Tap" data-key={TabGroup.Label}>
        <TapIcon src={tag} />
        <TapSpan>{TabGroup.Label}</TapSpan>
        <TapSpan>({labelGroupCount})</TapSpan>
      </Tap>
      <Tap className="Tap" data-key={TabGroup.Milestone}>
        <TapIcon src={milestone} />
        <TapSpan>{TabGroup.Milestone}</TapSpan>
        <TapSpan>({milestoneGroupCount})</TapSpan>
      </Tap>
    </TapsWrapper>
  );
};

const TapsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  width: 321px;
  height: 40px;
  border: 1px solid ${Color.Line};
  border-radius: 11px;
  overflow: hidden;
`;

const TapIcon = styled(SVG)`
  margin-right: 8px;
  & path {
    stroke: ${Color.Label};
  }
`;

const TapSpan = styled.div`
  color: ${Color.Label};
  margin-right: 8px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 28px;
`;

const Tap = styled.div`
  user-select: none;
  background: ${Color.Background};
  width: 160px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  :first-of-type {
    border-right: 1px solid ${Color.Line};
  }
  :hover {
    background: ${Color.InputBackground};
  }
  :active {
    background: ${Color.Line};
    ${TapSpan} {
      color: ${Color.Body};
    }
    ${TapIcon} {
      & path {
        stroke: ${Color.Body};
      }
    }
  }
`;
export default Taps;
