const {flatObjectArray} = require('../global');

/**
 * @param {import('better-sqlite3').Database} db
 */
module.exports=function initAssigneeDB(db){
  function createTable(){
    const stmt=db.prepare(`
      CREATE TABLE IF NOT EXISTS assignee(
        userID TEXT NOT NULL REFERENCES user
        ON DELETE CASCADE,
        issueID INTEGER NOT NULL REFERENCES issue
        ON DELETE CASCADE
      )
    `);
    stmt.run();
  }
  createTable();

  const insertStmt=db.prepare(`
    INSERT INTO assignee(userID, issueID)
    VALUES (@userID, @issueID)
  `);
  function insert({userID, issueID}){
    insertStmt.run({userID, issueID});
  }

  const removeStmt=db.prepare(`
    DELETE FROM assignee
    WHERE userID=@userID and issueID=@issueID
  `);
  function remove(userID, issueID){
    removeStmt.run({userID, issueID});
  }

  const selectUserIDByissueIDStmt=db.prepare(`
    SELECT userID FROM assignee WHERE issueID=@issueID
  `);
  function selectUserIDByissueID(issueID){
    const rows=selectUserIDByissueIDStmt.all({issueID});
    return flatObjectArray(rows, 'userID');
  }

  return {
    insert,
    remove,
    selectUserIDByissueID
  };
};
