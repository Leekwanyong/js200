// 31번
var obj = {};
for ( var i = 0; i < 4; i++) {
    obj['key' + i] = i;
}
console.log(obj);

var profile = 'chloe:30';
var person = {
    [profile]: true,
    [profile.split(':')[0]]: profile.split(':')[1],
}
console.log(person);

// 32번
var obj2 = {a: 1, b: 2, c: 3, d: 4};

var {a, c} = obj2;
console.log(a); // 1
console.log(c); // 3

// 값이 없는 경우 10, 5로 출력 값을 주지 않았지만 obj2에 있는 값 1, 2를 출력
var {a: newA = 10, b: newB = 5} = obj2;
console.log(newA); // 1
console.log(newB); // 2

var arr = [1, 2, 3, 4];
var [b, c, ...rest] = arr;
console.log(b); // 1
console.log(c); // 2
console.log(rest); // 3, 4

var [a = 10, f = 9] = arr;
console.log(a); // 1
console.log(f); // 2

function getArr() {
    return [1, 2, 3, 4, 5, 6];
}

[a, , , , , f] = getArr();
console.log(a); // 1
console.log(f); // 6

// 33번
const symbol = Symbol();
const hello = Symbol('hello');

console.log(Number(3) === Number(3)); // true
console.log(Symbol('symbol') === Symbol('symbol')); // false
console.log(Symbol() === Symbol()); // false
console.log(typeof Symbol()); // symbol

const nationality = Symbol('nationality');
const user = {
    name: 'jay'
}
// 여기 동작이 조금 신기했는데 결국에는 심볼도 유일한 값이고 변경이 불가능하다는 것을 기억하고 있어야한다.
// 객체 타입 즉 참조 타입은 변경이 가능하다. 이는 메모리와 관련이 있다.
// 중요한 점 심볼은 다른 원시 값처럼 값을 재사용을 안하고 새로운 메모리를 만든다는 점
user[nationality] = 'korean';
console.log(user[nationality]); // korean

for (let key in user) {
    console.log(key, '1'); // Symbol은 for-in 루프로 가져올 수 없음
}

console.log(Object.keys(user)); // ["name"]
console.log(Object.getOwnPropertyNames(user)); // ["name"]
console.log(JSON.stringify(user)); // {"name": "jay"}
// getOwnPropertySymbols 해당 객체에 키를 가져온다.
const symbolProperties = Object.getOwnPropertySymbols(user);
console.log(symbolProperties); // [Symbol(nationality)]
console.log(user[symbolProperties[0]]); // korean

// 34번
var greeting_expression = function (name) {
    console.log('hi' + name);
}

function greeting_declartion(name) {
    console.log('hi' + name);
}

greeting_expression('Chloe'); // Hi, Chloe
greeting_declartion('Chloe'); // Hi, Chloe

// 35번
// JS 에서 에러 처리 방법은 throw, try-catch-finally 문이 있다.
// 에러는 크게 두 가지가 있다 하나는 예기치 못한 오류 하나는 개발자가 의도한 오류이다.
// throw 고의로 에러를 발생시킨다. 이후 코드 실행을 막아버린다.
function checkNumber(val) {
    if (typeof val === 'number') throw '유효하지 않은 값입니다.';
    console.log('숫자형 값으로 확인되었습니다.');
}

checkNumber(100); // 숫자형
checkNumber('Wrong type'); // 유효하지 않아
console.log('완료');

function checkNumber2(val) {
    if (typeof val === 'number') throw '유효하지 않은 값입니다.';
    console.log('숫자형 값으로 확인되었습니다.');
}

try {
    checkNumber(100); // 숫자형
    checkNumber('Wrong type'); //  유효하지 않아 이를 catch로 전달한다.
} catch (e) {
    console.error(`에러가 발생 ${e}`);
} finally {
    console.log('완료'); // 에러 여부 상관없이 실행
}