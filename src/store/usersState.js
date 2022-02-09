import {getFromURL, userListURL} from '../global';
import {selector} from 'recoil';

const usersState=selector({
  key: 'usersState',
  get: async()=>{
    try{
      const newState=await getFromURL(userListURL);
      return newState;
    }catch{
      throw Error('Cannot fetch users data.');
    }
  }
});

export default usersState;
