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
 * @param {Array.<{isOpen:int}>} rows
 */
function convertIsOpenInt(isBool){
  return isBool===true ? 1 : 0;
}

module.exports={
  mergeTwoObjects,
  convertIsOpenBool,
  convertIsOpenInt
};
