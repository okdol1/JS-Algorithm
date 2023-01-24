# JS Algorithm

[<JavaScript 알고리즘 & 자료구조 마스터클래스>](https://www.udemy.com/course/best-javascript-data-structures/) 강의 정리

## 문제푸는 법

- 먼저 문제를 이해하기
- 한 두가지 예시를 살펴보기
- 문제를 세분화하기
  - 주석을 달아서 어떻게 구현해야할 지 세분화로 적어보기
  - 과정을 중요하게 보는 면접관한테는 +요인이 될 수 도 있 음
- 문제를 해결하고 단순화하기
- 코드를 되돌아보고 리팩토링하기

## 리팩토링 하는법(스스로 질문해보기)

- 결과를 확인할 수 있나요?(= 코드가 제대로 작동하나요?)
- 결과를 다른 방식으로 도출할 수 있나요?(= 해결한 이 방법 외에 생각나는 다른 접근 방식이 있나요?)
- 한눈에 보고 이해할 수 있나요?
- 결과나 방법을 다른 문제에도 적용할 수 있나요?(해결한 몇 가지 문제가 다른 프로젝트나 다른 회사의 다른 문제에 대한 해결책을 열어주기도 하므로 염두에 두시는게 좋습니다.)
- 해결책의 성능을 향상시킬 수 있나요?(어떻게? 주로 시간 복잡도와 공간 복잡도로 분석)
- 회사에서 근무하는 경우, 코드를 향상시킬 수 있는 다른 방법을 떠올릴 수 있나요?( = 회사의 스타일 지침을 따라 코드를 작성하나요? 언어의 규칙을 따라 작성하나요? 간격은 일정한가요? 사소한 질문이지만 면접 상황에서는 적어도 여러분의 코드가 깔끔하지 않다는 것을 인정하고 시간이 없었지만 깔끔하게 만들 의향이 있다는 것을 알리는 것이 중요합니다)
- 다른 사람들은 이 문제를 어떻게 해결하나요?

## 빅오 표기법(big-O notation)

> 알고리즘의 복잡도를 판단하는 척도는 시간 복잡도와 공간 복잡도가 있다. 그 중 시간 복잡도는 알고리즘 내 연산의 횟수와 밀접한 관계가 있다.

### 빅오 표기법(big-O notation) 특징

시간복잡도에 미미한 영향을 주는 것들은 배제하고 표기된다.

- 상수항을 무시
  - 어떤 알고리즘이 O(N+5)의 복잡도를 가졌으면 상수를 생략해 O(N)으로 표기한다.
- 계수도 무시
  - 어떤 알고리즘이 O(3N)의 복잡도를 가졌으면 계수를 생략해 O(N)으로 표기한다.
- 최고차항만 표기
  - 어떤 알고리즘이 O(3N^3+2N^2+N+5)의 복잡도를 가졌으면 O(N^3)으로 표기한다.

### 빅오 표기법(big-O notation) 종류

실행 속도 `O(1)` < `O(log N)` < `O(N)` < `O(N log N)` < `O(N^2)` < `O(2^N)`

![시간복잡도](https://velog.velcdn.com/images/nana-moon/post/f058b815-5684-495e-a944-2818781467a0/image.png)

1. `O(1)`

- 입력값(N)이 증가해도 실행시간은 동일한 알고리즘, index로 접근하여 바로 처리할 수 있는 연산 과정의 시간 복잡도 → 기본 연산 수라고 생각하면 편함
- ex) stack의 push, pop

2. `O(log N)`

- 연산이 한 번 실행될 때 마다 데이터의 크기가 절반 감소하는 알고리즘 (log의 지수는 항상 2)
- ex) binary search 알고리즘, tree 형태 자료구조 탐색

3. `O(N)`

- 입력값(N)이 증가함에 따라 실행시간도 선형적으로 증가하는 알고리즘
- ex) 1중 for문

4. `O(N log N)`

- O(N)의 알고리즘과 O(log N)의 알고리즘이 중첩된 형태
- ex) 퀵 / 병합 / 힙 정렬

5. `O(N^2)`

- O(N)의 알고리즘과 O(log N)의 알고리즘이 중첩된 형태
- ex) 2중 For 문, 삽입/거품/선택 정렬

6. `O(2^N)`

- 빅오 표기법 중 가장 느린 시간 복잡도로 주로 재귀적으로 수행하는 알고리즘이 이에 해당
- ex) fibonacci 수열

### 알고리즘 문제 풀 때 Tip

- 입력 데이터의 범위와 실행 시간 범위를 고려하면 문제에 대한 감을 잡을 수 있다. 보통 코드 1억 번 수행시간은 1초이다. 이를 기준으로 전체 수행시간을 어림잡아 문제에 사용되는 알고리즘에 대한 힌트를 얻으면 알고리즘 사용 가능 여부를 판단하여 접근할 수 있다.
