import React, { useState } from 'react'
import { useIssuesState, useIssuesDispatch, getIssues } from '@Context/issues/IssuesContext'
import Issue from '@Atoms/Issue'

function Issues() {
  const [issueId, setIssueId] = useState(null)
  const state = useIssuesState()
  const dispatch = useIssuesDispatch()

  const { data: issues, loading, error } = state.issues
  const fetchData = () => {
    getIssues(dispatch)
  }

  if (loading) return <div>로딩중..</div>
  if (error) return <div>에러가 발생했습니다</div>
  if (!issues) return <button onClick={fetchData}>불러오기</button>

  return (
    <>
      <ul>
        {issues.map(issue => (
          <li
            key={issue.id}
            onClick={() => setIssueId(issue.id)}
            style={{ cursor: 'pointer' }}
          >
            {issue.issuename} ({issue.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchData}>다시 불러오기</button>
      {issueId && <Issue id={issueId} />}
    </>
  )
}

export default Issues
