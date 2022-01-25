import { generateId } from '../Utils/idGenerator'

/**
 * @typedef {Object} Issue
 * @property {string} id
 * @property {string} title
 * @property {User} author
 * @property {string} state
 * @property {Label[]} labels
 * @property {Milestone} milestone
 * @property {User[]} assignees
 * @property {number} recentTime
 * @property {History[]} histories
 */

/**
 * @typedef {Object} IssueSummary
 * @property {string} id
 * @property {string} title
 * @property {string} state
 */

/**
 * @typedef {Object} History
 * @property {string} id
 * @property {string} type
 * @property {User} author
 * @property {number} time
 * @property {string} content
 */

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {string} profileImgSrc
 */

/**
 * @typedef {Object} Milestone
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} state
 * @property {number} deadlineTime
 * @property {IssueSummary[]} issueSummaries
 */

/**
 * @typedef {Object} Label
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {string} backgroundColor
 * @property {string} textColor
 */


/**
 * Issue 생성
 * @param {Object} issueOption
 * @param {string} issueOption.title
 * @param {User} issueOption.author
 * @param {Label[]} issueOption.labels
 * @param {Milestone} issueOption.milestone
 * @param {User[]} issueOption.assignees
 * @return {Issue}
 */
export function createIssue({ title, author, labels, milestone, assignees }) {
  const currentTime = new Date().getTime()
  const issueId = generateId()
  const openHistory = createHistory({
    type: 'open',
    author: author,
    content: ''
  })
  
  return {
    id: issueId,
    title: title,
    author: author,
    state: 'open',
    labels: labels,
    milestone: milestone,
    assignees: assignees,
    recentTime: currentTime,
    histories: [ openHistory ]
  }
}

/**
 * History 생성
 * @param {Object} historyOption
 * @param {string} historyOption.type
 * @param {User} historyOption.author
 * @param {string} historyOption.content
 * @return {History}
 */
export function createHistory({ type, author, content }) {
  const id = generateId()
  const currentTime = new Date().getTime()
  
  return {
    id: id,
    type: type,
    author: author,
    time: currentTime,
    content: content
  }
}

/**
 * User 생성
 * @param {Object} userOption
 * @param {string} userOption.name
 * @param {string} userOption.profileImgSrc
 * @return {User}
 */
export function createUser({ name, profileImgSrc }) {
  const id = generateId()
  const defaultProfileImgSrc = 'userProfile/nago.jpeg'
  
  return {
    id: id,
    name: name,
    profileImgSrc: profileImgSrc ? profileImgSrc : defaultProfileImgSrc
  }
}

/**
 * Milestone 생성
 * @param {Object} milestoneOption
 * @param {string} milestoneOption.title
 * @param {string} milestoneOption.description
 * @param {string} milestoneOption.state
 * @param {Date} milestoneOption.deadlineDate
 * @return {Milestone}
 */
export function createMilestone({ title, description, state, deadlineDate }) {
  const id = generateId()
  
  return {
    id: id,
    title: title,
    description: description,
    state: state,
    deadlineTime: deadlineDate.getTime(),
    issueSummaries: []
  }
}

/**
 * Label 생성
 * @param {Object} labelOption
 * @param {string} labelOption.name
 * @param {string} labelOption.description
 * @param {string} labelOption.backgroundColor
 * @param {string} labelOption.textColor
 * @return {Label}
 */
export function createLabel({ name, description, backgroundColor, textColor }) {
  const id = generateId()
  
  return {
    id: id,
    name: name,
    description: description,
    backgroundColor: backgroundColor,
    textColor: textColor
  }
}

/**
 * Issue 타입의 객체를 IssueSummary로 줄임
 * @param {Issue} issue
 * @return {IssueSummary}
 */
export function convertIssueToSummary(issue) {
  return {
    id: issue.id,
    title: issue.title,
    state: issue.state
  }
}