import {getFromURL, labelListURL} from '../global';
import {selector} from 'recoil';

const labelsState=selector({
  key: 'labelsState',
  get: async()=>{
    try{
      const newLabelArray=await getFromURL(labelListURL);
      return newLabelArray;
    }catch{
      throw Error('Cannot fetch labelsSelector.');
    }
  }
});

export default labelsState;
