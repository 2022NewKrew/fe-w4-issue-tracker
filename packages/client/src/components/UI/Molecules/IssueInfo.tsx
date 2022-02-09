import styled from "@emotion/styled";
import { useIssueFormStore } from "@stores/issue";
import Atoms from "@UI/Atoms";
import { CustomButton } from "@UI/Molecules";
import TextInput from "./TextInput";

const IssueInfo = () => {
  const { issueForm, setTitle, issueTitleModify } = useIssueFormStore();

  return (
    <Wrapper>
      {issueTitleModify ? (
        <TextInput
          autoFocus
          label="제목"
          size="small"
          value={issueForm.title}
          onChange={setTitle}
        />
      ) : (
        <Atoms.Title size="display">
          {issueForm.title}
          <span> #2</span>
        </Atoms.Title>
      )}

      <div>
        <Atoms.Label type="open" />이 이슈가 20분전에 열렸습니다 * 코멘트 1개
      </div>
      <CustomButton.IssueDetailButton />
    </Wrapper>
  );
};
export default IssueInfo;

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--line);
  margin-bottom: 32px;
  & > .TextInput {
    width: 940px;
  }
  & > h2 > span {
    color: var(--label);
  }
  & > div {
    margin-top: 16px;
    display: flex;
    align-items: center;
    ${({ theme }) => theme.FontSize.medium}
    color: var(--body);
    & > label {
      margin-right: 8px;
    }
  }
  & > .ButtonGroup {
    position: absolute;
    top: 0;
    right: 0;
  }
`;
