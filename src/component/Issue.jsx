import '../style/Issue.scss';
import {useCallback, useState} from 'react';
import {getPrettyDate} from '../global';

export default function Issue({issueID, title, authorID, timestamp, isOpen, milestoneID, body}){
  const [milestoneArray, setMilestoneArray]=useState([]);

  const getMilestones=useCallback(()=>{
    return milestoneArray.map(()=>{
      return null;
    });
  }, [milestoneArray]);

  return (
    <div className='Issue'>
      <div className='checkbox-container'>
        <input type='checkbox'></input>
      </div>
      <div className='issue-info-container'>
        <div>{title}</div>
        <div className=''>
          <span>#{issueID}</span>
          <span>{authorID} {getPrettyDate(timestamp)} 작성됨</span>
          <span>{getMilestones()}</span>
        </div>
      </div >
      <div className='rest-container'></div>
      <div className='rest-container'></div>
      <div className='rest-container'></div>
      <div className='rest-container'></div>
    </div>
  );
}
