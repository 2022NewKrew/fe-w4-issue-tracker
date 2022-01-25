const SqliteDataBase = require('better-sqlite3');
const path=require('path');
const db = new SqliteDataBase(path.resolve(__dirname, 'db.db'));
const initAllDBs=require('./initAllDBs');

/**
 * Create DB and Insert dummy data into DBs.
 * This is for development use only.
 * @param {import('better-sqlite3').Database} db
 */
function createDB(db){
  const {
    userDB, milestoneDB, issueDB, labelDB, issueLabelDB, commentDB, assigneeDB
  }=initAllDBs(db);

  userDB.insert({
    userID: 'dlguswo333',
    userAuthKey: 'daslfjad'
  });
  userDB.insert({
    userID: 'trey.lee',
    userAuthKey: 'dfafadffadf'
  });

  milestoneDB.insert({
    title: 'milestone1',
    completeTimestamp: (new Date()).toISOString(),
    isOpen: true,
    body: ''
  });
  milestoneDB.insert({
    title: 'milestone2',
    completeTimestamp: null,
    isOpen: false,
    body: ''
  });

  issueDB.insert({
    title: 'db not implemented',
    authorID: 'dlguswo333',
    timestamp: (new Date()).toISOString(),
    isOpen: true,
    milestoneID: 1,
    body: 'db is not implemented yet???'
  });
  issueDB.insert({
    title: 'fe not implemented',
    authorID: 'trey.lee',
    timestamp: (new Date()).toISOString(),
    isOpen: true,
    milestoneID: 1,
    body: 'fe is not implemented yet???'
  });

  labelDB.insert({
    title: 'implement',
    textColor: '#FFFFFF',
    backgroundColor: '#0000FF',
    body: 'help'
  });
  labelDB.insert({
    title: 'bug',
    textColor: '#FFFFFF',
    backgroundColor: '#0000FF',
    body: 'bug'
  });

  issueLabelDB.insert({
    issueID: 1,
    labelID: 1
  });
  issueLabelDB.insert({
    issueID: 1,
    labelID: 2
  });
  issueLabelDB.insert({
    issueID: 2,
    labelID: 2
  });

  commentDB.insert({
    issueID: 1,
    authorID: 'dlguswo333',
    timestamp: (new Date()).toISOString(),
    body: 'god help me'
  });
  commentDB.insert({
    issueID: 1,
    authorID: 'dlguswo333',
    timestamp: (new Date()).toISOString(),
    body: 'why me?'
  });
  commentDB.insert({
    issueID: 1,
    authorID: 'trey.lee',
    timestamp: (new Date()).toISOString(),
    body: 'why not?'
  });

  assigneeDB.insert({
    userID: 'dlguswo333',
    issueID: '1'
  });
}

createDB(db);
