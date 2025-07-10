// 76번
// lastIndexOf 메소드는 문자열의 두에서부터 일치여부를 확인
const str = "Carpe diem, seize the day";

console.log(str.lastIndexOf("e")); // 20
console.log(str.lastIndexOf("C")); // 0
console.log(str.lastIndexOf("c")); // -1 문자가 없기 떄문에 -1 리턴
console.log(str.lastIndexOf(", se")); // 10

// 77번
// includes 특정 문자열 포함 여부
// 문자열이 있다면 true 없다면 false를 반환
// 첫 번째 문자열, 두 번쨰는 인덱스 이는 선택이다
const str2 = "Make your lives extradordinary";

console.log(str2.includes("Make")); // true
console.log(str2.includes("Make", 1)); // false

// 78번
// toLowerCase 문자열을 모두 소문자로
// toUpperCase 문자열을 모두 대문자로
console.log("Find Your Own Voice".toLowerCase()); // 모두 소문자
console.log("Find Your Own Voice".toUpperCase()); // 모두 대문지

const value = "Find Your Own Voice";
console.log(value.toLocaleLowerCase() === value.toUpperCase()); // false

// 79번
// from 배열 요소를 분할/변환
// 두 번쨰 인자는 콜백 필수 값은 아니다. 콜백함수를 대입하면 분할함과 동시에 각 값을 변환시켜준다.
const str3 = "12345678";

const distributedArr = Array.from(str3);
console.log(distributedArr); // ['1'] 문자열 1 ~ 8까지 배열로

const modifiedArr = Array.from(distributedArr, (el) => el * 2);
console.log(modifiedArr); // [1,2,3,4,5,6,7,8]

// 80번
// split 문자열을 특정 구분자에 의해 배열로 나누기
// 문자열을 배열로
const capitals = `Prague,Czech Republic 
Copenhagen,Denmark 
Paris,France
Madrid,Spain
Rome,Italy`;

capitals.split("\n").forEach((s) => {
    const capital = s.split(",")[0];
    const country = s.split(",")[1];
    console.log(`${capital} is in ${country}`);
});
// Prague is in Czech Republic
// Copenhagen is in Denmark
// Paris is in France
// Madrid is in Spain
// Rome is in Italy
