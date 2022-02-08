import {searchFilterWithKey, wrapInQuotes} from '../global';
import {useCallback, useState} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import Dropdown from '../item/Dropdown';
import issueFilterState from '../store/issueFilterState';
import milestonesState from '../store/milestonesState';
import MoreIcon from '../svg/More.svg';

export default function MilestoneDropdown(){
  const milestones=useRecoilValue(milestonesState);
  const [show, setShow]=useState(false);
  const [issueFilter, setIssueFilter]=useRecoilState(issueFilterState);

  const toggle=useCallback(()=>{
    setShow((show)=>!show);
  }, [setShow]);

  function getItemArray(){
    const itemArray=[{itemTitle: '마일스톤이 없는 이슈', onClick: ()=>{
      setIssueFilter('milestone:');
      toggle();
    }}];
    itemArray.push(...Object.values(milestones).map(({title: milestoneTitle})=>{
      return {itemTitle: milestoneTitle, onClick: ()=>{
        setIssueFilter(`milestone:${wrapInQuotes(milestoneTitle)}`);
        toggle();
      }};
    }));
    return itemArray;
  }

  function isSelectedIndex({itemTitle}, index){
    const curMilestone=searchFilterWithKey('milestone', issueFilter);
    if(curMilestone===null){
      return;
    }
    if(curMilestone===itemTitle || (curMilestone.length===0 && index===0)){
      return true;
    }
    return false;
  }

  return (
    <div className='tab-rest hover-item' onClick={()=>{
      if(!show){
        toggle();
      }
    } }>
      <span className='margin-right'>마일스톤</span><MoreIcon/>
      {show && <Dropdown title='마일스톤 필터'
        itemArray={getItemArray()}
        toggle={toggle}
        showSelected={true}
        isSelectedIndex={isSelectedIndex}
        left={false}/>}
    </div>
  );
}
