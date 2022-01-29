import Label from "@components/common/Label";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
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
          <Icon name="issue_open_blue" />
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
  ${({ theme: { greyscale, text } }) => css`
    width: 100%;
    height: 100px;
    background: ${greyscale.offWhite};
    border-top: 1px solid ${greyscale.line};
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
      .table_content_title {
        ${text.medium}
        display: flex;
        align-items: center;
        padding-left: 24px;
        position: relative;
        font-weight: bold;
        color: ${greyscale.titleActive};
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
        ${text.small}
        color: ${greyscale.label};
        svg {
          position: static;
          margin-right: 6px;
        }
      }
    }
  `}
`;
