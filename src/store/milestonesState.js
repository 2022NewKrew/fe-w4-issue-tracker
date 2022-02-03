import {getFromURL, milestoneListURL} from '../global';
import {selector} from 'recoil';

const milestonesState=selector({
  key: 'milestonesState',
  get: async()=>{
    try{
      const newLabelArray=await getFromURL(milestoneListURL);
      return newLabelArray;
    }catch{
      throw Error('Cannot fetch labelsSelector.');
    }
  }
});

export default milestonesState;
