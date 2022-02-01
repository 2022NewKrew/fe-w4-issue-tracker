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
import XIcon from '../svg/X.svg';

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
  const [rawIssueFilter, setRawIssueFilter]=useState(issueFilter);
  const [showingIssues, setShowingIssues]=useState([]);
  const {isChecked, isCheckedAll, isCheckedAny,
    toggleCheck, toggleCheckAll}=useCheck(showingIssues);

  useEffect(()=>{
    filterIssues();
  }, [filterIssues, issueFilter]);

  useEffect(()=>{
    setShowingIssues(issueArray.filter(({isOpen})=>isOpen===showOpen));
  }, [issueArray, showOpen]);

  const isIndexChecked=useCallback((index)=>{
    return isChecked(index);
  }, [isChecked]);

  const getIssues=useCallback(()=>{
    if(showingIssues.length===0){
      return (
        <div className='issue-empty'>
          필터에 해당하는 이슈가 없습니다.
        </div>
      );
    }
    return showingIssues.map(
      ({issueID, title, authorID, timestamp, isOpen, milestoneID, body}, index)=>{
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
    );
  }, [isIndexChecked, toggleCheck, showingIssues]);

  const filterIssues=useCallback(()=>{
    getFromURL(issueListURL, {
      filter: issueFilter
    }).then(newIssueArray=>{
      setIssueArray(newIssueArray);
    }).catch(()=>{
      alert('잘못된 필터 값입니다. 다시 시도해주세요!');
      deleteFilter();
    });
  }, [issueFilter, deleteFilter]);

  const deleteFilter=useCallback(()=>{
    setRawIssueFilter('');
    setIssueFilter('');
  }, [setRawIssueFilter, setIssueFilter]);

  return (
    <div className='IssueList'>
      <Header />
      <div className='issue-searchbar'>
        <div className='align-left'>
          <form onSubmit={(e)=>{
            e.preventDefault();
            setIssueFilter(rawIssueFilter);
          }}>
            <InputeMedium title='필터' value={rawIssueFilter} onChange={setRawIssueFilter}/>
          </form>
        </div>
        <div className='align-right'>
          <ButtonMedium title='+ 이슈 작성' onClick={()=>console.log('Add Issue')}/>
        </div>
      </div>
      {issueFilter.length>0 &&
      <button className='delete-filter'
        onClick={deleteFilter}>
        <XIcon /> 현재 검색 필터 지우기
      </button>}
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
