import {issueUpdateURL, postToURL} from '../global';
import {useCallback, useState} from 'react';
import Dropdown from '../item/Dropdown';
import MoreIcon from '../svg/More.svg';

/**
 * @param {object} prop
 * @param {Object.<number, boolean>} prop.checked
 * @param {function} prop.fetchIssues
 */
export default function IssueUpdateDropdown({checked, fetchIssues}){
  const [show, setShow]=useState(false);

  const toggle=useCallback(()=>{
    setShow((show)=>!show);
  }, [setShow]);

  function getItemArray(){
    return [
      {itemTitle: '선택한 이슈 열기', onClick: ()=>{
        postToURL(issueUpdateURL, {
          issueIDs: Object.keys(checked),
          isOpen: true
        }).then(fetchIssues);
      }},
      {itemTitle: '선택한 이슈 닫기', onClick: ()=>{
        postToURL(issueUpdateURL, {
          issueIDs: Object.keys(checked),
          isOpen: false
        }).then(fetchIssues);
      }}
    ];
  }

  function isSelectedIndex(){
    return false;
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
        isSelectedIndex={isSelectedIndex}
        left={false}/>}
    </div>
  );
}
