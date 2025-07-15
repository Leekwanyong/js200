// 126번
// Map 객체에 요소 추가/ 삭제 / 확인하기
// ES6 부터 표준으로 추가된 데이터 집합체의 한 종류
// 키와 값를 한 쌍으로 저장, 중복된 키는 허용 X
// 어떤 종류의 자료형도 선언하는 것이 가능하다.
const map = new Map();

map.set("one", 1);
map.set("two", 2);

console.log(map.get("one")); // 1
console.log(map.has("two")); // true
map.delete("one");

console.log(map.has("one")); // false
console.log(map.has("two")); // true

// 127번
// Map 객체의 크기 확인하기 size
map.set(2, "two");
map.set([1, 2, 3], "Three elements");
map.set({ a: "A", b: "B" }, "object element");
map.set(function () {}, "function element");

console.log(map.size()); // 5

// 128번
// Map 객체 요소 나열하기 (keys, values, entries)
// entries 키와 값을 한 쌍으로 배열로 만듬
const map2 = new Map();

map2.set("one", 1);
map2.set("two", 2);
map2.set("three", 3);

const keys = map2.keys();
const values = map2.values();
const entries = map2.entries();

console.log(keys.next().value); // one
console.log(values.next().value); // 1
console.log(entries.next().value); // ['one', 1]

console.log(keys); // {'two', 'three'}
console.log(values); // {2, 3}
console.log(entries); // {['two',2], ['three', 3]}

// 129번
// Map 객체 순환하기
// for-of, foreach
const map3 = new Map();

map3.set("one", 1);
map3.set("two", 2);

console.log("키 정보만 출력합니다.");
for (let key of map3) {
    console.log(key); // one two
}

console.log("값 정보만 출력합니다");
for (let value of map.values()) {
    console.log(value); // 1 2
}

console.log("[for..of, entries] 키,값 정보를 동시에 출력합니다");
for (let [key, value] of map.entries()) {
    console.log(`키는 ${key}, 값은 ${value} 입니다`); // one 1, two 2
}

console.log("[for..of] 키,값 정보를 동시에 출력합니다");
for (let [key, value] of map) {
    console.log(`키는 ${key}, 값은 ${value} 입니다`); // one 1, two 2
}

console.log("[forEach] 키,값 정보를 동시에 출력합니다");
map3.forEach((value, key) => {
    console.log(`키는 ${key}, 값은 ${value} 입니다`); // one 1, two 2
});

// 130번
// map 객체 순환하기2
const map4 = new Map();

for (let num of [1, 2, 3, 4, 5]) {
    map4.set((value) => value * 2, num);
}

for (let [func, value] of map4) {
    console.log(func(value)); // 2 4 6 8 10
}
