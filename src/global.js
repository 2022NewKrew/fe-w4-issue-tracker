import axios from 'axios';

export const backendURL='http://localhost:8080';
export const issueListURL=new URL('issue-list', backendURL).href;
export const issueLabelURL=new URL('issue-label', backendURL).href;

export async function getFromURL(url, params){
  const {data}=await (await axios.get(url, {params: params}));
  return data;
}

export function getPrettyDate(date){
  const dateInstance=new Date(date);
  const prettyDate=`${dateInstance.getMonth()+1}월 ${dateInstance.getDate()}일`;
  return prettyDate;
}
