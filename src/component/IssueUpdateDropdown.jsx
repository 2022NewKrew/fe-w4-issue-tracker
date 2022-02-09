import {issueUpdateURL, postToURL} from '../global';
import {useCallback, useState} from 'react';
import Dropdown from '../item/Dropdown';
import MoreIcon from '../svg/More.svg';

/**
 * @param {object} props
 * @param {Object.<number, boolean>} props.checked
 * @param {function} props.fetchIssues
 * @param {Object.<number, {issueID: number}>} props.showingIssues
 */
export default function IssueUpdateDropdown({checked, fetchIssues, showingIssues}){
  const [show, setShow]=useState(false);

  const toggle=useCallback(()=>{
    setShow((show)=>!show);
  }, [setShow]);

  const getIssueIDs=useCallback(()=>{
    return Object.keys(checked).map((index)=>showingIssues[index].issueID);
  }, [checked, showingIssues]);

  function onClickItem(openIssues){
    postToURL(issueUpdateURL, {
      issueIDs: getIssueIDs(),
      isOpen: openIssues==='true'
    }).then(fetchIssues);
  }

  function getItemArray(){
    return [
      {itemTitle: '선택한 이슈 열기', value: true},
      {itemTitle: '선택한 이슈 닫기', value: false}
    ];
  }

  return (
    <div className='tab-rest hover-item' onClick={()=>{
      if(!show){
        toggle();
      }
    } }>
      <span className='margin-right'>상태 수정</span><MoreIcon/>
      {show && <Dropdown title='상태 변경'
        itemArray={getItemArray()}
        toggle={toggle}
        showSelected={false}
        onClickItem={onClickItem}
        left={false}/>}
    </div>
  );
}
