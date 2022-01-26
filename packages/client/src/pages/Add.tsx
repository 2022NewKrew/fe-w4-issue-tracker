import AppLayout from "@components/Layout/AppLayout";
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
        </div>
        <div className="buttonGroup">
          <Button size="medium" type="text">
            작성 취소
          </Button>
          <Button size="medium">완료</Button>
        </div>
      </IssueRegisterForm>
    </AppLayout>
  );
};

export default Add;

const IssueRegisterForm = styled.form`
  ${({ theme: { flexCenter, greyscale } }) => css`
    ${flexCenter}
    width: 1280px;
    h3 {
      align-self: flex-start;
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
    .buttonGroup {
      display: flex;
      align-items: center;
      align-self: flex-end;
    }
  `}
`;
