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
    title: 'road to be',
    completeTimestamp: (new Date()).toISOString(),
    isOpen: true,
    body: ''
  });
  milestoneDB.insert({
    title: 'road to fe',
    completeTimestamp: null,
    isOpen: false,
    body: ''
  });

  issueDB.insert({
    title: 'db not implemented',
    authorID: 'dlguswo333',
    timestamp: (new Date('2022-01-14T19:24:00')).toISOString(),
    isOpen: true,
    milestoneID: 1,
    body: 'db is not implemented yet???'
  });
  issueDB.insert({
    title: 'fe not implemented',
    authorID: 'trey.lee',
    timestamp: (new Date('2021-12-17T03:24:00')).toISOString(),
    isOpen: true,
    milestoneID: 2,
    body: 'fe is not implemented yet???'
  });
  issueDB.insert({
    title: 'run redux',
    authorID: 'trey.lee',
    timestamp: (new Date('2021-01-15T12:12:37')).toISOString(),
    isOpen: false,
    milestoneID: null,
    body: 'closed issue because I currently have no time to learn redux'
  });

  labelDB.insert({
    title: 'implement',
    textColor: '#FFFFFF',
    backgroundColor: '#004DE3',
    body: 'help'
  });
  labelDB.insert({
    title: 'bug',
    textColor: '#FFFFFF',
    backgroundColor: '#004DE3',
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
