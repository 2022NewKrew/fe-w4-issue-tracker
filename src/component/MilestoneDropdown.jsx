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

  function onClickItem(milestoneTitle){
    setIssueFilter(`milestone:${wrapInQuotes(milestoneTitle)}`);
    toggle();
  }

  function getItemArray(){
    const itemArray=[{itemTitle: '마일스톤이 없는 이슈', value: ''}];
    itemArray.push(...Object.values(milestones).map(({title: milestoneTitle})=>(
      {itemTitle: milestoneTitle, value: milestoneTitle}
    )));
    return itemArray;
  }

  function isSelectedIndex({itemTitle}, index){
    const curMilestone=searchFilterWithKey('milestone', issueFilter);
    return (curMilestone!==null &&
      (curMilestone===itemTitle || (curMilestone.length===0 && index===0)));
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
        onClickItem={onClickItem}
        left={false}/>}
    </div>
  );
}
