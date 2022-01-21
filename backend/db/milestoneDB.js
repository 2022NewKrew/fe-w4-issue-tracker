/**
 * @param {import('better-sqlite3').Database} db
 */
module.exports=function initMilestoneDB(db){
  function createTable(){
    const stmt=db.prepare(`
      CREATE TABLE IF NOT EXISTS milestone(
        milestoneID INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL CHECK(title <> ''),
        completeTimestamp TEXT DEFAULT NULL,
        isOpen INTEGER DEFAULT 1 CHECK(isOpen IN (0, 1)),
        body TEXT NOT NULL DEFAULT ''
      )
    `);
    stmt.run();
  }
  createTable();
  
  const insertStmt=db.prepare(`
    INSERT INTO milestone(title, completeTimestamp, isOpen, body)
    VALUES (@title, @completeTimestamp, @isOpen, @body)
  `);
  function insert({title, completeTimestamp, isOpen, body}){
    insertStmt.run({title, completeTimestamp, isOpen, body});
  }

  const updateStmt=db.prepare(`
    UPDATE milestone SET 
    title=@title,
    completeTimestamp=@completeTimestamp,
    isOpen=@isOpen,
    body=@body
    WHERE milestoneID=@milestoneID
  `);
  function update(milestoneID, {title, completeTimestamp, isOpen, body}){
    updateStmt.run({milestoneID, title, completeTimestamp, isOpen, body});
  }

  const removeStmt=db.prepare(`
    DELETE FROM milestone WHERE milestoneID=@milestoneID
  `);
  function remove(milestoneID){
    removeStmt.run({milestoneID});
  }

  const selectByIDStmt=db.prepare(`
    SELECT * FROM milestone WHERE milestoneID=@milestoneID
  `);
  const selectAllStmt=db.prepare(`
    SELECT * FROM milestone
  `);
  /**
   * Select All milestones if `milestoneID` not given,
   * else Select only milestone with given `milestoneID`.
   * @param {string|undefined} milestoneID
   */
  function select(milestoneID){
    if(milestoneID===undefined){
      return selectAllStmt.all();
    }
    return selectByIDStmt.get({milestoneID});
  }

  return {
    insert,
    update,
    remove,
    select
  };
};
