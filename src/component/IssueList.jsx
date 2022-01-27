import '../style/IssueList.scss';
import {getFromURL, issueListURL} from '../global';
import {useArrayLength, useCheck} from '../hook';
import {useCallback, useEffect, useState} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import ButtonMedium from '../item/ButtonMedium';
import Header from './Header';
import InputeMedium from '../item/InputMedium';
import Issue from './Issue';
import issueFilterState from '../store/issueFilterState';
import labelsState from '../store/labelsState';
import milestonesState from '../store/milestonesState';
import MoreIcon from '../svg/More.svg';

export default function IssueList(){
  const [issueArray, setIssueArray]=useState([]);
  const [showOpen, setShowOpen]=useState(true);
  const numOpenIssues=useArrayLength(issueArray.filter(({isOpen})=>isOpen));
  const numClosedIssues=useArrayLength(issueArray.filter(({isOpen})=>!isOpen));
  const labels=useRecoilValue(labelsState);
  const milestones=useRecoilValue(milestonesState);
  const numLabels=useArrayLength(labels);
  const numMilestones=useArrayLength(milestones);
  const [issueFilter, setIssueFilter]=useRecoilState(issueFilterState);
  const [showingIssues, setShowingIssues]=useState([]);
  const {isChecked, isCheckedAll, toggleCheck, toggleCheckAll}=useCheck(showingIssues);

  useEffect(()=>{
    getFromURL(issueListURL).then((newIssueArray)=>{
      setIssueArray(newIssueArray);
    });
  }, []);

  useEffect(()=>{
    setShowingIssues(issueArray.filter(({isOpen})=>isOpen===showOpen));
  }, [issueArray, showOpen]);

  function isIndexChecked(index){
    console.log(index, isChecked(index));
    return isChecked(index);
  }

  const getIssues=useCallback(()=>{
    if(issueArray.length===0){
      return (
        <div className='flex-center'>
          필터에 해당하는 이슈가 없습니다.
        </div>
      );
    }
    return issueArray.map(
      ({issueID, title, authorID, timestamp, isOpen, milestoneID, body}, index)=>{
        if(showOpen===isOpen){
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
              isChecked={isIndexChecked(index)}
              toggleCheck={()=>toggleCheck(index)}
            ></Issue>
          );
        }
      }
    );
  }, [issueArray, showOpen]);

  return (
    <div className='IssueList'>
      <Header />
      <div className='issue-searchbar'>
        <div className='align-left'>
          <InputeMedium title='필터' value={issueFilter} onChange={setIssueFilter}/>
        </div>
        <div className='align-right'>
          <ButtonMedium title='+ 이슈 작성' onClick={()=>console.log('Add Issue')}/>
        </div>
      </div>
      <div className='issue-header'>
        <div className='tab-first'>
          <input type='checkbox'
            checked={isCheckedAll}
            onChange={()=>toggleCheckAll()}>
          </input>
        </div>
        <div className='tab-second'>
          <strong className={'margin-right hover-item'+(showOpen ? ' active' : '')}
            onClick={()=>{setShowOpen(true);}}
          >
            열린 이슈({numOpenIssues})
          </strong>
          <strong className={'margin-right hover-item'+(!showOpen ? ' active' : '')}
            onClick={()=>{setShowOpen(false);}}
          >
            닫힌 이슈({numClosedIssues})
          </strong>
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
