import '../style/IssueList.scss';
import {getFromURL, issueListURL} from '../global';
import {useCallback, useEffect, useState} from 'react';
import Header from './Header';
import Issue from './Issue';
import MoreIcon from '../svg/More.svg';

export default function IssueList(){
  const [issueArray, setIssueArray]=useState([]);
  
  useEffect(()=>{
    getFromURL(issueListURL).then((newIssueArray)=>{
      setIssueArray(newIssueArray);
    });
  }, []);

  const getIssues=useCallback(()=>{
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
      <div className='issue-header'>
        <div className='tab-first'>
          <input type='checkbox'></input>
        </div>
        <div className='tab-second'>
          <span className='margin-right hover-item'>열린 이슈</span>
          <span className='margin-right hover-item'>닫힌 이슈</span>
        </div>
        <div className='tab-rest hover-item'>
          <span className='margin-right'>담당자</span><MoreIcon/>
        </div>
        <div className='tab-rest hover-item'>
          <span className='margin-right'>레이블</span><MoreIcon/>
        </div>
        <div className='tab-rest hover-item'>
          <span className='margin-right'>마일스톤</span><MoreIcon/>
        </div>
        <div className='tab-rest hover-item'>
          <span className='margin-right'>작성자</span><MoreIcon/>
        </div>
      </div>
      <div className='issue-container'>
        {getIssues()}
      </div>
    </div>
  );
}
