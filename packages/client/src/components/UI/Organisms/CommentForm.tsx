import styled from "@emotion/styled";
import { useCommentFormStore, useCommentMutation } from "@stores/comment";
import Icon from "@UI/Icon";
import { CustomButton, TextArea } from "@UI/Molecules";
import { FormEvent, useCallback } from "react";

interface Props {
  commentId: string;
}

const CommentForm = ({ commentId }: Props) => {
  const { commentForm, setContent, setcommentFormMode } =
    useCommentFormStore(commentId);

  const { addComment, modifyComment } = useCommentMutation(commentId);

  const onCancel = useCallback(() => setcommentFormMode("close"), [commentId]);

  const onSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    if (commentId === "add") {
      addComment();
    } else {
      modifyComment();
    }
  }, []);

  return (
    <Wrapper className="CommentForm" onSubmit={onSubmit}>
      <Icon name="user_image_large" />
      <TextArea
        autoFocus={commentId !== "add"}
        value={commentForm.content}
        onChange={setContent}
        width={880}
        height={343}
      />
      <CustomButton.FormButton
        onCancel={onCancel}
        formMode={commentId}
        disabled={!commentForm.content}
      />
    </Wrapper>
  );
};

export default CommentForm;

const Wrapper = styled.form`
  width: 880px;
  margin-left: 60px;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  & > svg {
    left: -60px;
  }
  & > .ButtonGroup,
  & > .FormButton {
    margin-top: 24px;
    align-self: flex-end;
  }
`;
