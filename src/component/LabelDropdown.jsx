import {useCallback, useState} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import Dropdown from '../item/Dropdown';
import issueFilterState from '../store/issueFilterState';
import labelsState from '../store/labelsState';
import MoreIcon from '../svg/More.svg';
import {wrapInQuotes} from '../global';

export default function LabelDropdown(){
  const labels=useRecoilValue(labelsState);
  const [show, setShow]=useState(false);
  const [issueFilter, setIssueFilter]=useRecoilState(issueFilterState);

  const toggle=useCallback(()=>{
    setShow((show)=>!show);
  }, [setShow]);

  function getItemArray(){
    const itemArray=[{itemTitle: '레이블이 없는 이슈', onClick: ()=>{
      setIssueFilter('label:');
      toggle();
    }}];
    itemArray.push(...Object.values(labels).map(({title: labelTitle})=>{
      return {itemTitle: labelTitle, onClick: ()=>{
        setIssueFilter(`label:${wrapInQuotes(labelTitle)}`);
        toggle();
      }};
    }));
    return itemArray;
  }

  function isSelectedIndex({itemTitle}, index){
    const matchResult=issueFilter.match(/label:"*((?:[^"]*)|(?:[^\s"]*))"*/);
    if(matchResult===null){
      return;
    }
    const curLabel=matchResult[1];
    if(curLabel===itemTitle || (curLabel.length===0 && index===0)){
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
      <span className='margin-right'>레이블</span><MoreIcon/>
      {show && <Dropdown title='레이블 필터'
        itemArray={getItemArray()}
        toggle={toggle}
        showSelected={true}
        isSelectedIndex={isSelectedIndex}
        left={false}/>}
    </div>
  );
}
