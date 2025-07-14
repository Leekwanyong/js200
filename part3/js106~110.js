// 106번
// 객체 병합 확장하기 인자로 대입된 객체들을 하나로 병합
// 주의점 첫 번쨰 인자로 대입된 객체를 기준으로 병합, 이 객체를 기준으로 다른 객체들이 병합되기 떄문에
// 첫 번쨰 인자는 원본이 수정되어 반환된다.
const obj1 = { one: 1, two: 2, three: 3 };
const obj2 = { name: "탄이", age: 5, address: "Seoul" };
const obj3 = { friends: ["헤림", "현아", "현일", "우림"] };

const newObj1 = Object.assign({}, obj1);
const newObj2 = Object.assign({}, obj1, obj2);
newObj1.four = 4;

console.log(obj1); //  { one: 1, two: 2, three: 3 }
console.log(newObj1); //  { one: 1, two: 2, three: 3, four: 4 }
console.log(newObj2); // { one: 1, two: 2, three: 3, name: "탄이", age: 5, address: "Seoul" }

const newObj3 = Object.assign(obj1, obj3);

console.log(obj1); // { one: 1, two: 2, three: 3 }
console.log(newObj1); //  { one: 1, two: 2, three: 3, four: 4 }
console.log(newObj2); // { one: 1, two: 2, three: 3, name: "탄이", age: 5, address: "Seoul" }
console.log(newObj3); //  { one: 1, two: 2, three: 3, friends: ["헤림", "현아", "현일", "우림"] }

// 107번
// 진수 변환 toString 특정 진법으로 표현하여 문자형으로 반환한다.
const des = 531;

const binByDex = decodeURI.toString(2);
const octByDex = decodeURI.toString(8);
const hexByDex = decodeURI.toString(16);

console.log(binByDex); // 1000010011
console.log(octByDex); // 1023
console.log(hexByDex); // 213

// 108번
// 특정 진법의 수를 10진수 변환하기
const bin = 1000010011;
const oct = 1023;
const hex = 213;

const dexByBin = parseInt(bin, 2);
const dexByOct = parseInt(oct, 8);
const dexByhex = parseInt(hex, 16);
const hexByOct = parseInt(oct, 8).toString(16);

console.log(dexByBin); // 531
console.log(dexByOct); // 531
console.log(dexByhex); // 531
console.log(hexByOct); // 213

// 109번
// 랜덤값 구하기 random 무작위의 실수형 값을 반환
const generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

for (let i = 0; i < 5; i++) {
    console.log(generateRandom(1, 10));
}

for (let i = 0; i < 5; i++) {
    console.log(generateRandom(1, 100));
}

// 110번
// 특정 자리수에서 반올림하기 round
const val = 573.926;

console.log(Math.round(val)); // 574
console.log(Math.round(val * 10) / 10); // 573.9
console.log(Math.round(val * 100) / 100); // 573.93
console.log(Math.round(val / 10) * 10); // 570
console.log(Math.round(val / 100) * 100); // 600
