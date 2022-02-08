import Atoms from "@UI/Atoms";

import styled from "@emotion/styled";
import Icon from "@UI/Icon";
import { Issue } from "@types";
import { useIssueStore } from "@stores/issue";

interface Props {
  issue: Issue;
}

const TableCell = ({ issue }: Props) => {
  const { id, num, title, author, timestamp, labels, milestone } = issue;

  const { selectedIssue, setSelectedIssue } = useIssueStore();

  return (
    <Wrapper className="TableCell">
      <Icon
        name={
          selectedIssue.includes(id) ? "check_box_active" : "check_box_initial"
        }
        onClick={() => {
          if (selectedIssue.includes(id)) {
            setSelectedIssue((prev) => prev.filter((ele) => ele !== id));
          } else {
            setSelectedIssue((prev) => [...prev, id]);
          }
        }}
      />
      <div className="table_content">
        <Atoms.Title type="issueList">
          <Icon name="issue_open_blue" />
          {title}
          {labels.map(({ id, name, backgroundColor }) => (
            <Atoms.Label key={id} type="custom" color={backgroundColor}>
              {name}
            </Atoms.Label>
          ))}
        </Atoms.Title>
        <div className="table_content_info">
          <span>#{num}</span>
          <span>{`${author} ${timestamp}`}</span>
          <span>
            <Icon name="milestone" />
            {milestone?.name}
          </span>
        </div>
        <Icon name="user_image_small" />
      </div>
    </Wrapper>
  );
};

export default TableCell;

const Wrapper = styled.li`
  width: 100%;
  height: 100px;
  background: var(--offWhite);
  border-top: 1px solid var(--line);
  padding: 16px 32px;
  position: relative;
  & > svg {
    top: 24px;
  }
  .table_content {
    float: left;
    margin-left: 48px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    cursor: pointer;
    & > svg {
      top: 20px;
      right: 54px;
    }
    .table_content_info span {
      margin-right: 16px;
      ${({ theme }) => theme.FontSize.small};
      color: var(--label);
      svg {
        position: static;
        margin-right: 6px;
      }
    }
  }
`;
