import axios from 'axios';

export const backendURL='http://localhost:8080';
export const issueListURL=new URL('issue-list', backendURL);

export async function getFromURL(url){
  return await (await axios.get(url)).data;
}

export function getPrettyDate(date){
  const dateInstance=new Date(date);
  const prettyDate=`${dateInstance.getMonth()+1}월 ${dateInstance.getDate()}일`;
  return prettyDate;
}
