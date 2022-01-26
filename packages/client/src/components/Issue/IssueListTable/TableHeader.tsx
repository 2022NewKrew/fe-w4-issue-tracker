import Dropdown from "@components/common/Dropdown";

import styled from "@emotion/styled";
import theme from "@styles/theme";
import Icon from "@icon";

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
        indicator={indicator}
        panelTitle={panelTitle}
        list={list}
        direction={direction as "left" | "right"}
      />
    ));

  return (
    <Wrapper>
      <Icon name="check_box_initial" />
      <button>
        <Icon name="alert_circle" />
        열린 이슈(2)
      </button>
      <button>
        <Icon name="archive" />
        닫힌 이슈(0)
      </button>
      {createFilterTabs(filterTabs)}
    </Wrapper>
  );
};

export default TableHeader;

const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  background: ${theme.greyscale.background};
  padding: 26px 32px;
  position: relative;
  & > svg:first-of-type {
    top: 22px;
  }
  & > button {
    ${theme.text.small};
    font-weight: bold;
    padding-left: 20px;
    position: relative;
    background: transparent;
    & > svg {
      left: 0;
    }
  }
  & > button:first-of-type {
    margin: 0 24px 0 48px;
  }
  & > div {
    float: right;
    margin-left: 32px;
  }
`;
