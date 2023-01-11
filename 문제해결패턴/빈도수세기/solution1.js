function validAnagram(str1, str2) {
  // 길이가 같은지 먼저 체크, 틀리면 false 반환
  if (str1.length !== str2.length) {
    return false;
  }

  // objStr1, objStr2 빈 객체 생성
  let objStr1 = {};
  let objStr2 = {};

  // str1 먼저 for of로 순회하며 객체에 해당 문자 +1
  for (let val of str1) {
    objStr1[val] = (objStr1[val] || 0) + 1;
  }
  // str2도 똑같이 진행
  for (let val of str2) {
    objStr2[val] = (objStr2[val] || 0) + 1;
  }

  // 그다음 objStr for in으로 순회하면서
  for (let key in objStr1) {
    // key가 objStr2의 key가 있는지 비교, 틀리면 false
    if (!(key in objStr2)) {
      return false;
    }
    // key의 value가 objStr2의 key value와 같은지 비교, 틀리면 false
    if (objStr1[key] !== objStr2[key]) {
      return false;
    }
  }
  // 최종적으로 true 반환
  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
