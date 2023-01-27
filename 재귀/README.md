# 재귀

## 재귀란?

> 재귀는 자기자신을 호출하는 함수를 의미합니다.

## 재귀 함수를 사용하는 이유

- 재귀는 모든 곳에 사용됩니다. 다양한 솔루션을 작성할 때 많이 사용하게 된다.
  - JSON.parse / JSON.stringify
  - document.getElementById, DOM traversal algorithms
  - Object traversal

## 호출스택이란

- 자바스크립트의 보이지 않는 곳에서 작동하는 정적 데이터 구조(static data structure)
- 그 의미는 항목이 꼭대기에 추가되고 마찬가지로 꼭대기에서부터 제거되며, 함수가 호출되면 이 구조에 추가됨

## 재귀함수의 두가지 기본 요소

1. Base Case : 재귀가 중단되는 시점
1. Different Input : 다른 입력값

## 재귀함수 예시

### countDown.js
1. Base Case - num이 0보다 작거나 같을 경우 반환
1. Different Input - num에서 1을 빼고 다시 countDown 호출

### sumRange
1. Base Case - num이 1이면 1을 반환
1. Different Input - 이전 함수 호출이 기다리던 값에 추가하고 해당 값이 추가되고 나면 모든 함수를 거꾸로(아래에서부터 위로) 합산

### factorial
팩토리얼이란
- 표기법 : 4!
- 4! = 4 * 3 * 2 * 1

1. Base Case - num이 1이면 1을 반환
1. Different Input - 이전 함수 호출이 기다리던 값에 추가하고 해당 값이 추가되고 나면 모든 함수를 거꾸로(아래에서부터 위로) 곱셈

## 통상적인 재귀의 잠재적 위험

- No base case : 종료 조건이 없거나 잘못되는 경우
- 값을 반환하거나, 반환하는걸 잊는 경우
- Stack overflow : 스택에 프레임이 많을 경우(너무 많은 함수 호출이 이루어질때)

정리 : 종료 조건이 없는 것, 값을 반환하는 걸 잊는 것, 잘못된 값을 반환하는 것 모두가 스택 오버플로를 초래할 수 있다.