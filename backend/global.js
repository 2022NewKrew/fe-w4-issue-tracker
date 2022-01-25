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
 * @param {Array.<{isOpen:int}>} rows
 */
function convertIsOpenBool(rows){
  for(const row of rows){
    if(row.isOpen!==undefined){
      row.isOpen=row.isOpen===1 ? true : false;
    }
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

module.exports={
  mergeTwoObjects,
  convertIsOpenBool,
  convertIsOpenInt,
  flatObjectArray
};
