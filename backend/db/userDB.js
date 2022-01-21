/**
 * @param {import('better-sqlite3').Database} db
 */
module.exports=function initUserDB(db){
  function createTable(){
    const stmt=db.prepare(`
      CREATE TABLE IF NOT EXISTS user(
        userID TEXT PRIMARY KEY NOT NULL CHECK(userID <> ''),
        authKey TEXT CHECK(authKey <> '')
      )
    `);
    stmt.run();
  }
  createTable();
  
  const insertStmt=db.prepare(`
    INSERT INTO user(userID, authKey) VALUES (@userID, @userAuthKey)
  `);
  function insert({userID, userAuthKey}){
    insertStmt.run({userID, userAuthKey});
  }

  const updateStmt=db.prepare(`
    UPDATE user SET 
    authKey=@authKey
    WHERE userID=@userID
  `);
  function update(userID, {authKey}){
    updateStmt.run({userID, authKey});
  }

  const selectByIDStmt=db.prepare(`
    SELECT * FROM user WHERE userID LIKE @userID
  `);
  const selectAllStmt=db.prepare(`
    SELECT * FROM user
  `);
  /**
   * Select All users if `userID` not given,
   * else Select only user with given `userID`.
   * @param {string|undefined} userID
   */
  function select(userID){
    if(userID===undefined){
      return selectAllStmt.all();
    }
    return selectByIDStmt.get({userID});
  }

  return {
    insert,
    update,
    select
  };
};
