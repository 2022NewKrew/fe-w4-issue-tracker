/**
 * @param {import('better-sqlite3').Database} db
 */
module.exports=function initLabelDB(db){
  function createTable(){
    const createTableStmt=db.prepare(`
      CREATE TABLE IF NOT EXISTS label(
        labelID INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT CHECK(title <> ''),
        textColor TEXT NOT NULL DEFAULT '#000000',
        backgroundColor TEXT NOT NULL DEFAULT '#0000FF',
        body TEXT NOT NULL DEFAULT ''
      )
    `);
    createTableStmt.run();
  }
  createTable();

  const insertStmt=db.prepare(`
    INSERT INTO label(title, textColor, backgroundColor, body)
    VALUES (@title, @textColor, @backgroundColor, @body)
  `);
  function insert({title, textColor, backgroundColor, body}){
    insertStmt.run({title, textColor, backgroundColor, body});
  }

  const updateStmt=db.prepare(`
    UPDATE label SET
    title=@title,
    textColor=@textColor,
    backgroundColor=@backgroundColor,
    body=@body
    WHERE labelID=@labelID
  `);
  function update(labelID, {title, textColor, backgroundColor, body}){
    updateStmt.run({labelID, title, textColor, backgroundColor, body});
  }

  const removeStmt=db.prepare(`
    DELETE FROM label WHERE labelID=@labelID
  `);
  function remove(labelID){
    removeStmt.run({labelID});
  }

  const selectAllStmt=db.prepare(`
    SELECT * FROM label
  `);
  function selectAll(){
    return selectAllStmt.all();
  }

  return {
    insert,
    update,
    remove,
    selectAll
  };
};
