function maxSubarraySum(arr, num) {
  // 숫자가 배열의 길이보다 큰지 확인
  if(num > arr.length) {
    return null;
  }

  // max를 만들어서 -Infinity에서 시작되도록 해줌
  // 배열이 모두 음수로 구성되어 있다면 가장 큰 합은 여전히 음수일것이기 때문에 비교를 위해 -Infinity로 설정
  var max = -Infinity;
  for(let i = ; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j]
    }
    if(temp > max) {
      max = temp
    }
  }
  return max;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)

// 엄청나게 긴 배열을 돌리고 20개의 연속된 숫자들 중 가장 큰 합을 찾아야한다면,
// 이런 방식은 아주 비효율적
// 리팩토링 파일로 가자