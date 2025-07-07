// 71번
// 문자열 길이 구하기 length
const arr = ["short", "long sentence, it is not appropriate"];

arr.forEach((item) => {
    if (item.length < 10) {
        console.log(item); // short
    }
});

// 72번
// toString 문자열로 변환
const num = 5;
const bool = true;
const str = "Hello";
const arr2 = [1, 2, 3];
const obj = { a: 15 };

console.log(num.toString()); // 5
console.log(bool.toString()); // true
console.log(str.toString()); // Hello
console.log(arr2.toString()); // 1,2,3
console.log(obj.toString()); // [object Object]

num.__proto__.toString = () => {
    return "toString 덮어쓰기";
};

console.log(num.toString()); // toString 덮어쓰기

// 73번
// concat 두 개의 문자열 하나로 합치기
// 하지만 concat 보다 + 연산자를 더 많이 사용한다 왜냐면 성능상에 이점이 더 좋다.
const str1 = "Hello";
const str2 = ", World";
const str3 = ", JavaScript";
const str4 = ", TypeScript";

console.log(str1.concat(str2, str3, str4)); // Hello, World, JavaScript, TypeScript

// 74번
// charAt 문자열 인덱스 위치 문자 추출
const str5 = "Good afternoon, Good evening, and Good night! " + "- The Truman Show, 1998";

console.log(str5.charAt(0)); // G
console.log(str5.charAt(5)); // a
console.log(str5.charAt(14)); // ,
console.log(str5.length); // 69
console.log(str5.charAt(500));

// 75번
// 특정 문자열 위치 확인하기 idnexOf
// 처음 등장하는 문자열이 0일 수도 있기 떄문에 -1로 안전하게 조건 체크
const str6 = "Carpe diem, seize the day";
console.log(`"e"는 ${str6.indexOf("e")} 번쨰 인덱스에 있습니다.`); // 4번쨰
console.log(`대문자 "C"는 ${str6.indexOf("C")} 번쨰 인덱스에 있습니다.`); // 0번쨰
console.log(`소문자 "c"는 ${str6.indexOf("c")} 번쨰 인덱스에 있습니다.`); // 1번쨰
console.log(`문자열 "se"는 ${str6.indexOf(", se")} 번쨰 인덱스에 있습니다.`); // 10번쨰

const arr3 = ["Carpe", "diem", "seize", "the", "day"];
const howManyHasE = (arr) => {
    let count = 0;
    arr.forEach((str) => {
        if (str.indexOf("e") > -1) count++;
    });
    return count;
};

console.log(`${arr3}에 "e"가 있는 요소는 모두 ${howManyHasE(arr3)} 개 입니다. `); // 4 개
