import styled from "@emotion/styled";
import { useCommentStore } from "@stores/comment";
import { Comment } from "@UI/Molecules";
import { CommentForm } from "@UI/Organisms";

const CommentList = () => {
  const { commentList } = useCommentStore();
  return (
    <Wrapper>
      {commentList.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
      <CommentForm commentId="add" />
    </Wrapper>
  );
};

export default CommentList;

const Wrapper = styled.div`
  position: relative;
  & > .Comment {
    margin-bottom: 24px;
    :last-of-type {
      margin-bottom: 40px;
    }
  }
`;
