import { atom } from "recoil";

export const issueFilterBar = atom<{ id: string; name: string }[]>({
  key: "issueFilterBar",
  default: [
    { id: "1", name: "열린 이슈" },
    { id: "2", name: "내가 작성한 이슈" },
    { id: "3", name: "나에게 할당된 이슈" },
    { id: "4", name: "내가 댓글을 남긴 이슈" },
    { id: "5", name: "닫힌 이슈" },
  ],
});

export const selectFilterBarState = atom<string[]>({
  key: "selectFilterBarState",
  default: [],
});
