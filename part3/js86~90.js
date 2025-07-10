// 86번
// pop 배열 마지막 요소 추출
const arr = [1, 2, 3];
console.log(arr.pop()); // 3
console.log(arr.pop()); // 2
console.log(arr.pop()); // 1

// 87번
// shift 배열 맨 앞 요소 추출
// 반환할 요소가 없으면 undefined
const arr2 = [1, 2, 3];
console.log(arr2.shift()); // 1
console.log(arr2.shift()); // 2
console.log(arr2.shift()); // 3
console.log(arr2.shift()); // undefined

// 88번
// 특정 위치의 요소 추출하기 slice
// 시작 인덱스와 끝 인덱스를 정해야 한다. 다만 끝 인덱스를 제외하고 그 이전까지 요소를 추출한다.
// 원본 배열을 변경하지 않고 얕은 복사를 수행한다.
// 배열 길이보다 큰 값을 넣으면 배열 가장 마지막까지 모두 반환한다.
const fruits = ["melon", "lemon", "source", "apple", "juice"];
console.log(`과일이 아닌 요소는 ${fruits.slice(2, 3)}와 ${fruits.slice(4, 5)} 입니다.`); // source juice
console.log(fruits.slice(0, 10)); // ["melon", "lemon", "source", "apple", "juice"]

// 89번
// splice 특정 위치의 요소를 삭제하거나 수정한다.
// 시작 인덱스, 삭제할 요소의 개수, 추가될 요소들 ...
fruits.splice(4, 1);
fruits.splice(4, 0, "grape");
fruits.splice(2, 1, "mandarin", "strawberry", "watermelon");
console.log(fruits);
["melon", "lemon", "mandarin", "strawberry", "watermelon", "apple", "grape"];

// 90번
// 배열의 특정 요소 위치 확인하기 indexOf
// 값이 일치하는 경우 해당 인덱스를 반환한다.
const arr3 = ["sping", "summer", "fall", "winter", "is", "down"];

console.log(arr3.indexOf("winter")); // 3
console.log(arr3.indexOf("winter", 4)); // -1
