import '../style/IssueList.scss';
import {getFromURL, issueListURL} from '../global';
import {useCallback, useEffect, useState} from 'react';
import Header from './Header';
import Issue from './Issue';

export default function IssueList(){
  const [issueArray, setIssueArray]=useState([]);
  
  useEffect(()=>{
    getFromURL(issueListURL).then((newIssueArray)=>{
      setIssueArray(newIssueArray);
    });
  }, []);

  const getIssues=useCallback(()=>{
    console.log(issueArray);
    return issueArray.map(({issueID, title, authorID, timestamp, isOpen, milestoneID, body})=>{
      return (
        <Issue
          key={issueID}
          issueID={issueID}
          title={title}
          authorID={authorID}
          timestamp={timestamp}
          isOpen={isOpen}
          milestoneID={milestoneID}
          body={body}
        ></Issue>
      );
    });
  }, [issueArray]);

  return (
    <div className='IssueList'>
      <Header />
      <div className='issue-container'>
        {getIssues()}
      </div>
    </div>
  );
}
