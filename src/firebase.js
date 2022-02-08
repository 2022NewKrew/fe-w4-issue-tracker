import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { DATA_TYPE } from "@constants";

const ENV = {
  API_KEY: "AIzaSyBTFAK3H7enl2Pqgbkp8fwSc1IUYqqTMcY",
  AUTH_DOMAIN: "issue-tracker-9240e.firebaseapp.com",
  PROJECT_ID: "issue-tracker-9240e",
  STORAGE_BUCKET: "issue-tracker-9240e.appspot.com",
  MESSAGING_SENDER_ID: "697786123135",
  APP_ID: "1:697786123135:web:9b1db0b31bef18993f504a",
};

const firebaseConfig = {
  apiKey: ENV.API_KEY,
  authDomain: ENV.AUTH_DOMAIN,
  projectId: ENV.PROJECT_ID,
  storageBucket: ENV.STORAGE_BUCKET,
  messagingSenderId: ENV.MESSAGING_SENDER_ID,
  appId: ENV.APP_ID,
};

initializeApp(firebaseConfig);

const db = getFirestore();

const convertDocListSnapshotToArray = (docListSnapshot) => {
  const docList = [];
  docListSnapshot.forEach((docSnapshot) => {
    const { id } = docSnapshot;
    const issueData = docSnapshot.data();
    docList.push({ id, ...issueData });
  });
  return docList;
};

const getDocList = async (docType) => {
  const docListSnapshot = await getDocs(collection(db, docType));
  return convertDocListSnapshotToArray(docListSnapshot);
};

export const getLabelList = async () => {
  return await getDocList(DATA_TYPE.LABEL);
};

export const getMilestoneList = async () => {
  return await getDocList(DATA_TYPE.MILESTONE);
};

export const getUserList = async () => {
  return await getDocList(DATA_TYPE.USER);
};

export const getIssueList = async () => {
  return await getDocList(DATA_TYPE.ISSUE);
};

export * from "firebase/auth";
