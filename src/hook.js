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
  const [checked, setChecked]=useState({});
  const [isCheckedAll, setIsCheckedAll]=useState(false);
  
  useEffect(()=>{
    setChecked({});
  }, [array]);

  useEffect(()=>{
    setIsCheckedAll(array.length && Object.keys(checked).length===array.length);
  }, [checked, array]);

  const isChecked=useCallback((index)=>{
    return (index in checked);
  }, [checked]);
  /**
   * @param {number} index
   */
  const toggleCheck=useCallback((index)=>{
    if(index===undefined){
      return;
    }
    setChecked((checked)=>{
      if(index in checked){
        const newChecked={...checked};
        delete newChecked[index];
        return newChecked;
      }
      const newChecked={...checked, [index]: true};
      return newChecked;
    });
  }, []);

  const checkAll=useCallback(()=>{
    const newChecked=array.reduce((prev, _, index)=>{
      prev[index]=true;
      return prev;
    }, {});
    setChecked(newChecked);
  }, [array]);
  const uncheckAll=useCallback(()=>{
    setChecked({});
  }, []);
  
  const toggleCheckAll=useCallback(()=>{
    isCheckedAll ? uncheckAll() : checkAll();
  }, [isCheckedAll, uncheckAll, checkAll]);
  return {
    isChecked, isCheckedAll, toggleCheck, checkAll, uncheckAll, toggleCheckAll
  };
}
