const {convertIsOpenBool, convertIsOpenInt, createWhereCondition} = require('../global');

/**
 * @param {import('better-sqlite3').Database} db
 */
module.exports=function initIssueDB(db){
  function createTable(){
    const createTableStmt=db.prepare(`
      CREATE TABLE IF NOT EXISTS issue(
        issueID INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT CHECK(title <> ''),
        authorID TEXT CHECK(authorID<> ''),
        timestamp TEXT NOT NULL CHECK(timestamp<> ''),
        isOpen INTEGER DEFAULT 1 CHECK(isOpen IN (0, 1)),
        milestoneID INTEGER DEFAULT NULL REFERENCES milestone
        ON DELETE SET NULL,
        body TEXT NOT NULL DEFAULT ''
      )
    `);
    createTableStmt.run();
  }
  createTable();

  const insertStmt=db.prepare(`
    INSERT INTO issue(title, authorID, timestamp, isOpen, milestoneID, body)
    VALUES (@title, @authorID, @timestamp, @isOpen, @milestoneID, @body)
  `);
  function insert({title, authorID, timestamp, isOpen, milestoneID, body}){
    isOpen=isOpen ? 1 : 0;
    insertStmt.run({title, authorID, timestamp, isOpen, milestoneID, body});
  }

  const updateTitleStmt=db.prepare(`
    UPDATE issue SET
    title=@title
    WHERE issueID=@issueID
  `);
  function updateTitle(issueID, {title}){
    updateTitleStmt.run({issueID, title});
  }

  const updateMilestoneStmt=db.prepare(`
    UPDATE issue SET
    milestoneID=@milestoneID
    WHERE issueID=@issueID
  `);
  function updateMilestone(issueID, {milestoneID}){
    updateMilestoneStmt.run({issueID, milestoneID});
  }

  const updateBodyStmt=db.prepare(`
    UPDATE issue SET
    body=@body
    WHERE issueID=@issueID
  `);
  function updateBody(issueID, {body}){
    updateBodyStmt.run({issueID, body});
  }

  const updateIsOpenStmt=db.prepare(`
    UPDATE issue SET
    isOpen=@isOpen
    WHERE issueID=@issueID
  `);
  function updateIsOpen(issueID, {isOpen}){
    isOpen=convertIsOpenInt(isOpen);
    updateIsOpenStmt.run({issueID, isOpen});
  }

  const selectAllStmt=db.prepare(`
    SELECT * FROM issue
  `);
  function selectAll(){
    const result=selectAllStmt.all();
    convertIsOpenBool(result);
    return result;
  }

  function select({authorID, milestoneID, labelID, assigneeID}){
    const condition=[
      createWhereCondition(authorID, 'authorID'),
      createWhereCondition(milestoneID, 'milestoneID'),
      createWhereCondition(labelID, 'labelID'),
      createWhereCondition(assigneeID, 'assigneeID')
    ].filter((val)=>val.length).join(' AND ');
    const selectStmt=db.prepare(`
      SELECT * FROM
      (issue LEFT JOIN issueLabel USING (issueID))
      LEFT JOIN
      (SELECT userID assigneeID, issueID FROM assignee)
      USING (issueID)
      WHERE ${condition}
      GROUP BY issueID
    `);
    const result=selectStmt.all({authorID, milestoneID, labelID, assigneeID});
    convertIsOpenBool(result);
    return result;
  }

  return {
    insert,
    updateTitle,
    updateMilestone,
    updateBody,
    updateIsOpen,
    select,
    selectAll
  };
};
