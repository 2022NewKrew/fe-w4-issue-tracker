import {searchFilterWithKey, wrapInQuotes} from '../global';
import {useCallback, useState} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import Dropdown from '../item/Dropdown';
import issueFilterState from '../store/issueFilterState';
import labelsState from '../store/labelsState';
import MoreIcon from '../svg/More.svg';

export default function LabelDropdown(){
  const labels=useRecoilValue(labelsState);
  const [show, setShow]=useState(false);
  const [issueFilter, setIssueFilter]=useRecoilState(issueFilterState);

  const toggle=useCallback(()=>{
    setShow((show)=>!show);
  }, [setShow]);

  function onClickItem(labelTitle){
    setIssueFilter(`label:${wrapInQuotes(labelTitle)}`);
    toggle();
  }

  function getItemArray(){
    const itemArray=[{itemTitle: '레이블이 없는 이슈', value: ''}];
    itemArray.push(...Object.values(labels).map(({title: labelTitle})=>(
      {itemTitle: labelTitle, value: labelTitle}
    )));
    return itemArray;
  }

  function isSelectedIndex({itemTitle}, index){
    const curLabel=searchFilterWithKey('label', issueFilter);
    return (curLabel!==null &&
      (curLabel===itemTitle || (curLabel.length===0 && index===0)));
  }

  return (
    <div className='tab-rest hover-item' onClick={()=>{
      if(!show){
        toggle();
      }
    } }>
      <span className='margin-right'>레이블</span><MoreIcon/>
      {show && <Dropdown title='레이블 필터'
        itemArray={getItemArray()}
        toggle={toggle}
        showSelected={true}
        isSelectedIndex={isSelectedIndex}
        onClickItem={onClickItem}
        left={false}/>}
    </div>
  );
}
