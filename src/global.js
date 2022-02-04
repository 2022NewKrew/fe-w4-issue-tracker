import axios from 'axios';

export const backendURL='http://localhost:8080';
export const issueListURL=new URL('issue-list', backendURL).href;
export const issueLabelURL=new URL('issue-label', backendURL).href;
export const labelListURL=new URL('label-list', backendURL).href;
export const milestoneListURL=new URL('milestone-list', backendURL).href;
export const userListURL=new URL('user-list', backendURL).href;
export const issueUpdateURL=new URL('api/update-issue', backendURL).href;

export async function getFromURL(url, params){
  const {data}=await axios.get(url, {params: params});
  return data;
}

export async function postToURL(url, data){
  await axios.post(url, data);
}

export function getPrettyDate(date){
  date=new Date(date);
  const prettyDate=`${date.getMonth()+1}월 ${date.getDate()}일
    ${date.getHours()}:${date.getMinutes()}`;
  return prettyDate;
}
