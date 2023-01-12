function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;

  // 첫번째 합계를 만든다
  // num의 숫자만큼 arr에 반복문을 돌려서 합계를 구해서 maxSum에 저장한다
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  // maxSum을 tempSum에 대입해서 두 변수를 만듬
  tempSum = maxSum;
  // 맨 처음 0의 위치에서 시작하지 않음, 처음 더해준 값들의 다음 index에서부터 루프가 시작되게 함
  for (let i = num; i < arr.length; i++) {
    // 더하고 빼줌
    tempSum = tempSum - arr[i - num] + arr[i];
    // maxSum과 tempSum중에서 더 큰 값을 취함
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
