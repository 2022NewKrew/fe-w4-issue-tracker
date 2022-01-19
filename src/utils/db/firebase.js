import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAK5gt3gzN2nY4GEhCChX8MVNB3_dONzCU',
  authDomain: 'issue-tracker-184ca.firebaseapp.com',
  projectId: 'issue-tracker-184ca',
  storageBucket: 'issue-tracker-184ca.appspot.com',
  messagingSenderId: '923229978471',
  appId: '1:923229978471:web:b91c7f456cae1793b9f9c2'
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const storage = getStorage(app)