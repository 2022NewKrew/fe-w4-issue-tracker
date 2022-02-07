import { useRecoilState, useSetRecoilState, useResetRecoilState } from "recoil";
import { userState, issuesState } from "../_state";

import { instance } from "../_common/axios.js";

export function useIssuesActions() {
  const [issues, setIssues] = useRecoilState(issuesState);
  // const [openIssues, setOpenIssues] = useRecoilState(issuesState);

  return { getIssues };

  async function getIssues() {
    await instance
      .get("/api/issues")
      .then((res) => {
        setIssues(res.data);
      })
      .catch((err) => console.log(err));
  }

  // function getOpenIssues() {
  //   const open =
  //     issues &&
  //     issues.filter((issue) => {
  //       issue.status === "open";
  //     });
  //   setOpenIssues(open);
  // }

  //   function login({ username, password }) {
  //     return fetchWrapper
  //       .post(`${baseUrl}/authenticate`, { username, password })
  //       .then((user) => {
  //         // store user details and jwt token in local storage to keep user logged in between page refreshes
  //         localStorage.setItem("user", JSON.stringify(user));
  //         setAuth(user);

  //         // get return url from location state or default to home page
  //         const { from } = history.location.state || { from: { pathname: "/" } };
  //         history.push(from);
  //       });
  //   }

  //   function logout() {
  //     // remove user from local storage, set auth state to null and redirect to login page
  //     localStorage.removeItem("user");
  //     setAuth(null);
  //     history.push("/account/login");
  //   }

  //   function register(user) {
  //     return fetchWrapper.post(`${baseUrl}/register`, user);
  //   }

  //   function getAll() {
  //     return fetchWrapper.get(baseUrl).then(setUsers);
  //   }

  //   function getById(id) {
  //     return fetchWrapper.get(`${baseUrl}/${id}`).then(setUser);
  //   }

  //   function update(id, params) {
  //     return fetchWrapper.put(`${baseUrl}/${id}`, params).then((x) => {
  //       // update stored user if the logged in user updated their own record
  //       if (id === auth?.id) {
  //         // update local storage
  //         const user = { ...auth, ...params };
  //         localStorage.setItem("user", JSON.stringify(user));

  //         // update auth user in recoil state
  //         setAuth(user);
  //       }
  //       return x;
  //     });
  //   }

  //   // prefixed with underscored because delete is a reserved word in javascript
  //   function _delete(id) {
  //     setUsers((users) =>
  //       users.map((x) => {
  //         // add isDeleting prop to user being deleted
  //         if (x.id === id) return { ...x, isDeleting: true };

  //         return x;
  //       })
  //     );

  //     return fetchWrapper.delete(`${baseUrl}/${id}`).then(() => {
  //       // remove user from list after deleting
  //       setUsers((users) => users.filter((x) => x.id !== id));

  //       // auto logout if the logged in user deleted their own record
  //       if (id === auth?.id) {
  //         logout();
  //       }
  //     });
  //   }
}
