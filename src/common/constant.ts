import { DropdownItem, DropdownType } from "@/components/Common/Dropdown";

const clientID = "965f9be513e52e58c140";
const callbackUrl = "http://localhost:3000/callback";

export const githubLoginUrl = `https://github.com/login/oauth/authorize?client_id=${clientID}&scope=repo:status read:repo_hook user:email&redirect_uri=${callbackUrl}`;

export const issueFilterGroup: DropdownItem[] = [
  {
    type: DropdownType.none,
    itemTitle: "열린이슈",
    isChecked: false,
  },
  {
    type: DropdownType.none,
    itemTitle: "내가 작성한 이슈",
    isChecked: false,
  },
  {
    type: DropdownType.none,
    itemTitle: "나에게 할당된 이슈",
    isChecked: false,
  },
  {
    type: DropdownType.none,
    itemTitle: "내가 댓글을 남긴 이슈",
    isChecked: false,
  },
  {
    type: DropdownType.none,
    itemTitle: "닫힌 이슈",
    isChecked: false,
  },
];
