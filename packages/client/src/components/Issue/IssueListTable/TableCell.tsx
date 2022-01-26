import Label from "@components/common/Label";

import styled from "@emotion/styled";
import theme from "@styles/theme";
import Icon from "@icon";

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
  return (
    <Wrapper>
      <Icon name="check_box_initial" />
      <div className="table_content">
        <div className="table_content_title">
          <Icon name="alert_circle" />
          {title}
          {label.map(({ title, color }, idx) => (
            <Label key={idx} color={color}>
              {title}
            </Label>
          ))}
        </div>
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
