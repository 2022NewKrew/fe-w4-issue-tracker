import {searchFilterWithKey, wrapInQuotes} from '../global';
import {useCallback, useState} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import Dropdown from '../item/Dropdown';
import issueFilterState from '../store/issueFilterState';
import MoreIcon from '../svg/More.svg';
import usersState from '../store/usersState';

export default function AssigneeDropdown(){
  const users=useRecoilValue(usersState);
  const [show, setShow]=useState(false);
  const [issueFilter, setIssueFilter]=useRecoilState(issueFilterState);

  const toggle=useCallback(()=>{
    setShow((show)=>!show);
  }, [setShow]);

  function onClickItem(userID){
    setIssueFilter(`assignee:${wrapInQuotes(userID)}`);
    toggle();
  }

  function getItemArray(){
    const itemArray=[{itemTitle: '담당자가 없는 이슈', value: ''}];
    itemArray.push(...Object.values(users).map(({userID})=>(
      {itemTitle: userID, value: userID}
    )));
    return itemArray;
  }

  function isSelectedIndex({itemTitle}, index){
    const curAssignee=searchFilterWithKey('assignee', issueFilter);
    return (curAssignee!==null &&
      (curAssignee===itemTitle || (curAssignee.length===0 && index===0)));
  }

  return (
    <div className='tab-rest hover-item' onClick={()=>{
      if(!show){
        toggle();
      }
    } }>
      <span className='margin-right'>담당자</span><MoreIcon/>
      {show && <Dropdown title='담당자 필터'
        itemArray={getItemArray()}
        toggle={toggle}
        showSelected={true}
        isSelectedIndex={isSelectedIndex}
        onClickItem={onClickItem}
        left={false}/>}
    </div>
  );
}
