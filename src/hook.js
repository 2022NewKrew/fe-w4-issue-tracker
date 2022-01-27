import {useCallback, useEffect, useState} from 'react';

/**
 * @param {any[]} array
 */
export function useArrayLength(array){
  const [arrayLength, setArrayLength]=useState(0);
  useEffect(()=>{
    setArrayLength(array.length);
  }, [array]);
  return arrayLength;
}

/**
 * @param {Function} callback
 * @param {number} time
 * @param {any[]} deps
 */
export function useDebounce(callback, time, deps){
  const _callback=useCallback(callback, deps);
  useEffect(()=>{
    const timeoutID=setTimeout(_callback, time);
    return ()=>clearTimeout(timeoutID);
  }, [_callback, time]);
}

/**
 * @param {any[]} array
 */
export function useCheck(array){
  const [checkArray, setCheckedArray]=useState(array.map(()=>false));
  const [isCheckedAll, setIsCheckedAll]=useState(false);
  
  useEffect(()=>{
    setCheckedArray(array.map(()=>false));
  }, [array]);

  useEffect(()=>{
    setIsCheckedAll(checkArray.every((value)=>value));
  }, [checkArray]);
    
  const isChecked=useCallback((index)=>{
    return checkArray[index];
  }, [checkArray]);
  /**
   * @param {number} index
   */
  const toggleCheck=useCallback((index)=>{
    if(index===undefined){
      return;
    }
    setCheckedArray((checkArray)=>{
      const newCheckArray=[...checkArray];
      newCheckArray[index]=!newCheckArray[index];
      console.log(newCheckArray);
      return newCheckArray;
    });
  }, [checkArray]);

  const checkAll=useCallback(()=>{
    const newChecked=array.map(()=>true);
    setCheckedArray(newChecked);
  }, [array]);
  const uncheckAll=useCallback(()=>{
    const newChecked=array.map(()=>false);
    setCheckedArray(newChecked);
  }, [array]);
  /**
   * NOTE Toggling check all does not change checkbox of each row... Why?
   */
  const toggleCheckAll=useCallback(()=>{
    isCheckedAll ? uncheckAll() : checkAll();
  }, [isCheckedAll]);
  return {
    isChecked, isCheckedAll, toggleCheck, checkAll, uncheckAll, toggleCheckAll
  };
}
