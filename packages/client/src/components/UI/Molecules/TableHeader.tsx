import { Dropdown } from "@UI/Molecules";
import Atoms from "@UI/Atoms";
import Icon from "@styles/Icon";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

const labelList = ["레이블이 없는 이슈", "bug", "documentation"];
const milestonList = ["마일스톤이 없는 이슈", "마스터즈 코스"];
const managerList = ["담당자가 없는 이슈", "크롱", "죠니"];
const authorList = ["ethan.3160"];

interface IFilterTab {
  id: number;
  indicator: string;
  panelTitle: string;
  list: string[];
  direction: string;
}

const filterTabs: IFilterTab[] = [
  {
    id: 1,
    indicator: "담당자",
    panelTitle: "담당자 필터",
    list: managerList,
    direction: "right",
  },
  {
    id: 2,
    indicator: "레이블",
    panelTitle: "레이블 필터",
    list: labelList,
    direction: "right",
  },
  {
    id: 3,
    indicator: "마일스톤",
    panelTitle: "마일스톤 필터",
    list: milestonList,
    direction: "right",
  },
  {
    id: 4,
    indicator: "작성자",
    panelTitle: "작성자 필터",
    list: authorList,
    direction: "right",
  },
];

const TableHeader = () => {
  const createFilterTabs = (filterTabs: IFilterTab[]) =>
    filterTabs.map(({ indicator, panelTitle, list, direction }) => (
      <Dropdown
        key={indicator}
        indicator={indicator}
        listTitle={panelTitle}
        list={list}
        direction={direction as "left" | "right"}
      />
    ));

  return (
    <Wrapper>
      <Icon name="check_box_initial" />
      <Atoms.ButtonGroup gap={24}>
        <Atoms.Button size="small" shape="text" icon="issue_open">
          열린 이슈(2)
        </Atoms.Button>
        <Atoms.Button size="small" shape="text" icon="archive">
          열린 이슈(2)
        </Atoms.Button>
      </Atoms.ButtonGroup>
      {createFilterTabs(filterTabs)}
    </Wrapper>
  );
};

export default TableHeader;

const Wrapper = styled.div`
  ${({ theme: { Greyscale, FontSize } }) => css`
    width: 100%;
    height: 64px;
    background: ${Greyscale.background};
    padding: 16px 32px;
    position: relative;
    & > svg {
      top: 24px;
    }
    & > div:first-of-type {
      float: left;
      margin-left: 48px;
      & > button {
        width: 105px;
        height: 32px;
        ${FontSize.small};
      }
    }
    & > div:not(:first-of-type) {
      float: right;
      margin-left: 32px;
      margin-top: 10px;
    }
  `}
`;
