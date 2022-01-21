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

module.exports={
  mergeTwoObjects
};
