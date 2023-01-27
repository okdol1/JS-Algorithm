// 재귀적으로 팩토리얼 함수 작성

// 종료 조건과 재귀 호출이 사용되는 더 작은 부분을 모두 이해하기
function factorial(num) {
  if(num === 1) return 1;
  return num * factorial(num - 1);
}