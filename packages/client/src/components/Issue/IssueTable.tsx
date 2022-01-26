import Dropdown from "@components/common/Dropdown";
import Label from "@components/common/Label";

import styled from "@emotion/styled";
import theme from "@styles/theme";
import Icon from "@icon";

const labelList = ["레이블이 없는 이슈", "bug", "documentation"];
const milestonList = ["마일스톤이 없는 이슈", "마스터즈 코스"];
const managerList = ["담당자가 없는 이슈", "크롱", "죠니"];

const IssueTable = () => {
  return (
    <Wrapper>
      <TableHeader>
        <Icon name="check_box_initial" />
        <button>
          <Icon name="alert_circle" />
          열린 이슈(2)
        </button>
        <button>
          <Icon name="archive" />
          닫힌 이슈(0)
        </button>
        <Dropdown
          indicator="담당자"
          panelTitle="담당자 필터"
          list={managerList}
          direction="right"
        />
        <Dropdown
          indicator="레이블"
          panelTitle="레이블 필터"
          list={labelList}
          direction="right"
        />
        <Dropdown
          indicator="마일스톤"
          panelTitle="마일스톤 필터"
          list={milestonList}
          direction="right"
        />
        <Dropdown
          indicator="작성자"
          panelTitle="작성자 필터"
          list={["ethan.3160"]}
          direction="right"
        />
      </TableHeader>
      <TableCell>
        <Icon name="check_box_initial" />
        <div className="table_content">
          <div className="table_content_title">
            <Icon name="alert_circle" />
            이슈 제목
            <Label color="#004DE3">레이블 이름</Label>
          </div>
          <div className="table_content_info">
            <span>#이슈번호</span>
            <span>작성자 및 타임스탬프 정보</span>
            <span>
              <Icon name="milestone" />
              마스터즈
            </span>
          </div>
          <Icon name="user_image_small" />
        </div>
      </TableCell>
    </Wrapper>
  );
};

export default IssueTable;

const Wrapper = styled.section`
  ${theme.flexCenter}
  margin-top: 24px;
  width: 100%;
  border: 1px solid ${theme.greyscale.line};
  border-radius: 16px;
  div:first-child {
    border-radius: 16px 16px 0 0;
  }
  li:last-child {
    border-radius: 0 0 16px 16px;
  }
`;

const TableHeader = styled.div`
  width: 100%;
  height: 64px;
  background: ${theme.greyscale.background};
  padding: 26px 32px;
  position: relative;
  & > svg:first-child {
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

const TableCell = styled.li`
  width: 100%;
  height: 100px;
  background: ${theme.greyscale.offWhite};
  border-top: 1px solid ${theme.greyscale.line};
  padding: 16px 0 16px 80px;
  position: relative;
  & > svg {
    top: 24px;
    left: 32px;
  }
  .table_content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    position: relative;
    & > svg {
      top: 20px;
      right: 54px;
    }
    .table_content_title {
      ${theme.text.medium}
      display: flex;
      align-items: center;
      padding-left: 24px;
      position: relative;
      font-weight: bold;
      color: ${theme.greyscale.titleActive};
      svg {
        top: 5px;
        left: 0;
      }
      label {
        margin-left: 8px;
      }
    }
    .table_content_info span {
      margin-right: 16px;
      ${theme.text.small}
      color: ${theme.greyscale.label};
      svg {
        position: static;
        margin-right: 6px;
      }
    }
  }
`;
