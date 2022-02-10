import styled from "@emotion/styled";
import Icon from "@UI/Icon";
import Atoms from "@UI/Atoms";
import { CommentStatus } from "@types";
import { CustomButton } from ".";
import { useCommentFormStore, useCommentMutation } from "@stores/comment";
import { CommentForm } from "@UI/Organisms";

interface Props extends SProps {
  id: string;
  content: string;
}

const Comment = ({ id, content, status = "initial" }: Props) => {
  const { setCommentForm, commentFormMode, setcommentFormMode } =
    useCommentFormStore(id);
  const { removeLabel } = useCommentMutation(id);

  return commentFormMode === "close" ? (
    <Wrapper status={status} className="Comment">
      <Icon name="user_image_large" />
      <Atoms.Li header>
        <h2>
          UserName
          <span>TimeStamp</span>
        </h2>
        <div>
          {status === "initial" && <Atoms.Label type="athor" />}
          {status === "initial" && (
            <CustomButton.EditButton
              onClick={() => {
                setCommentForm({ content, status });
                setcommentFormMode(id);
              }}
            />
          )}
          {status === "initial" && (
            <CustomButton.RemoveButton onClick={() => removeLabel()} />
          )}
          <Icon name="smile" />
        </div>
      </Atoms.Li>
      <Atoms.Li>{content}</Atoms.Li>
    </Wrapper>
  ) : (
    <CommentForm commentId={id} />
  );
};

export default Comment;

interface SProps {
  status?: CommentStatus;
}

const Wrapper = styled(Atoms.Ul)<SProps>`
  ${({ status = "initial" }) => statusList[status]}
  width: 880px;
  margin-left: 60px;
  position: relative;
  & > svg {
    left: -60px;
  }
  & > li {
    padding: 0 24px;
    & > h2 {
      color: var(--titleActive);
      & > span {
        margin-left: 8px;
        color: var(--label);
      }
    }
    & > div {
      display: flex;
      align-items: center;
      & > .EditButton {
        margin: 0 20px 0 24px;
      }
      & > svg {
        position: static;
        margin-left: 20px;
      }
    }

    :first-of-type {
      height: 64px;
      justify-content: space-between;
    }
    :last-of-type {
      height: 60px;
      color: var(--titleActive);
    }
  }
`;

const statusList = {
  initial: `
    border: 1px solid var(--line);
    color: var(--titleActive);
    & > li:first-of-type{
        color: var(--titleActive);
        background: var(--background);
        border-bottom: 1px solid var(--line);
    }
    `,
  closed: `
    border: 1px solid #0025E7;
    color: #020070;
    & > li:first-of-type{
        color: #020070;
        background: #CCD4FF;
        border-bottom: 1px solid #0025E7;
    }
  `,
  reopen: `
    border: 1px solid var(--primary-default);
    color: var(--primary-dark);
    & > li:first-of-type{
        color: var(--primary-dark);
        background: var(--primary-light);
        border-bottom: 1px solid var(--primary-default);
    }
  `,
};
