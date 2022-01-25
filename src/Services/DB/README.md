# firebase 데이터베이스 구성

## 데이터베이스 구조                  

- root
  - issues
    - (issueId)
      - title
      - authorId
      - state: 'open' | 'close'
      - labelIds: '[labelId, ...]'
      - milestoneId
      - assigneeIds: '[userId, ...]'
      - recentTime
      - histories
        - (historyId)
          - type: 'open' | 'comment' | 'close'
          - authorId
          - time
          - content
  - labels
    - (labelId)
      - name
      - description
      - backgroundColor
      - textColor
  - milestones
    - (milestoneId)
      - title
      - description
      - state
      - deadlineTime
      - issueIds: '[issueId, ...]'
  - users
    - (userId)
      - name
      - profileImgSrc