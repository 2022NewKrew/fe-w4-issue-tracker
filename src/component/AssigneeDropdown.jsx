import {useCallback, useState} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import Dropdown from '../item/Dropdown';
import issueFilterState from '../store/issueFilterState';
import MoreIcon from '../svg/More.svg';
import usersState from '../store/usersState';

export default function AssigneeDropdown(){
  const users=useRecoilValue(usersState);
  const [show, setShow]=useState(false);
  const [issuefilter, setIssueFilter]=useRecoilState(issueFilterState);

  const toggle=useCallback(()=>{
    setShow((show)=>!show);
  }, [setShow]);

  function getItemArray(){
    return Object.values(users).map(({userID})=>{
      return {label: userID, onClick: ()=>{
        setIssueFilter(`assignee:${userID}`);
        toggle();
      }};
    });
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
        selectedIndex={1}
        left={false}/>}
    </div>
  );
}
