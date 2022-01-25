const {flatObjectArray} = require('../global');

/**
 * @param {import('better-sqlite3').Database} db
 */
module.exports=function initMilestoneDB(db){
  function createTable(){
    const stmt=db.prepare(`
      CREATE TABLE IF NOT EXISTS issueLabel(
        issueID INTEGER NOT NULL REFERENCES issue
        ON DELETE CASCADE,
        labelID INTEGER NOT NULL REFERENCES label
        ON DELETE CASCADE
      )
    `);
    stmt.run();
  }
  createTable();
  
  const insertStmt=db.prepare(`
    INSERT INTO issueLabel(issueID, labelID)
    VALUES (@issueID, @labelID)
  `);
  function insert({issueID, labelID}){
    insertStmt.run({issueID, labelID});
  }

  const removeStmt=db.prepare(`
    DELETE FROM issueLabel
    WHERE issueID=@issueID and labelID=@labelID
  `);
  function remove(issueID, labelID){
    removeStmt.run({issueID, labelID});
  }

  const selectLabelIDByIssueIDStmt=db.prepare(`
    SELECT labelID FROM issueLabel WHERE issueID=@issueID
  `);
  /**
   * @returns {int[]}
   */
  function selectLabelIDsByIssueID(issueID){
    const rows=selectLabelIDByIssueIDStmt.all({issueID});
    return flatObjectArray(rows, 'labelID');
  }

  return {
    insert,
    remove,
    selectLabelIDsByIssueID
  };
};
