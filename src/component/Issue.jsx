import '../style/Issue.scss';
import {getFromURL, getPrettyDate, issueLabelURL} from '../global';
import {useCallback, useEffect, useState} from 'react';
import AlertCircle from '../svg/AlertCircle.svg';
import CheckOnCircle from '../svg/CheckOnCircle.svg';
import LabelSmall from '../item/LabelSmall';
import labelsState from '../store/labelsState';
import MilestoneSmall from '../item/MilestoneSmall';
import milestonesState from '../store/milestonesState';
import {useNavigate} from 'react-router-dom';
import {useRecoilValue} from 'recoil';

export default function Issue({
  issueID, title, authorID, timestamp, isOpen, milestoneID, isChecked, toggleCheck}){
  const [labelIDArray, setLabelIDArray]=useState([]);
  const labels=useRecoilValue(labelsState);
  const milestones=useRecoilValue(milestonesState);
  const navigate=useNavigate();

  useEffect(()=>{
    getFromURL(issueLabelURL, {issueID: issueID}).then((newIssueLabelArray)=>{
      setLabelIDArray(newIssueLabelArray);
    });
  }, []);

  const getLabels=useCallback(()=>{
    return labelIDArray.map((labelID)=>(
      <LabelSmall key={labelID}
        title={labels[labelID].title}
        textColor={labels[labelID].textColor}
        backgroundColor={labels[labelID].backgroundColor}/>
    ));
  }, [labelIDArray, labels]);

  const getMilestone=useCallback(()=>{
    if(milestoneID!==null){
      return (
        <MilestoneSmall title={milestones[milestoneID].title} />
      );
    }
  }, []);

  function onClick(){
    navigate(`/issue/${issueID}`, {replace: false});
  }
  /**
   * @param {Event} e
   */
  function onCheckboxClick(e){
    e.stopPropagation();
    toggleCheck();
  }

  return (
    <div className='Issue' onClick={onClick}>
      <div className='checkbox-container'>
        <input type='checkbox'
          onChange={onCheckboxClick}
          onClick={(e)=>{e.stopPropagation();}}
          checked={isChecked}></input>
      </div>
      <div className='issue-info-container'>
        <div className='issue-title'>
          <span className='margin-right'>
            {isOpen ?
              <AlertCircle />
              : <CheckOnCircle />
            }
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
      </div>
    </div>
  );
}
