import { initializeApp } from 'firebase/app'
import { get, getDatabase, ref, set, child } from 'firebase/database'
import { getStorage } from 'firebase/storage'


/**
 * @typedef {Object} IssueJson
 * @property {string} title
 * @property {string} authorId
 * @property {string} state
 * @property {string} labelIds
 * @property {string} milestoneId
 * @property {string} assigneeIds
 * @property {number} recentTime
 * @property {Object} histories
 */

/**
 * @typedef {Object} HistoryJson
 * @property {string} type
 * @property {string} authorId
 * @property {number} time
 * @property {string} content
 */

/**
 * @typedef {Object} UserJson
 * @property {string} name
 * @property {string} profileImgSrc
 */

/**
 * @typedef {Object} MilestoneJson
 * @property {string} title
 * @property {string} description
 * @property {string} state
 * @property {number} deadlineTime
 * @property {string} issueIds
 */

/**
 * @typedef {Object} LabelJson
 * @property {string} name
 * @property {string} description
 * @property {string} backgroundColor
 * @property {string} textColor
 */

const firebaseConfig = {
  apiKey: 'AIzaSyAK5gt3gzN2nY4GEhCChX8MVNB3_dONzCU',
  authDomain: 'issue-tracker-184ca.firebaseapp.com',
  databaseURL: 'https://issue-tracker-184ca-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'issue-tracker-184ca',
  storageBucket: 'issue-tracker-184ca.appspot.com',
  messagingSenderId: '923229978471',
  appId: '1:923229978471:web:b91c7f456cae1793b9f9c2'
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const storage = getStorage(app)

const issuesRef = ref(database, 'issues')
const usersRef = ref(database, 'users')
const milestonesRef = ref(database, 'milestones')
const labelsRef = ref(database, 'labels')

//Object에 array의 filter역할을 하는 메서드를 제공하도록 함
Object.filter = (obj, predicate) => Object.keys(obj)
  .filter(key => predicate(obj[key]))
  .reduce((res, key) => (res[key] = obj[key], res), {})

/**
 * 이슈 데이터를 파이어베이스에 저장할 형태로 변환
 * @param {Issue} issue
 * @return {[string, IssueJson]}
 */
function convertIssueToJson(issue) {
  let historiesJson = {}
  const labelIds = issue.labels.map(label => label.textColor)
  const assigneesIds = issue.assignees.map(user => user.id)
  
  issue.histories.forEach((history) => {
    const [historyId, historyJson] = convertHistoryToJson(history)
    
    historiesJson[historyId] = historyJson
  })
  
  return [ issue.id, {
    title: issue.title,
    authorId: issue.author.id,
    state: issue.state,
    labelIds: JSON.stringify(labelIds),
    milestoneId: issue.milestone.id,
    assigneeIds: JSON.stringify(assigneesIds),
    recentTime: issue.recentTime,
    histories: historiesJson
  } ]
}

/**
 * DB에서 읽은 IssueJson을 클라이언트에서 사용하기에 적합하도록 변환
 * @param {Object} issueInfo
 * @param {string} issueInfo.issueId
 * @param {IssueJson} issueInfo.issueJson
 * @return {Promise.<Issue>}
 */
async function convertIssueJsonToData({ issueId, issueJson }) {
  const labelIds = JSON.parse(issueJson.labelIds)
  const assigneeIds = JSON.parse(issueJson.assigneeIds)
  
  const [ author, labels, milestone, assignees, histories ] = await Promise.all([
    await readUser({ userId: issueJson.authorId }),
    await labelIds.map(async labelId => await readLabel({ labelId })),
    await readMilestone({ milestoneId: issueJson.milestoneId }),
    await assigneeIds.map(async userId => await readUser({ userId })),
    await Promise.all(Object.entries(issueJson.histories)
      .map(async ([ historyId, historyJson ]) => await convertHistoryJsonToData({ historyId, historyJson })))
  ])
  
  return {
    id: issueId,
    title: issueJson.title,
    author: author,
    state: issueJson.state,
    labels: labels,
    milestone: milestone,
    assignees: assignees,
    recentTime: issueJson.recentTime,
    histories: histories
  }
}

/**
 * DB에서 읽은 IssueJson을 IssueSummary로 변환
 * @param {Object} issueInfo
 * @param {string} issueInfo.issueId
 * @param {IssueJson} issueInfo.issueJson
 * @return {IssueSummary}
 */
function convertIssueJsonToSummaryData({ issueId, issueJson }) {
  return {
    id: issueId,
    title: issueJson.title,
    state: issueJson.state
  }
}

/**
 * 히스토리 데이터를 파이어베이스에 저장할 형태로 변환
 * @param {History} history
 * @return {[string, HistoryJson]}
 */
function convertHistoryToJson(history) {
  return [ history.id, {
    type: history.type,
    authorId: history.author.id,
    time: history.time,
    content: history.content
  } ]
}

/**
 * DB에서 읽은 히스토리를 클라이언트에서 사용하기에 적합하도록 변환
 * @param {Object} historyInfo
 * @param {string} historyInfo.historyId
 * @param {HistoryJson} historyInfo.historyJson
 * @return {History}
 */
async function convertHistoryJsonToData({ historyId, historyJson }) {
  const author = await readUser({ userId: historyJson.authorId })
  
  return {
    id: historyId,
    type: historyJson.type,
    author: author,
    time: historyJson.time,
    content: historyJson.content
  }
}

/**
 * 유저 데이터를 파이어베이스에 저장할 형태로 변환
 * @param {User} user
 * @return {[string, UserJson]}
 */
function convertUserToJson(user) {
  return [ user.id, {
    name: user.name,
    profileImgSrc: user.profileImgSrc
  } ]
}

/**
 * DB에서 읽은 유저를 클라이언트에서 사용하기에 적합하도록 변환
 * @param {Object} userInfo
 * @param {string} userInfo.userId
 * @param {UserJson} userInfo.userJson
 * @return {User}
 */
function convertUserJsonToData({ userId, userJson }) {
  return {
    id: userId,
    name: userJson.name,
    profileImgSrc: userJson.profileImgSrc
  }
}

/**
 * 마일스톤 데이터를 파이어베이스에 저장할 형태로 변환
 * @param {Milestone} milestone
 * @return {[string, MilestoneJson]}
 */
function convertMilestoneToJson(milestone) {
  const issueIds = milestone.issueSummaries.map(issue => issue.id)
  
  return [ milestone.id, {
    title: milestone.title,
    description: milestone.description,
    state: milestone.state,
    deadlineTime: milestone.deadlineTime,
    issueIds: JSON.stringify(issueIds)
  } ]
}

/**
 * DB에서 읽은 마일스톤을 클라이언트에서 사용하기에 적합하도록 변환
 * @param {Object} milestoneInfo
 * @param {string} milestoneInfo.milestoneId
 * @param {MilestoneJson} milestoneInfo.milestoneJson
 * @return {Milestone}
 */
async function convertMilestoneJsonToData({ milestoneId, milestoneJson }) {
  const issueIds = JSON.parse(milestoneJson.issueIds)
  const issues = await Promise.all(issueIds.map(async issueId => await readIssueSummary({ issueId })))
  
  return {
    id: milestoneId,
    title: milestoneJson.title,
    description: milestoneJson.description,
    state: milestoneJson.state,
    deadlineTime: milestoneJson.deadlineTime,
    issues: issues
  }
}

/**
 * 라벨 데이터를 파이어베이스에 저장할 형태로 변환
 * @param {Label} label
 * @return {[string, LabelJson]}
 */

function convertLabelToJson(label) {
  return [ label.id, {
    name: label.name,
    description: label.description,
    backgroundColor: label.backgroundColor,
    textColor: label.textColor
  } ]
}

/**
 * DB에서 일은 하벨을 클라이언트에서 사용하기에 적합하도록 변환
 * @param {Object} labelInfo
 * @param {string} labelInfo.labelId
 * @param {LabelJson} labelInfo.labelJson
 * @return {Label}
 */
function convertLabelJsonToData({ labelId, labelJson }) {
  return {
    id: labelId,
    name: labelJson.name,
    description: labelJson.description,
    backgroundColor: labelJson.backgroundColor,
    textColor: labelJson.textColor
  }
}

/**
 * 이슈를 파이어베이스 데이터베이스에 저장
 * @param {Issue} issue
 */
export function writeIssue(issue) {
  const [ issueId, issueJson ] = convertIssueToJson(issue)
  const issueRef = child(issuesRef, issueId)
  
  set(issueRef, issueJson)
}

/**
 * 파이어베이스 데이터베이스로부터 이슈를 조건에 따라 반환
 * @param {Object?} filterOption
 * @param {string?} filterOption.userId
 * @param {string?} filterOption.state
 * @param {string?} filterOption.authorId
 * @param {string?} filterOption.labelId
 * @return {Promise<Issue[]>}
 */
export async function readIssue(filterOption) {
  const snapshot = await get(issuesRef)
  let filteredIssues = snapshot.val()
  
  if (filterOption) {
    if (filterOption.userId) {
      filteredIssues = Object.filter(filteredIssues, issue => issue.id === filterOption.userId)
    }
    
    if (filterOption.state) {
      filteredIssues = Object.filter(filteredIssues, issue => issue.state === filterOption.state)
    }
    
    if (filterOption.authorId) {
      filteredIssues = Object.filter(filteredIssues, issue => issue.authorId === filterOption.authorId)
    }
    
    if (filterOption.labelId) {
      filteredIssues = Object.filter(filteredIssues, issue => issue.labels.contains(filterOption.labelId))
    }
  }
  
  filteredIssues = await Promise.all(Object.entries(filteredIssues)
    .map(async ([ issueId, issueJson ]) => await convertIssueJsonToData({ issueId, issueJson })))
  
  return filteredIssues
}

/**
 * 파이어베이스 데이터베이스로부터 IssueSummary를 조건에 따라 반환
 * @param {Object} filterOption
 * @param {string} filterOption.issueId
 * @return {Promise<IssueSummary[]>}
 */
export async function readIssueSummary(filterOption) {
  const snapshot = await get(issuesRef)
  let filteredIssues = snapshot.val()
  
  if (filterOption) {
    if (filterOption.issueId) {
      filteredIssues = Object.filter(filteredIssues, issue => issue.id === filterOption.issueId)
    }
  }
  
  filteredIssues = Object.entries(filteredIssues)
    .map(([ issueid, issueJson ]) => convertIssueJsonToSummaryData({ issueId, issueJson }))
  
  return filteredIssues
}

/**
 * 유저 정보를 파이어베이스 데이터베이스에 저장
 * @param {User} user
 */
export function writeUser(user) {
  const [ userId, userJson ] = convertUserToJson(user)
  const userRef = child(usersRef, userId)
  
  set(userRef, userJson)
}

/**
 * 파이어베이스 데이터베이스로부터 조건에 따라 유저 정보 반환
 * @param {Object?} filterOption
 * @param {string?} filterOption.userId
 * @return {Promise<User[]>}
 */
export async function readUser(filterOption) {
  const snapshot = await get(usersRef)
  let filteredUsers = snapshot.val()
  
  if (filterOption) {
    if (filterOption.userId) {
      filteredUsers = Object.filter(filteredUsers, user => user.id === filterOption.userId)
    }
  }
  
  filteredUsers = Object.entries(filteredUsers)
    .map(([ userId, userJson ]) => convertUserJsonToData({ userId, userJson }))
  
  return filteredUsers
}

/**
 * 마일스톤 정보를 파이어베이스 데이터베이스에 저장
 * @param {Milestone} milestone
 */
export function writeMilestone(milestone) {
  const [ milestoneId, milestoneJson ] = convertMilestoneToJson(milestone)
  const milestoneRef = child(milestonesRef, milestoneId)
  
  set(milestoneRef, milestoneJson)
}

/**
 * 파이어베이스 데이터베이스로부터 조건에 따라 마일스톤 반환
 * @param {Object?} filterOption
 * @param {string?} filterOption.milestoneId
 * @param {string?} filterOption.state
 * @return {Promise<Milestone[]>}
 */
export async function readMilestone(filterOption) {
  const snapshot = await get(milestonesRef)
  let filteredMilestones = snapshot.val()
  
  if (filterOption) {
    if (filterOption.milestoneId) {
      filteredMilestones = Object.filter(filteredMilestones, milestone => milestone.id === filterOption.milestoneId)
    }
    
    if (filterOption.state) {
      filteredMilestones = Object.filter(filteredMilestones, milestone => milestone.state === filterOption.state)
    }
  }
  
  filteredMilestones = Object.entries(filteredMilestones)
    .map(([ milestoneId, milestoneJson ]) => convertMilestoneJsonToData({ milestoneId, milestoneJson }))
  
  return filteredMilestones
}

/**
 * 라벨 정보를 파이어베이스 데이터베이스에 저장
 * @param {Label} label
 */
export function writeLabel(label) {
  const [ labelId, labelJson ] = convertLabelToJson(label)
  const labelRef = child(labelsRef, labelId)
  
  set(labelRef, labelJson)
}

/**
 * 파이어베이스 데이터베이스로부터 조건에 따라 라벨 반환
 * @param {Object} filterOption
 * @param {string} filterOption.labelId
 * @return {Promise<Label[]>}
 */
export async function readLabel(filterOption) {
  const snapshot = await get(labelsRef)
  let filteredLabels = snapshot.val()
  
  if (filterOption) {
    if (filterOption.labelId) {
      filteredLabels = Object.filter(filteredLabels, label => label.id === filterOption.labelId)
    }
  }
  
  filteredLabels = Object.entries(filteredLabels)
    .map(([ labelId, labelJson ]) => convertLabelJsonToData({ labelId, labelJson }))
  
  return filteredLabels
}