/**
 * @param {import('better-sqlite3').Database} db
 */
module.exports=function initassigneeDB(db){
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

  const selectByissueIDStmt=db.prepare(`
    SELECT * FROM assignee WHERE issueID=@issueID
  `);
  function selectByissueID(issueID){
    return selectByissueIDStmt.all({issueID});
  }

  return {
    insert,
    remove,
    selectByissueID
  };
};
