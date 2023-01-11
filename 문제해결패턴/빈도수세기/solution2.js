function validAnagram(str1, str2) {
  // 길이가 같은지 먼저 체크, 틀리면 false 반환
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];

    // lookup 객체에 str1의 index i번 문자열의 key가 있으면 +1, 없으면 1로 초기화
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];

    // 정의된 lookup 객체에 str2의 문자열을 넣어서 없으면 false 반환, 있으면 else문 실행
    if (!lookup[letter]) {
      // 0은 falsy한 값이기 때문에 논리부정연산자(!)때문에 true가 되어 false를 반환함
      return false;
    } else {
      // lookup[letter]의 value가 1일때만 else문으로 넘어감
      lookup[letter] -= 1;
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
