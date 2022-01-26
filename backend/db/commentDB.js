/**
 * @param {import('better-sqlite3').Database} db
 */
module.exports=function initCommentDB(db){
  function createTable(){
    const stmt=db.prepare(`
        CREATE TABLE IF NOT EXISTS comment(
          commentID INTEGER PRIMARY KEY AUTOINCREMENT,
          issueID INTEGER REFERENCES issue
          ON DELETE CASCADE,
          authorID TEXT REFERENCES user(userID),
          timestamp TEXT NOT NULL CHECK(timestamp <> ''),
          body TEXT NOT NULL DEFAULT ''
        )
      `);
    stmt.run();
  }
  createTable();

  const insertStmt=db.prepare(`
    INSERT INTO comment(issueID, authorID, timestamp, body)
    VALUES (@issueID, @authorID, @timestamp, @body)
  `);
  function insert({issueID, authorID, timestamp, body}){
    insertStmt.run({issueID, authorID, timestamp, body});
  }

  const updateStmt=db.prepare(`
    UPDATE comment SET
    body=@body
    WHERE commentID=@commentID
  `);
  function update(commentID, {body}){
    updateStmt.run({commentID, body});
  }

  const removeStmt=db.prepare(`
    DELETE FROM comment WHERE commentID=@commentID
  `);
  function remove(commentID){
    removeStmt.run({commentID});
  }

  const selectByIssueIDStmt=db.prepare(`
    SELECT * FROM comment WHERE issueID=@issueID
  `);
  function selectByIssueID(issueID){
    return selectByIssueIDStmt.all({issueID});
  }

  return {
    insert,
    update,
    remove,
    selectByIssueID
  };

};
