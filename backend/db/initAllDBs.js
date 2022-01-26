/**
 * @param {import('better-sqlite3').Database} db
 */
function initAllDBs(db){
  const milestoneDB=require('./milestoneDB')(db);
  const userDB=require('./userDB')(db);
  const issueDB=require('./issueDB')(db);
  const labelDB=require('./labelDB')(db);
  const issueLabelDB=require('./issueLabelDB')(db);
  const commentDB=require('./commentDB')(db);
  const assigneeDB=require('./assigneeDB')(db);

  return {
    userDB,
    milestoneDB,
    issueDB,
    labelDB,
    issueLabelDB,
    commentDB,
    assigneeDB
  };
}

module.exports=initAllDBs;
