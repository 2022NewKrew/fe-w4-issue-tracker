import '../style/IssueList.scss';
import {getFromURL, issueListURL} from '../global';
import {useArrayLength, useCheck, useNumObjectKeys} from '../hook';
import {useCallback, useEffect, useState} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import AssigneeDropdown from './AssigneeDropdown';
import ButtonMedium from '../item/ButtonMedium';
import Header from './Header';
import InputeMedium from '../item/InputMedium';
import Issue from './Issue';
import issueFilterState from '../store/issueFilterState';
import labelsState from '../store/labelsState';
import MilestoneIcon from '../svg/Milestone.svg';
import milestonesState from '../store/milestonesState';
import MoreIcon from '../svg/More.svg';
import TagIcon from '../svg/Tag.svg';
import Tap from '../item/Tap';
import XIcon from '../svg/X.svg';

export default function IssueList(){
  const [issueArray, setIssueArray]=useState([]);
  const [showOpen, setShowOpen]=useState(true);
  const numOpenIssues=useArrayLength(issueArray.filter(({isOpen})=>isOpen));
  const numClosedIssues=useArrayLength(issueArray.filter(({isOpen})=>!isOpen));
  const labels=useRecoilValue(labelsState);
  const milestones=useRecoilValue(milestonesState);
  const numLabels=useNumObjectKeys(labels);
  const numMilestones=useNumObjectKeys(milestones);
  const [issueFilter, setIssueFilter]=useRecoilState(issueFilterState);
  const [rawIssueFilter, setRawIssueFilter]=useState(issueFilter);
  const [showingIssues, setShowingIssues]=useState([]);
  const {isChecked, isCheckedAll, isCheckedAny,
    numChecked, toggleCheck, toggleCheckAll}=useCheck(showingIssues);
  
  useEffect(()=>{
    fetchIssues();
  }, [fetchIssues, issueFilter]);

  useEffect(()=>{
    setShowingIssues(issueArray.filter(({isOpen})=>isOpen===showOpen));
  }, [issueArray, showOpen]);

  useEffect(()=>{
    setRawIssueFilter(issueFilter);
  }, [issueFilter, setRawIssueFilter]);

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

  const fetchIssues=useCallback(()=>{
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
    setIssueFilter('');
  }, [setIssueFilter]);

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
          <ul className='taps'>
            <Tap icon={<TagIcon />} title={`레이블 (${numLabels})`}></Tap>
            <Tap icon={<MilestoneIcon />} title={`마일스톤 (${numMilestones})`}></Tap>
          </ul>
          <ButtonMedium title='+ 이슈 작성' onClick={()=>console.log('Add Issue')}/>
        </div>
      </div>
      
      {issueFilter.length>0 &&
      <div>
        <button className='delete-filter'
          onClick={deleteFilter}>
          <XIcon /> 현재 검색 필터 지우기
        </button>
      </div>}

      <div className='issue-header'>
        <div className='tab-first'>
          <input type='checkbox'
            checked={isCheckedAll}
            onChange={()=>toggleCheckAll()}>
          </input>
        </div>
        {isCheckedAny ?
          <>
            <div className='tab-second'>
              <strong className='grey-color'>{numChecked}개 이슈 선택</strong>
            </div>
            <div className='tab-rest hover-item'>
              <span className='margin-right'>상태 수정</span><MoreIcon/>
            </div>
          </>
          :
          <>
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
            <AssigneeDropdown />
            <div className='tab-rest hover-item'>
              <span className='margin-right'>레이블</span><MoreIcon/>
            </div>
            <div className='tab-rest hover-item'>
              <span className='margin-right'>마일스톤</span><MoreIcon/>
            </div>
            <div className='tab-rest hover-item'>
              <span className='margin-right'>작성자</span><MoreIcon/>
            </div>
          </>
        }
      </div>

      <div className='issue-container'>
        {getIssues()}
      </div>
    </div>
  );
}
