// 반복문으로 팩토리얼 함수 작성

function factorial(num) {
  let total = 1;
  for(let i = num; i > 0; i--) {
    total *= i
  }
  return total;
}