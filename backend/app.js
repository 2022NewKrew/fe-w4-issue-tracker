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
    const rawFilter=req.query.filter;
    if(rawFilter===undefined || rawFilter.match(/^\s*$/)){
      const issues=issueDB.selectAll();
      return res.send(issues).status(200);
    }
    const {authorID, milestoneTitle, labelTitle, assigneeID}=parseFilter(rawFilter);
    db.transaction(()=>{
      let milestoneID, labelID;
      if(milestoneTitle!==undefined && milestoneTitle!==null){
        const milestone=milestoneDB.selectByTitle(milestoneTitle);
        if(milestone===undefined){
          return res.send([]).status(200);
        }
        milestoneID=milestone.milestoneID;
      }
      else if(milestoneTitle===null){
        milestoneID=null;
      }

      if(labelTitle!==undefined && labelTitle!==null){
        const label=labelDB.selectByTitle(labelTitle);
        if(label===undefined){
          return res.send([]).status(200);
        }
        labelID=label.labelID;
      }
      else if(labelTitle===null){
        labelID=null;
      }

      const issues=issueDB.select({authorID, milestoneID, labelID, assigneeID});
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
  const filterArray=rawFilter
    .split(/\s+(?=([^"]*"[^"]*")*[^"]*$)/)
    .filter((val)=>val.length && !val.match(/^\s+$/));
  let authorID, milestoneTitle, labelTitle, assigneeID;
  filterArray.forEach((val)=>{
    let [key, value]=val.split(':');
    value=value.replace(/"/g, '');
    if(!value.length){
      value=null;
    }
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
    case 'assignee':
      assigneeID=value;
      break;
    default:
      throw Error(`parseFilter: Invalid filter key: ${key}`);
    }
  });
  return {authorID, milestoneTitle, labelTitle, assigneeID};
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

app.get('/user-list', (_, res)=>{
  try{
    const users=userDB.select();
    const keyedUsers=createObjectWithKey(users, 'userID');
    res.send(keyedUsers).status(200);
  }catch(e){
    console.error(e.message);
    res.sendStatus(500);
  }
});

app.post('/api/update-issue', (req, res)=>{
  try{
    /** @type {number[]} */
    const issueIDs=req.body.issueIDs;
    const isOpen=req.body.isOpen;
    db.transaction(()=>{
      issueIDs.forEach((issueID)=>{
        if(issueDB.updateIsOpen(Number(issueID), {isOpen})===0){
          throw Error('Cannot update issue. ID:', issueID);
        }
      });
    })();
    res.sendStatus(200);
  }catch(e){
    console.error(e.message);
    res.sendStatus(500);
  }
});
