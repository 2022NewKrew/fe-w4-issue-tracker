import Atoms from "@UI/Atoms";

import styled from "@emotion/styled";
import Icon from "@UI/Icon";
import { useClickLink } from "@hooks";

interface Props {
  issue: {
    id: number;
    title: string;
    author: string;
    time: string;
    label: { title: string; color: string }[];
    milestone: string;
  };
}

const TableCell = ({
  issue: { id, title, author, time, label, milestone },
}: Props) => {
  const onClickLink = useClickLink("id");
  return (
    <Wrapper className="TableCell" onClick={onClickLink}>
      <Icon name="check_box_initial" />
      <div className="table_content">
        <Atoms.Title type="issueList">
          <Icon name="issue_open_blue" />
          {title}
          {label.map(({ title, color }, idx) => (
            <Atoms.Label key={idx} type="custom" color={color}>
              {title}
            </Atoms.Label>
          ))}
        </Atoms.Title>
        <div className="table_content_info">
          <span>#{id}</span>
          <span>{`${author} ${time}`}</span>
          <span>
            <Icon name="milestone" />
            {milestone}
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
