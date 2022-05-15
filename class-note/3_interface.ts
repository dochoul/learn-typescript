interface User {
  age: number;
  name: string;
}

// 변수에 활용한 인터페이스
let seho: User = {
  age: 33,
  name: '세호'
}

// 함수에 활용한 인터페이스
function getUser(user: User) {
  console.log(user);
}
let capt = {
  age: 10000,
  name: '캠틴'
}
getUser(capt);

// 함수의 스펙(구조)에 인터페이스 활용
interface sumFunction {
  (a: number, b: number): number
}

var sum: sumFunction;
sum = function (a: number, b: number): number {
  return a + b;
}


// 인덱싱
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c']
//arr[0] = 10;



// 딕셔너리 패턴
interface StringRegexDictionary {

}


// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

let soyul: Developer = {
  name: 'soyul',
  age: 6,
  language: 'korean'
}