import React, { useEffect } from 'react'
import { useIssuesState, useIssuesDispatch, getIssue } from '@Context/issues/IssuesContext'

function Issue({ id }) {
  const state = useIssuesState()
  const dispatch = useIssuesDispatch()
  useEffect(() => {
    getIssue(dispatch, id)
  }, [dispatch, id])

  const { data: issue, loading, error } = state.issue

  if (loading) return <div>로딩중..</div>
  if (error) return <div>에러가 발생했습니다</div>
  if (!issue) return null
  return (
    <div>
      <h2>{issue.issuename}</h2>
      <p>
        <b>Email:</b> {issue.email}
      </p>
    </div>
  )
}

export default Issue
