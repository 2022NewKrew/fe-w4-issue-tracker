import '../style/Issue.scss';
import {getFromURL, getPrettyDate, issueLabelURL} from '../global';
import {useCallback, useEffect, useState} from 'react';
import AlertCircle from '../svg/AlertCircle.svg';
import {useNavigate} from 'react-router-dom';

export default function Issue({issueID, title, authorID, timestamp, isOpen, milestoneID, body}){
  const [milestone, setMilestone]=useState([]);
  const [labelIDArray, setLabelIDArray]=useState([]);
  const navigate=useNavigate();

  useEffect(()=>{
    getFromURL(issueLabelURL, {issueID: issueID}).then((newIssueLabelArray)=>{
      setLabelIDArray(newIssueLabelArray);
    });
  }, []);

  const getLabels=useCallback(()=>{
    return labelIDArray.map((labelID)=>{
      return (
        <span className='margin-right' key={labelID}>
          {labelID}
        </span>
      );
    });
  }, [labelIDArray]);

  const getMilestone=useCallback(()=>{
    return (
      <span className='margin-right'>
        {milestoneID}
      </span>
    );
  }, []);

  function onClick(){
    navigate(`/issue/${issueID}`, {replace: false});
  }

  return (
    <div className='Issue' onClick={onClick}>
      <div className='checkbox-container'>
        <input type='checkbox'></input>
      </div>
      <div className='issue-info-container'>
        <div className='issue-title'>
          <span className='margin-right'>
            <AlertCircle />
          </span>
          <span className='margin-right'>
            {title}
          </span>
          {getLabels()}
        </div>
        <div className='issue-info'>
          <span className='issue-info-item'>
            #{issueID}
          </span>
          <span className='issue-info-item'>
            {authorID} {getPrettyDate(timestamp)} 작성됨
          </span>
          <span className='issue-info-item'>
            {getMilestone()}
          </span>
        </div>
      </div >
      <div className='rest-container'>
      </div>
      <div className='rest-container'>
      </div>
      <div className='rest-container'>
      </div>
      <div className='rest-container'>
        {authorID}
      </div>
    </div>
  );
}
