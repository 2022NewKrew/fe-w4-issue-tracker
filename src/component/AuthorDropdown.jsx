import {useCallback, useState} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import Dropdown from '../item/Dropdown';
import issueFilterState from '../store/issueFilterState';
import MoreIcon from '../svg/More.svg';
import usersState from '../store/usersState';
import {wrapInQuotes} from '../global';

export default function AuthorDropdown(){
  const users=useRecoilValue(usersState);
  const [show, setShow]=useState(false);
  const [issueFilter, setIssueFilter]=useRecoilState(issueFilterState);

  const toggle=useCallback(()=>{
    setShow((show)=>!show);
  }, [setShow]);

  function getItemArray(){
    const itemArray=Object.values(users).map(({userID})=>{
      return {itemTitle: userID, onClick: ()=>{
        setIssueFilter(`author:${wrapInQuotes(userID)}`);
        toggle();
      }};
    });
    return itemArray;
  }

  function isSelectedIndex({itemTitle}){
    const matchResult=issueFilter.match(/author:"*((?:[^"]*)|(?:[^\s"]*))"*/);
    if(matchResult===null){
      return;
    }
    const curAuthor=matchResult[1];
    if(curAuthor===itemTitle){
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
      <span className='margin-right'>작성자</span><MoreIcon/>
      {show && <Dropdown title='작성자 필터'
        itemArray={getItemArray()}
        toggle={toggle}
        showSelected={true}
        isSelectedIndex={isSelectedIndex}
        left={false}/>}
    </div>
  );
}
