function sumZero(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  // 왼쪽이 오른쪽보다 작은 경우에만 while 반복문 실행
  while (leftIndex < rightIndex) {
    let sum = arr[leftIndex] + arr[rightIndex];
    if (sum === 0) {
      return [arr[leftIndex], arr[rightIndex]];
    } else if (sum > 0) {
      rightIndex--;
    } else {
      leftIndex++;
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]); // [-2, 2]
sumZero([-4, -3, -2, -1, 0, 1]); // undefined
