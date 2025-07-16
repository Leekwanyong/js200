// 131번
// set 객체의 값 추가/ 삭제/ 확인하기
// Set은 단일 값만 저장하는 "값의 집합"
// “순회 가능한 이터러블이며, 단일 값만 저장하지만 객체처럼 흉내를 낸 배열”
const s = new Set();

s.add("one");
s.add("two");
s.add("three");

console.log(s.has("one")); // true
s.delete("one");
console.log(s.has("one")); // false
console.log(s.has("two")); // true

// 132번
// set 객체의 크기 확인하기
const s1 = new Set();

s1.add("one");
s1.add(2);
s1.add([1, 2, 3]);
s1.add({ a: "A", b: "B" });
s1.add(function () {});
console.log(s1.size); // 5
// 값 초기화
s1.clear();
console.log(s1.size); // 0

// 133번
// set 객체로 Array 중복 요소 없애기
const arr = ["one", "two", "three", "two", "one", "four"];
const s3 = new Set(arr);
console.log([...s3]); // ["one", "two", "three", "four"];

// 134번
// set 객체 값 나열하기
const s4 = new Set();

s4.add("one");
s4.add("two");
s4.add("three");

const keys = s4.keys();
const values = s4.values();
const entries = s4.entries();

console.log(keys.next().value); // one
console.log(values.next().value); // one
console.log(entries.next().value); // ['one', 'one']

console.log(keys); // {'two', 'three'}
console.log(values); // {'two', 'three'}
console.log(entries); // {['two', 'two' ], ['three', 'three']}

// 135번
// set객체 순환하기 for-of, foreach
const s5 = new Set();

s5.add("one");
s5.add("two");

console.log("키 정보만 출력합니다");
for (let key of s5.keys()) {
    console.log(key); // one two
}

console.log("값값 정보만 출력합니다");
for (let key of s5.values()) {
    console.log(key); // one two
}

console.log("[for..of, entries], 키,값 정보를 동시에 출력합니다");
for (let [key, value] of s5.entries()) {
    console.log(`키는 ${key} 값은 ${value}`); // one one,  two two
}

console.log("[forEach] 키,값 정보를 동시에 출력합니다.");
s5.forEach((value, key) => {
    console.log(`키는 ${key} 값은 ${value}`); // one one two two
});
