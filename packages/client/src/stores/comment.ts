import { useParams } from "react-router-dom";
import { CommentService } from "@services";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  atomFamily,
  selector,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import { issueFormModeState } from "./issue";
import { Comment, CommentForm } from "@types";
import { useCallback } from "react";

const commentListState = atomFamily<Comment[], string>({
  key: "commentListState",
  default: [] as Comment[],
});

const commentListCountState = selector<number>({
  key: "commentListCountState",
  get: ({ get }) => {
    const issueId = get(issueFormModeState);
    const commentlList = get(commentListState(issueId));
    return commentlList.length;
  },
});

export const useCommentStore = () => {
  const issueId = useParams().id as string;
  const [commentList, setCommentList] = useRecoilState(
    commentListState(issueId)
  );
  const commentListCount = useRecoilValue(commentListCountState);

  useQuery<Comment[], Error>(
    "commentList",
    () => CommentService.getAll(issueId),
    {
      onSuccess: (data: Comment[]) => {
        setCommentList(data);
      },
    }
  );

  return {
    commentList,
    commentListCount,
  };
};

const commentFormState = atomFamily<CommentForm, string>({
  key: "commentFormState",
  default: {
    content: "",
    status: "initial",
  },
});

export type CommentFormMode = "close" | string;

const commentFormModeState = atomFamily<CommentFormMode, string>({
  key: "commentFormModeState",
  default: "close",
});

export const useCommentFormStore = (type: string) => {
  const [commentForm, setCommentForm] = useRecoilState(commentFormState(type));
  const [commentFormMode, setcommentFormMode] = useRecoilState(
    commentFormModeState(type)
  );

  return {
    commentForm,
    setCommentForm,
    setContent: (e: any) =>
      setCommentForm((prev) => ({ ...prev, content: e.target.value })),
    commentFormMode,
    setcommentFormMode,
  };
};

export const useCommentMutation = (commentId: string) => {
  const queryClient = useQueryClient();
  const issueId = useRecoilValue(issueFormModeState);
  const resetCommentForm = useResetRecoilState(commentFormState(commentId));
  const commentForm = useRecoilValue(commentFormState(commentId));
  const setcommentFormMode = useSetRecoilState(commentFormModeState(commentId));

  const onSuccess = useCallback(() => {
    queryClient.invalidateQueries("issueList");
    queryClient.invalidateQueries("commentList");
    resetCommentForm();
    setcommentFormMode("close");
  }, []);

  const addComment = useMutation(
    async () =>
      CommentService.post({
        author: "user1",
        issueId,
        commentForm,
      }),
    {
      onSuccess,
    }
  );

  const modifyComment = useMutation(
    async () => CommentService.patch({ commentId, commentForm }),
    {
      onSuccess,
    }
  );

  const removeLabel = useMutation(
    async () => CommentService.delete({ commentId, issueId }),
    {
      onSuccess,
    }
  );

  return {
    addComment: () => addComment.mutate(),
    modifyComment: () => modifyComment.mutate(),
    removeLabel: () => removeLabel.mutate(),
  };
};
