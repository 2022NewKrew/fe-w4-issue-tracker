import React, { createContext, useReducer, useContext } from 'react'
import axios from 'axios'

// UsersContext 에서 사용 할 기본 상태
const issueInitialState = {
  issues: {
    loading: false,
    data: null,
    error: null
  },
  issue: {
    loading: false,
    data: null,
    error: null
  }
}

// 로딩중일 때 바뀔 상태 객체
const loadingState = {
  loading: true,
  data: null,
  error: null
}

// 성공했을 때의 상태 만들어주는 함수
const success = data => ({
  loading: false,
  data,
  error: null
})

// 실패했을 때의 상태 만들어주는 함수
const error = error => ({
  loading: false,
  data: null,
  error: error
})

// 위에서 만든 객체 / 유틸 함수들을 사용하여 리듀서 작성
function issuesReducer(state, action) {
  switch (action.type) {
    case 'GET_ISSUES':
      return {
        ...state,
        issues: loadingState
      }
    case 'GET_ISSUES_SUCCESS':
      return {
        ...state,
        issues: success(action.data)
      }
    case 'GET_ISSUES_ERROR':
      return {
        ...state,
        issues: error(action.error)
      }
    case 'GET_ISSUE':
      return {
        ...state,
        issue: loadingState
      }
    case 'GET_ISSUE_SUCCESS':
      return {
        ...state,
        issue: success(action.data)
      }
    case 'GET_ISSUE_ERROR':
      return {
        ...state,
        issue: error(action.error)
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

// State 용 Context 와 Dispatch 용 Context 따로 만들어주기
const IssuesStateContext = createContext(null)
const IssuesDispatchContext = createContext(null)

// 위에서 선언한 두가지 Context 들의 Provider 로 감싸주는 컴포넌트
export function IssuesProvider({ children }) {
  const [state, dispatch] = useReducer(issuesReducer, issueInitialState)
  return (
    <IssuesStateContext.Provider value={state}>
      <IssuesDispatchContext.Provider value={dispatch}>
        {children}
      </IssuesDispatchContext.Provider>
    </IssuesStateContext.Provider>
  )
}

// State 를 쉽게 조회 할 수 있게 해주는 커스텀 Hook
export function useIssuesState() {
  const state = useContext(IssuesStateContext)
  if (!state) {
    throw new Error('Cannot find IssuesProvider')
  }
  return state
}

// Dispatch 를 쉽게 사용 할 수 있게 해주는 커스텀 Hook
export function useIssuesDispatch() {
  const dispatch = useContext(IssuesDispatchContext)
  if (!dispatch) {
    throw new Error('Cannot find IssuesProvider')
  }
  return dispatch
}

const issuesURL = 'https://jsonplaceholder.typicode.com/users'

export async function getIssues(dispatch) {
  dispatch({ type: 'GET_ISSUES' })
  try {
    const response = await axios.get(issuesURL)
    dispatch({ type: 'GET_ISSUES_SUCCESS', data: response.data })
  } catch (e) {
    dispatch({ type: 'GET_ISSUES_ERROR', error: e })
  }
}

export async function getIssue(dispatch, id) {
  dispatch({ type: 'GET_ISSUE' });
  try {
    const response = await axios.get(`${issuesURL}/${id}`)
    dispatch({ type: 'GET_ISSUE_SUCCESS', data: response.data })
  } catch (e) {
    dispatch({ type: 'GET_ISSUE_ERROR', error: e });
  }
}
