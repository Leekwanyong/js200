// 60번
// JS에는 표준 내장 객체가 존재한다. 이는 전역 스코프 안에 있는 객체들을 참조하고 있다.
const str = new String('js');
const num = new Number(200);
const bool = new Boolean(true);
const date = new Date();
const map = new Map();
const set = new Set();

console.log(Math.PI);
console.log(Date.parse('2025-07-05'));
console.log(JSON.parse({}));

// 기본적인 리터럴로 생성한다면 표준 내장 객체를 사용할 수 있는 이유는 참조하고 있기 때문이다.
const str1 = 'js'

// 61번
// 자료형 확인하기
const str2 = 'js';
const strObj = new String('js');
const num = 200;
const numObj = new Number(200);
const bool = true;
const boolObj = new Boolean(true);
const func = function (){};
const arr = [10, 20, 30];
const obj = {a1: 'test'};
const empty = null;
const notCalled = undefined;

console.log(typeof str2 === 'string'); // true
console.log(typeof strObj === 'object'); // true
console.log(typeof num === 'number'); // true
console.log(typeof numObj === 'object'); // true
console.log(typeof bool === 'boolean'); // true
console.log(typeof boolObj === 'object'); // true
console.log(typeof func === 'function'); // true
console.log(typeof arr === 'object'); // true
console.log(typeof obj === 'object'); // true
console.log(typeof empty === 'object'); // true
console.log(typeof notCalled === 'undefined'); // false
// instanceof는 원시 타입을 확인하는데 적합하지는 않다.
// 하지만 어떤 객체인지 구분하는데는 용이하다.
console.log(str2 instanceof String); // true
console.log(strObj instanceof String); // false
console.log(num instanceof Number); // true
console.log(numObj instanceof Number); // false
console.log(bool instanceof Boolean); // true
console.log(boolObj instanceof Boolean); // false
console.log(func instanceof Function); // true
console.log(arr instanceof Array); // true
console.log(obj instanceof Object); // true
console.log(empty instanceof Object); // true
console.log(notCalled instanceof undefined); // error 객체는 언디파인드가 아니기 때문
