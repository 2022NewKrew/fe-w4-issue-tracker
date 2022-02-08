import {searchFilterWithKey, wrapInQuotes} from '../global';
import {useCallback, useState} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import Dropdown from '../item/Dropdown';
import issueFilterState from '../store/issueFilterState';
import MoreIcon from '../svg/More.svg';
import usersState from '../store/usersState';

export default function AuthorDropdown(){
  const users=useRecoilValue(usersState);
  const [show, setShow]=useState(false);
  const [issueFilter, setIssueFilter]=useRecoilState(issueFilterState);

  const toggle=useCallback(()=>{
    setShow((show)=>!show);
  }, [setShow]);

  function onClickItem(userID){
    setIssueFilter(`author:${wrapInQuotes(userID)}`);
    toggle();
  }

  function getItemArray(){
    const itemArray=Object.values(users).map(({userID})=>(
      {itemTitle: userID, value: userID}
    ));
    return itemArray;
  }

  function isSelectedIndex({itemTitle}){
    const curAuthor=searchFilterWithKey('author', issueFilter);
    return curAuthor===itemTitle;
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
        onClickItem={onClickItem}
        left={false}/>}
    </div>
  );
}
