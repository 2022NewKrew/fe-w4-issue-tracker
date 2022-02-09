import Atoms from "@UI/Atoms";

import styled from "@emotion/styled";
import Icon from "@UI/Icon";
import { Issue } from "@types";
import { useIssueStore } from "@stores/issue";

interface Props {
  issue: Issue;
}

const IssueTableCell = ({ issue }: Props) => {
  const { selectedIssue, setSelectedIssue } = useIssueStore();
  const { id, num, title, author, timestamp, labels, milestone } = issue;

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
          {milestone && (
            <span>
              <Icon name="milestone" />
              {milestone.name}
            </span>
          )}
        </div>
      </div>
      <Icon name="user_image_small" />
    </Wrapper>
  );
};

export default IssueTableCell;

const Wrapper = styled(Atoms.Li)`
  height: 100px;
  padding-left: 80px;
  & > svg {
    top: 24px;
    left: 32px;
    :last-of-type {
      position: static;
      margin-right: 32px;
    }
  }
  .table_content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    cursor: pointer;
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
