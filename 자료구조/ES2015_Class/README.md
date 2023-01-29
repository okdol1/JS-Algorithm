# 클래스(Class)

## 클래스란?
사전에 정의된 속성 및 메소드들을 이용해 객체를 생성하기 위한 청사진(붕어빵 틀)

- 자바스크립트는 진정한 객체 지향인적은 없으며,
- 단지 프로토타입 기반 상속자 혹은 프로토타이핑으로 불리는 무엇인가를 이용하는 것

## 클래스 문법
- 클래스를 정의하는 것 자체로는 어떤 일도 발생하지 않는다.
- `new` 키워드를 통해 생성되거나 인스턴스화 됩니다.
- constructor 함수는 클래스가 인스턴스화 될 때 동작하는 특별한 함수
- constructor(생성자) 내부에서 사용되는 `this`는 개별 인스턴스를 지칭

```js
// 클래스
class Student {
  constructor(firstName, lastName, year) {
    // this는 개별 인스턴스를 지칭(firstStudent 또는 secondStudent)
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year; // 반드시 파라미터와 속성이 같을 필요는 없음
  }
}
// 인스턴스
const firstStudent = new Student('Cliff', 'Hudson', 3);
firstStudent.firstName; // 'Cliff'
const secondStudent = new Student('Mathew', 'Baltz'); // grade: undefined -> grade가 정의되지 않음
secondStudent.grade = 4; // secondStudent 의 프로퍼티를 직접 추가
```

## instance 메소드

인스턴스 메소드들은 특정 인스턴스에 내장되어 있다기 보다는 특정한 단일 인스턴스에 적용되는 기능을 제공한다고 할 수 있다.

### 실질적으로 큰 의미없는 예제들이지만 instance 메소드 이해하기 좋은 예제
```js
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
  }

  fullName() {
    // 여기서 this도 개별 인스턴스에만 적용됨
    return `Your full name is ${this.firstName} ${this.lastName}`
  }
}
// 인스턴스
const firstStudent = new Student('Cliff', 'Hudson', 3);
firstStudent.fullName() //Your full name is Cliff Hudson
```

### 개별 인스턴스 상에서 실제로 동작하는 instance 메소드 예제
```js
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    // 초기 생성 시에 학생들은 자동적으로 한번도 지각한 적이 없게 됨
    this.tardies = 0;
  }

  markLate() {
    this.tardies += 1;
    if(this.tardies >= 3) {
      return "YOU ARE EXPELLED!!!"
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
  }
}
// 인스턴스
const firstStudent = new Student('Cliff', 'Hudson', 3);
firstStudent.tardies // 0
firstStudent.markLate() // Cliff Hudson has been late 1 times
firstStudent.tardies // 1
firstStudent.markLate() // Cliff Hudson has been late 2 times
firstStudent.markLate() // YOU ARE EXPELLED!!!
```
> 내생각 : 신기하네.. 클래스 잘 이해못한 상태로 넘어갔는데 각 인스턴스 마다 개별적으로 카운팅할 수 있구나

### 인자를 받아들이는 instance 메소드 예제
- `firstStudent.scores.push()` 로 수동으로 값을 채울수는 있지만
- 동일한 일을 수행하는 메소드를 정의하는 것이 더 관습적입니다.
```js
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.scores = [];
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce(function(a, b) {return a + b;})
    return sum / this.scores.length;
  }
}
// 인스턴스
const firstStudent = new Student('Cliff', 'Hudson', 3);
firstStudent.scores; // []
firstStudent.addScore(92);
firstStudent.addScore(87);
firstStudent.scores; // [92, 87]
firstStudent.calculateAverage() //89.5
```

## class 메소드 추가하기

- 메소드 정의 앞에 `static` 키워드 사용 
  - `static` 메소드 : 클래스에 종속되는 반면 클래스는 개별 인스턴스 메소드에는 반드시 종속적일 필요가 없는 메소드 혹은 기능들을 생성하도록 해 줌
  - 오직 클래스명.메소드명 형태로 호출

```js
class Point {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy); 
  }
}
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
Point.distance(p1, p2); // 7.0710678118654755
```

## 클래스 내부에서 `this`
- ES2015 클래스 내부에서 `this`가 동작하는 방식은
- 어떤 인스턴스 메소드 혹은 constructor 내부에서든 `this`는 개별 클래스로부터 생성된 객체, 즉 실제 인스턴스를 참조한다는 것입니다.