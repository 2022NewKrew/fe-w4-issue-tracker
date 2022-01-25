const SqliteDataBase = require('better-sqlite3');
const path=require('path');
const dbPath='db';
const dbFileName='db.db';
const db = new SqliteDataBase(path.resolve(__dirname, dbPath, dbFileName));
const initAllDBs=require('./db/initAllDBs');
const express=require('express');
const app=express();
const appPort=8080;
const cors=require('cors');

const {
  userDB, milestoneDB, issueDB, labelDB, issueLabelDB, commentDB, assigneeDB
}=initAllDBs(db);

/**
 * Without using json middleware, express cannot parse request body.
 */
app.use(express.json());
app.use(cors());
app.listen(appPort, ()=>{
  console.log('express is listening');
});

app.get('/issue-list', (req, res)=>{
  try{
    const issues=issueDB.select();
    res.send(issues).status(200);
  }catch{
    res.sendStatus(500);
  }
});

app.get('/issue-label', (req, res)=>{
  try{
    const issueID=req.query.issueID;
    const issueLabels=issueLabelDB.selectLabelIDsByIssueID(issueID);
    res.send(issueLabels).status(200);
  }catch{
    res.sendStatus(500);
  }
});
