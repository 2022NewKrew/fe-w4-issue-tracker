import { SideBar } from "@UI/Organisms";
import { TextArea, TextInput } from "@UI/Molecules";
import Atoms from "@UI/Atoms";
import Icon from "@UI/Icon";

import { useInput } from "@hooks";

import styled from "@emotion/styled";

const IssueRegisterForm = () => {
  const [title, onChangeTitle] = useInput("");
  const [text, onChangeText] = useInput("");
  return (
    <Wrapper className="IssueRegisterForm">
      <Atoms.Title>새로운 이슈 작성</Atoms.Title>
      <div className="formBody">
        <Icon name="user_image_large" />
        <TextInput
          label="제목"
          size="medium"
          value={title}
          onChange={onChangeTitle}
        />
        <TextArea
          value={text}
          onChange={onChangeText}
          width={880}
          height={343}
        />
        <SideBar />
      </div>
      <Atoms.ButtonGroup direction="row" gap={32}>
        <Atoms.Button size="medium" shape="text" icon="x_square" link="/issue">
          작성 취소
        </Atoms.Button>
        <Atoms.Button size="medium" type="submit">
          완료
        </Atoms.Button>
      </Atoms.ButtonGroup>
    </Wrapper>
  );
};

export default IssueRegisterForm;

const Wrapper = styled.form`
  width: 1280px;
  .formBody {
    width: 100%;
    padding: 32px 340px 32px 60px;
    position: relative;
    border: 1px solid var(--line);
    border-left: none;
    border-right: none;
    margin: 32px 0;
    & > svg {
      left: 0;
    }
    & > .TextInput {
      width: 880px;
      margin-bottom: 8px;
    }
    & > .SideBar {
      top: 32px;
      right: 0;
    }
  }
  & > .ButtonGroup {
    justify-content: flex-end;
  }
`;
