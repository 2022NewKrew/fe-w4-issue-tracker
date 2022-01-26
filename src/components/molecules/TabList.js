import React from "react";
import styled from "styled-components";
import { COLOR } from "@constants";
import { MilestoneIcon, TagIcon } from "@icons";
import { SmallText } from "@atoms";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  border-radius: 11px;
`;

const Tab = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid ${COLOR.GREYSCALE.LINE};

  width: 160px;
  height: 40px;
  padding: 0;

  background: ${COLOR.GREYSCALE.BACKGROUND};

  &:hover {
    background: ${COLOR.GREYSCALE.INPUT_BACKGROUND};
  }

  &:active {
    background: ${COLOR.GREYSCALE.LINE};
  }
`;

const RightTab = styled(Tab)`
  border-radius: 0 11px 11px 0;
`;

const LeftTab = styled(Tab)`
  border-radius: 11px 0 0 11px;
`;

const TabText = styled(SmallText)`
  margin-left: 10px;
`;

function TabList() {
  return (
    <Wrapper>
      <LeftTab>
        <TagIcon />
        <TabText>
          레이블 (<span>0</span>)
        </TabText>
      </LeftTab>
      <RightTab>
        <MilestoneIcon />
        <TabText>
          마일스톤 (<span>0</span>)
        </TabText>
      </RightTab>
    </Wrapper>
  );
}

export default TabList;
