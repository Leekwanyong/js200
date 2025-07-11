// 91번
// forEach 배열 순회 Array 내장 객체 메소드다. 각 요소에 callback 함수를 실행한다.
const arr = [
    { id: 0, name: "혜림", age: 6 },
    { id: 1, name: "현일", age: 3 },
    { id: 2, name: "현아", age: 5 },
    { id: 3, name: "우림", age: 2 },
];

arr.forEach((el) => {
    console.log(el.name); // 혜림 현일 현아 우림
});

// 92번
// 배열 정렬하기 sort 메서드는 새로운 배열을 반환하지 않는다. 원본 배열을 자체를 변경시킨다.
// 반환값이 음수면 → a를 앞에 둔다
// 반환값이 양수면 → a를 뒤로 보낸다
// 반환값이 0이면 → 순서를 변경하지 않는다
// a = 10, b = 3 → 10 - 3 = 7 → 양수 → 10은 뒤로, 3은 앞으로
// a = 3, b = 20 → 3 - 20 = -17 → 음수 → 3은 앞으로
// a = 20, b = 1 → 20 - 1 = 19 → 양수 → 20은 뒤로
const numArr1 = [2, 0, 3, 4, 1];
const numArr2 = [2, 0, 3, 4, 1];
const objArr = [
    { id: 2, name: "Leo" },
    { id: 0, name: "Daniel" },
    { id: 3, name: "Asher" },
    { id: 4, name: "Chloe" },
    { id: 1, name: "Chloe" },
];

numArr1.sort(function (a, b) {
    return a - b;
});
numArr2.sort(function (a, b) {
    return b - a;
});

objArr.sort(function (a, b) {
    if (a.name > b.name) return 1;
    else if (b.name > a.name) return -1;
    else return 0;
});

console.log(`오름차순 : ${numArr1}`); // 0,1,2,3,4
console.log(`내림차순 : ${numArr2}`); // 4,3,2,1,0
console.log(objArr); // [  { id: 3, name: "Asher" },  { id: 4, name: "Chloe" },   { id: 1, name: "Chloe" }, { id: 0, name: "Daniel" },{ id: 2, name: "Leo" }]

// 93번
// 배열의 순서를 반대로 나열하기 reverse
// 원본 배열을 변형한다. 주의
const str = "abcdefg";
const arr2 = str.split("");
arr2.reverse();

console.log(arr2.join("")); // gfedcba

// 94번
// 배열 요소가 특정 조건을 만족하는지 some
// callback 함수의 return 값이 true를 반환할 떄까지만 배열 요소를 순환
// 만약 마지막 요소까지 true가 아니라면 false를 반환
const isHyunAHere = arr.some((el) => el.name === "현아");
const olderThanSix = arr.some((el) => el.age > 6);

console.log(isHyunAHere); // true
console.log(olderThanSix); // false

// 95번
// 모든 배열 요소가 특정 조건을 만족하는지 확인하기 every
// callback 함수 조건이 한번이라도 false 인 경우 false반환과 함께 실행이 종료
// 모든 조건이 true일 떄만 true를 반환
const isAllHyunA = arr.every((el) => el.name === "현아");
const youngerThanSevenAll = arr.every((el) => el.age < 7);

console.log(isAllHyunA); // false
console.log(youngerThanSevenAll); // true
