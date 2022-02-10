import '../style/IssueDetail.scss';
import {assigneeListURL, commentListURL, getFromURL,
  getPrettyDate, issueLabelURL, issueListURL} from '../global';
import {useCallback, useEffect, useState} from 'react';
import ButtonMedium from '../item/ButtonMedium';
import Comment from '../item/Comment';
import Header from './Header';
import LabelSmall from '../item/LabelSmall';
import labelsState from '../store/labelsState';
import MilestoneSmall from '../item/MilestoneSmall';
import milestonesState from '../store/milestonesState';
import OpenIndicator from '../item/OpenIndicator';
import {useParams} from 'react-router-dom';
import {useRecoilValue} from 'recoil';

/**
 * @typedef Issue
 * @property {string} title
 * @property {string} authorID
 * @property {string} timestamp
 * @property {boolean} isOpen
 * @property {number} milestoneID
 * @property {string} body
 */

export default function IssueDetail(){
  const {issueID}=useParams();
  /** @type {[Issue, function]}*/
  const [issue, setIssue]=useState({});
  const [comments, setComments]=useState([]);
  const [assignees, setAssignees]=useState([]);
  const [labelIDArray, setLabelIDArray]=useState([]);
  const milestones=useRecoilValue(milestonesState);
  const labels=useRecoilValue(labelsState);


  useEffect(()=>{
    Promise.all([
      getFromURL(issueListURL, {issueID}),
      getFromURL(commentListURL, {issueID}),
      getFromURL(assigneeListURL, {issueID}),
      getFromURL(issueLabelURL, {issueID})
    ]).then(([fetchedIssue, fetchedComments, fetchedAssignees, fetchedLabels])=>{
      setIssue(fetchedIssue);
      setComments(fetchedComments);
      setAssignees(fetchedAssignees);
      setLabelIDArray(fetchedLabels);
    });
  }, [setIssue, setComments, setAssignees, setLabelIDArray, issueID]);

  const getComments=useCallback(()=>{
    return comments.map(({commentID, authorID, timestamp, isIssueAuthor, body})=>
      <Comment key={commentID}
        authorID={authorID}
        timestamp={timestamp}
        isIssueAuthor={isIssueAuthor!==undefined ? isIssueAuthor : authorID===issue.authorID}
        body={body} />);
  }, [comments, issue.authorID]);

  const getAssignees=useCallback(()=>{
    return assignees.map((assigneeID)=>(<div key={assigneeID}>{assigneeID}</div>));
  }, [assignees]);

  const getLabels=useCallback(()=>{
    return labelIDArray.map((labelID)=>(
      <LabelSmall key={labelID}
        title={labels[labelID].title}
        textColor={labels[labelID].textColor}
        backgroundColor={labels[labelID].backgroundColor}/>
    ));
  }, [labelIDArray, labels]);

  const getMilestone=useCallback(()=>{
    if(issue.milestoneID!==undefined && issue.milestoneID!==null){
      return (
        <MilestoneSmall title={milestones[issue.milestoneID].title} />
      );
    }
  }, [milestones, issue.milestoneID]);

  return (
    <div className='IssueDetail'>
      <Header />

      <div className='header'>
        <h2 className='title'>{issue.title}</h2>
        <h2 className='issue-id'>#{issueID}</h2>
        <div className='buttons'>
          <ButtonMedium title='제목 편집' />
          <ButtonMedium title='이슈 닫기' />
        </div>
      </div>

      <div className='info'>
        <OpenIndicator isOpen={issue.isOpen} />
        <span className='creation-info'>
          이 이슈는 {getPrettyDate(new Date(issue.timestamp))}에 {issue.authorID}에
          의해 생성되었습니다.
        </span>
      </div>

      <div className='body'>
        <div className='comments'>
          {issue.issueID!==undefined && <Comment
            authorID={issue.authorID}
            timestamp={issue.timestamp}
            isIssueAuthor={true}
            body={issue.body} />}
          {getComments()}
        </div>
        <div className='panel'>
          <div className='panel-item'>
            <h3>담당자</h3>
            {getAssignees()}
          </div>
          <div className='panel-item'>
            <h3>레이블</h3>
            {getLabels()}
          </div>
          <div className='panel-item'>
            <h3>마일스톤</h3>
            {getMilestone()}
          </div>
        </div>
      </div>
    </div>
  );
}
