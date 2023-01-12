function countUniqueValues(arr) {
  // index 0번째 i와 index 1번째 j를 만든다
  let i = 0;
  let j = 1;
  // 배열의 아이템이 없으면 i 반환
  if (arr.length === 0) {
    return 0;
  }
  // arr을 순회하는 반복문을 만든다
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      i++;
      arr[i] = arr[j];
      j++;
    }
  }
  // i와 j를 비교해서 같으면 다음으로 이동, 다르면 count +1 그리고 i를 j로 변경
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); //2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //7
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); //4

// 리팩토리할 부분
// while문을 예시 따라서 작성했는데 그냥 for문에 반복할대마다 j를 올리는 방식으로 해야하는듯
