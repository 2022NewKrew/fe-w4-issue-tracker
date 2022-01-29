import AppLayout from "@components/Layout/AppLayout";
import ButtonGroup from "@components/common/ButtonGroup";
import Button from "@components/common/Button";
import Icon from "@components/common/Icon";
import TextArea from "@components/common/TextArea";
import TextInput from "@components/common/TextInput";
import { useInput } from "@hooks";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Add = () => {
  const [title, onChangeTitle] = useInput("");
  const [text, onChangeText] = useInput("");
  return (
    <AppLayout>
      <IssueRegisterForm>
        <h3>새로운 이슈 작성</h3>
        <div className="formBody">
          <Icon name="user_image_large" />
          <TextInput
            id="issueRegisterform-title"
            label="제목"
            size="medium"
            value={title}
            onChange={onChangeTitle}
          />
          <TextArea value={text} onChange={onChangeText} height={343} />
          <SideBar>
            <li></li>
            <li></li>
            <li></li>
          </SideBar>
        </div>
        <ButtonGroup direction="row" gap={32}>
          <Button size="medium" shape="text" icon="x_square" link="/issue">
            작성 취소
          </Button>
          <Button size="medium">완료</Button>
        </ButtonGroup>
      </IssueRegisterForm>
    </AppLayout>
  );
};

export default Add;

const SideBar = styled.ul`
  ${({ theme: { greyscale } }) => css`
    position: absolute;
    top: 32px;
    right: 0;
    width: 308px;
    height: min-content;
    border: 1px solid ${greyscale.line};
    border-radius: 16px;
  `}
`;

const IssueRegisterForm = styled.form`
  ${({ theme: { flexCenter, greyscale } }) => css`
    ${flexCenter}
    width: 1280px;
    h3 {
      align-self: flex-start;
    }
    & > div:nth-of-type(2) {
      width: 100%;
      justify-content: flex-end;
    }
    .formBody {
      & > svg {
        left: 0;
      }
      & > div:first-of-type {
        margin-bottom: 8px;
      }
      width: 100%;
      padding: 32px 340px 32px 60px;
      position: relative;
      border: 1px solid ${greyscale.line};
      border-left: none;
      border-right: none;
      margin: 32px 0;
    }
  `}
`;
