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

/**
 * Wrap given string in quotes if contains space.
 * @param {string} str The given string to wrap.
 * @param {string} quote Defaults to double quote.
 */
export function wrapInQuotes(str, quote='"'){
  return str.includes(' ') ? `${quote}${str}${quote}` : str;
}

/**
 * Find value with the key and return from the issue filter.
 * @param {string} key
 * @param {string} filter
 */
export function searchFilterWithKey(key, filter){
  const regex=new RegExp(`${key}:"*((?:[^"]*)|(?:[^\\s"]*))"*`);
  const result=filter.match(regex);
  return result===null ? null : result[1];
}
