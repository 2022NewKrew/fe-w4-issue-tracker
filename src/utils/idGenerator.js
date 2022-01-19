/**
 * 랜덤하게 생성된 16진수 문자열을 생성
 * @return {string} 생성된 id
 */
function generateId() {
  const leftRanNum = Math.random() * 10000000000000000
  const rightRanNum = Math.random() * 10000000000000000
  
  return leftRanNum.toString(16) + rightRanNum.toString(16)
}