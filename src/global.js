import axios from 'axios';

export const backendURL='http://localhost:8080';
export const issueListURL=new URL('issue-list', backendURL).href;
export const issueLabelURL=new URL('issue-label', backendURL).href;
export const labelListURL=new URL('label-list', backendURL).href;
export const milestoneListURL=new URL('milestone-list', backendURL).href;

export async function getFromURL(url, params){
  const {data}=await (await axios.get(url, {params: params}));
  return data;
}

export function getPrettyDate(date){
  date=new Date(date);
  const prettyDate=`${date.getMonth()+1}월 ${date.getDate()}일
    ${date.getHours()}:${date.getMinutes()}`;
  return prettyDate;
}
