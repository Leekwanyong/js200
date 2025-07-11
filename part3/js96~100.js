// 96번
// 배열의 특정 조건을 기준으로 필터링하기 filter
// callback 함수를 통해 배열 내부를 순환하면서, 요소 각각의 특정 조건을 만족하는지 확인한다.
// callback 함수의 반환값은 무조건 true 또는 false 이어야 한다.
// 이 중에서 true 결과값을 만족하는 요소들을 다시 새로운 배열에 담아 반환한다.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredTwo = arr.filter((a) => {
    console.log(`현재 위치의 값은 ${a} 입니다.`); // 1 ~ 10 까지 콘솔에 찍힘
    return a % 2 === 0;
});

console.log(filteredTwo); // [ 2, 4, 6, 8, 10 ]

const filteredThree = arr.filter((a) => a % 3 === 0);
console.log(filteredThree); // [ 3, 6, 9 ]

// 97번
// 배열의 특정 조건을 충족하는 요소 찾기 find
// callback 함수를 통해 배열 내부를 순환하면서 특정 조건을 만족하는 첫 번쨰 요소를 반환 반환값은 무조건 true 또는 false 이어야 함
const arr2 = [
    { name: "혜림", age: 6 },
    { name: "현일", age: 3 },
    { name: "탄이", age: 30 },
    { name: "현아", age: 5 },
    { name: "우림", age: 2 },
];

const myFriend = arr2.find((a) => a.age === 30);
console.log(myFriend); // { name: "탄이", age: 30 }

// 98번
// 배열 요소 일괄 변경하기 map
// callback 함수를 인자로 받아 callback 함수의 return으로 반환되는 값들을 재조합하여 새로운 배열을 만든다.
const arr3 = arr2.map((el) => {
    el.age = el.age + 1;
    return el;
});

const arr4 = arr2.map((el) => el.name);
/*
[
    { name: "혜림", age: 7 },
    { name: "현일", age: 4 },
    { name: "탄이", age: 31 },
    { name: "현아", age: 6 },
    { name: "우림", age: 3 },
];
*/
console.log(arr3);
console.log(arr4); // ["혜림", "현일", "탄이", "현아", "우림"]

// 99번
// 배열 내 값을 누적시키기 reduce
// 배열 요소를 순환하면서 callback 함수에 의해 단일 값으로 누적시킬 수 있다.
// 4개에 매개변수를 받는다. 1: 누적된 값, 2: 현재 요소 값, 3: 현재 인덱스, 4: 원본 배열이 있다. 1, 2는 필수 매개변수이다.
const numArr = [1, 2, 3, 4, 5];

const result = numArr.reduce((acc, el) => {
    return acc + el;
}, 0); // 초기값

console.log(result); // 15

// 100번
// 중첩된 배열을 단일하게 만들기
// reduce 메소드의 다른 활용 예제로 중첩된 배열을 단일 값으로 누적하는 방법 reduce는 잘 쓰면 진짜 좋은 것 같다.
const arr5 = [1, [2, 3], [4, 5, 6], ["배열", "나열하기"], "JavaScript"];

const result2 = arr5.reduce((acc, el) => {
    return acc.concat(el);
}, []);

console.log(result2); // [1, 2, 3, 4, 5, 6, "배열", "나열하기", "JavaScript"];
