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
    updateIssue,
    updateIssueStatus,
    deleteIssue,
    getAllUsers,
    getAllMilestones,
    getAllLabels,
    createComment,
    updateComment,
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
      })
      .catch((err) => console.log(err));
  }

  function createIssues(data) {
    fetchWrapper
      .post("/api/issues", data)
      .then((res) => {
        const createdIssueId = res.id;
        navigate(`/issues/${createdIssueId}`);
      })
      .catch((err) => console.log(err));
  }

  async function updateIssue(issueId, data) {
    fetchWrapper
      .patch(`/api/issues/${issueId}`, data)
      .then((res) => {
        console.log(res);
        getIssue(issueId);
      })
      .catch((err) => console.log(err));
  }

  async function updateIssueStatus(issueId) {
    fetchWrapper
      .patch(`/api/issues/${issueId}/status`)
      .then((res) => {
        console.log(res);
        getIssue(issueId);
      })
      .catch((err) => console.log(err));
  }

  async function deleteIssue(issueId) {
    fetchWrapper
      .delete(`/api/issues/${issueId}`)
      .then((res) => {
        console.log(res);
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

  async function createComment(issueId, data) {
    fetchWrapper
      .post(`/api/issues/${issueId}/comment`, data)
      .then((res) => {
        console.log(res);
        getIssue(issueId);
      })
      .catch((err) => console.log(err));
  }

  async function updateComment(issueId, commentId, data) {
    fetchWrapper
      .patch(`/api/comments/${commentId}/`, data)
      .then((res) => {
        getIssue(issueId);
      })
      .catch((err) => console.log(err));
  }
}
