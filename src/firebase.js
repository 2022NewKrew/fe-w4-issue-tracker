import { initializeApp } from "firebase/app";

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

export const app = initializeApp(firebaseConfig);
