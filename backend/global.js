/**
 * Merge two objects ignoring `undefined` and `null` values
 * in prioritizing the latter object first.
 * @param {object.<>} a
 * @param {object.<>} b
 * @returns {object.<>} new merged object
 */
function mergeTwoObjects(a, b){
  const c=Object.keys({...a, ...b}).reduce((c, key)=>{
    c[key]=(b[key]!==undefined && b[key]!==null ? b[key] : a[key]);
    return c;
  }, {});
  return c;
}

/**
 * Convert `isOpen` property value type to `bool` for row in rows in-place.
 * @param {Array.<{isOpen:int}>|{isOpen:int}} target
 */
function convertIsOpenBool(target){
  if(Array.isArray(target)){
    for(const row of target){
      if(row.isOpen!==undefined){
        row.isOpen=row.isOpen===1 ? true : false;
      }
    }
    return;
  }
  if(target!==undefined && target.isOpen!==undefined){
    target.isOpen=target.isOpen===1 ? true: false;
  }
}
/**
 * Convert `isOpen` property value type to `int` and return the value.
 * @param {boolean} isOpen
 */
function convertIsOpenInt(isOpen){
  return isOpen===true ? 1 : 0;
}
/**
 * Flat given array of objects into an array of certain key.
 * Throws an error if the key does not exist in any object.
 * @param {Array.<{key}>} objectArray
 * @param {string} key
 */
function flatObjectArray(objectArray, key){
  return objectArray.reduce((prev, cur)=>{
    if(cur[key]===undefined){
      throw Error('key does not exist');
    }
    prev.push(cur[key]);
    return prev;
  }, []);
}
/**
 * Create an object with the given key.
 * That is, the return value is an object with key
 * and the mapped value is each object inside `objectArray`.
 * Throws an error if key does not exist or is not unique.
 * This function is to find out the object quickly with the unique ID.
 * We cannot do that with plain array.
 * @param {Array.<{key}>} objectArray
 * @param {string} key
 * @returns {object.<{key: object}>}
 */
function createObjectWithKey(objectArray, key){
  return objectArray.reduce((prev, cur)=>{
    if(cur[key]===undefined || prev[key]!==undefined){
      throw Error('key does not exist or there are duplicated keys');
    }
    prev[cur[key]]=cur;
    return prev;
  }, {});
}

/**
 * Create SQL WHERE condition from `queryValue` and `columnName`.
 * Return empty string if `queryValue` is `undefined`.
 * Return WHERE condition of null if `queryValue` is `null`.
 * Else return WHERE condition of `queryValue`.
 * @param {any} queryValue
 * @param {string} columnName
 * @returns {string}
 */
function createWhereCondition(queryValue, columnName){
  return queryValue!==undefined ?
    (queryValue!==null ? `${columnName}=@${columnName}` : `${columnName} IS NULL`)
    : '';
}

module.exports={
  mergeTwoObjects,
  convertIsOpenBool,
  convertIsOpenInt,
  flatObjectArray,
  createObjectWithKey,
  createWhereCondition
};
