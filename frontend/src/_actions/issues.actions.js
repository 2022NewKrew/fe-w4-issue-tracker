import { useRecoilState, useSetRecoilState, useResetRecoilState } from "recoil";
import { userState, issuesState } from "../_state";
import { useFetchWrapper } from "../_common/fetchWrapper.js";

import { instance } from "../_common/axios.js";

export function useIssuesActions() {
  const [issues, setIssues] = useRecoilState(issuesState);
  const fetchWrapper = useFetchWrapper();

  return { getIssues };

  async function getIssues() {
    fetchWrapper
      .get("/api/issues")
      .then((res) => {
        setIssues(res);
      })
      .catch((err) => console.log(err));
  }
}
