import {useEffect, useState} from 'react';

/**
 * @param {any[]} array
 */
export function useArrayLength(array){
  const [arrayLength, SetArrayLength]=useState(0);
  useEffect(()=>{
    SetArrayLength(array.length);
  }, [array]);
  return arrayLength;
}
