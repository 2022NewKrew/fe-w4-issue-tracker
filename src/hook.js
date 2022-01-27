import {useCallback, useEffect, useMemo, useState} from 'react';

/**
 * @param {any[]} array
 */
export function useArrayLength(array){
  const arrayLength=useMemo(()=>array.length, [array]);
  return arrayLength;
}

/**
 * @param {Function} callback
 * @param {number} time
 * @param {any[]} deps
 */
export function useDebounce(callback, time, deps){
  const _callback=useCallback(callback, [callback, deps]);
  useEffect(()=>{
    const timeoutID=setTimeout(_callback, time);
    return ()=>clearTimeout(timeoutID);
  }, [_callback, time]);
}

/**
 * @param {any[]} array
 */
export function useCheck(array){
  const [checkArray, setCheckArray]=useState(array.map(()=>false));
  const [isCheckedAll, setIsCheckedAll]=useState(false);
  
  useEffect(()=>{
    setCheckArray(array.map(()=>false));
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
    setCheckArray((checkArray)=>{
      const newCheckArray=[...checkArray];
      newCheckArray[index]=!newCheckArray[index];
      return newCheckArray;
    });
  }, []);

  const checkAll=useCallback(()=>{
    const newChecked=array.map(()=>true);
    setCheckArray(newChecked);
  }, [array]);
  const uncheckAll=useCallback(()=>{
    const newChecked=array.map(()=>false);
    setCheckArray(newChecked);
  }, [array]);
  /**
   * NOTE Toggling check all does not change checkbox of each row... Why?
   */
  const toggleCheckAll=useCallback(()=>{
    isCheckedAll ? uncheckAll() : checkAll();
  }, [isCheckedAll, uncheckAll, checkAll]);
  return {
    isChecked, isCheckedAll, toggleCheck, checkAll, uncheckAll, toggleCheckAll
  };
}
