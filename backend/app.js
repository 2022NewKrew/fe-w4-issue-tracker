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
const {createObjectWithKey} = require('./global');

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
    const rawFilter=req.query.rawFilter;
    if(rawFilter===undefined || rawFilter.match(/^\s*$/)){
      const issues=issueDB.selectAll();
      return res.send(issues).status(200);
    }
    const {authorID, milestoneTitle, labelTitle}=parseFilter(rawFilter);
    db.transaction(()=>{
      let milestoneID, labelID;
      if(milestoneTitle!==undefined){
        milestoneID=milestoneDB.selectByTitle(milestoneTitle).milestoneID;
      }
      if(labelTitle!==undefined){
        labelID=labelDB.selectByTitle(labelTitle).labelID;
      }
      const issues=issueDB.select({authorID, milestoneID, labelID});
      res.send(issues).status(200);
    })();
  }catch(e){
    console.error(e.message);
    res.sendStatus(500);
  }
});

/**
 * @param {string} rawFilter
 */
function parseFilter(rawFilter){
  const filterArray=rawFilter.split(' ').filter((val)=>val.length && val!==' ');
  let authorID, milestoneTitle, labelTitle;
  filterArray.forEach((val)=>{
    const [key, value]=val.split(':');
    switch(key){
    case 'author':
      authorID=value;
      break;
    case 'milestone':
      milestoneTitle=value;
      break;
    case 'label':
      labelTitle=value;
      break;
    default:
      throw Error('parseFilter: Invalid filter key.');
    }
  });
  return {authorID, milestoneTitle, labelTitle};
}

app.get('/issue-label', (req, res)=>{
  try{
    const issueID=req.query.issueID;
    const issueLabels=issueLabelDB.selectLabelIDsByIssueID(issueID);
    res.send(issueLabels).status(200);
  }catch(e){
    console.error(e.message);
    res.sendStatus(500);
  }
});

app.get('/label-list', (req, res)=>{
  try{
    const labels=labelDB.selectAll();
    const keyedLabels=createObjectWithKey(labels, 'labelID');
    res.send(keyedLabels).status(200);
  }catch(e){
    console.error(e.message);
    res.sendStatus(500);
  }
});

app.get('/milestone-list', (_, res)=>{
  try{
    const milestones=milestoneDB.selectAll();
    const keyedMilestones=createObjectWithKey(milestones, 'milestoneID');
    res.send(keyedMilestones).status(200);
  }catch(e){
    console.error(e.message);
    res.sendStatus(500);
  }
});
