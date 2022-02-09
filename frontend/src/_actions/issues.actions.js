import { useRecoilState, useSetRecoilState, useResetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

import { issuesState, milestoneList, labelList, usersList } from "../_state";
import { useFetchWrapper } from "../_common/fetchWrapper.js";

export function useIssuesActions() {
  const [users, setUsers] = useRecoilState(usersList);
  const [issues, setIssues] = useRecoilState(issuesState);
  const [milestones, setMilestones] = useRecoilState(milestoneList);
  const [labels, setLabels] = useRecoilState(labelList);
  const fetchWrapper = useFetchWrapper();
  const navigate = useNavigate();

  return {
    getIssues,
    createIssues,
    getAllUsers,
    getAllMilestones,
    getAllLabels,
  };

  async function getIssues() {
    fetchWrapper
      .get("/api/issues")
      .then((res) => {
        setIssues(res);
      })
      .catch((err) => console.log(err));
  }

  function createIssues(data) {
    fetchWrapper
      .post("/api/issues", data)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  function getAllUsers() {
    fetchWrapper
      .get("/api/users")
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => console.log(err));
  }

  function getAllMilestones() {
    fetchWrapper
      .get("/api/milestones")
      .then((res) => {
        setMilestones(res);
      })
      .catch((err) => console.log(err));
  }

  function getAllLabels() {
    fetchWrapper
      .get("/api/labels")
      .then((res) => {
        setLabels(res);
      })
      .catch((err) => console.log(err));
  }
}
