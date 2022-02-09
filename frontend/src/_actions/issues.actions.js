import { useRecoilState, useSetRecoilState, useResetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

import {
  issuesState,
  issueState,
  milestoneList,
  labelList,
  usersList,
} from "../_state";
import { useFetchWrapper } from "../_common/fetchWrapper.js";

export function useIssuesActions() {
  const [users, setUsers] = useRecoilState(usersList);
  const [issues, setIssues] = useRecoilState(issuesState);
  const [issue, setIssue] = useRecoilState(issueState);
  const [milestones, setMilestones] = useRecoilState(milestoneList);
  const [labels, setLabels] = useRecoilState(labelList);
  const fetchWrapper = useFetchWrapper();
  const navigate = useNavigate();

  return {
    getIssues,
    getIssue,
    createIssues,
    getAllUsers,
    getAllMilestones,
    getAllLabels,
  };

  async function getIssues() {
    await fetchWrapper
      .get("/api/issues")
      .then((res) => {
        setIssues(res);
      })
      .catch((err) => console.log(err));
  }

  async function getIssue(issueId) {
    await fetchWrapper
      .get(`/api/issues/${issueId}`)
      .then((res) => {
        setIssue(res);
        console.log("RESRES", res);
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

  async function getAllUsers() {
    await fetchWrapper
      .get("/api/users")
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => console.log(err));
  }

  async function getAllMilestones() {
    await fetchWrapper
      .get("/api/milestones")
      .then((res) => {
        setMilestones(res);
      })
      .catch((err) => console.log(err));
  }

  async function getAllLabels() {
    await fetchWrapper
      .get("/api/labels")
      .then((res) => {
        setLabels(res);
      })
      .catch((err) => console.log(err));
  }
}
