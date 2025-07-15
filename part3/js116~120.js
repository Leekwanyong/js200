// 116번
// JSON을 문자열로 변환하기
// stringify 대입한 값을 JSON 문자열로 변환
// 첫 번쨰 인자는 JSON 문자열로 변환할 대상 값
// 두 번쨰 리플레이서는 JSON 문자열로 변환하기 전에 값을 변경하는 인자
// 세 번쨰 인자 공백 개수는 JSON문자열의 들여쓰기 시 공백 개수를 의미
const testStringify = {
    stringifiedNum: JSON.stringify(13.1),
    stringifiedStr: JSON.stringify("kiss Carnival"),
    stringifiedBln: JSON.stringify(false),
    stringifiedArr: JSON.stringify([2003, 2017]),
};

for (let key in testStringify) {
    console.log("------------key--------------");
    console.log(typeof testStringify[key]);
    console.log(testStringify[key]);
}

console.log("------------stringifyObj------------------");
const obj = {
    drama: "PET",
    season: 2017,
    casting: ["koyuki", "matsumoto jun"],
    character: ["sumire", "momo"],
};

console.log(typeof JSON.stringify(obj));
console.log(JSON.stringify(obj));
console.log(JSON.stringify(obj, ["drama", "season"]));
console.log(JSON.stringify(obj, null, 4));
console.log(
    JSON.stringify(
        obj,
        (key, val) => {
            if (key === "season") return 200;
            return val;
        },
        4
    )
);

// 117번
// JSON문자열을 JSON을로 변환하기 parse
const jsonStr =
    '{"drama": "PET", "season": 2017, "casting":}' + '["koyuki", "matsumoto jun"], "character": ["sumire", "momo"]';

console.log(JSON.parse(jsonStr));
console.log(
    JSON.parse(jsonStr, (key, val) => {
        if (key === "season") val = 2003;
        return val;
    })
);
// 원시형 값 중 JSON 문자열이 아니어도 오류 없이 parse 메소드가 실행되는 경우가 있다.
console.log(JSON.parse("13.1"));
console.log(typeof JSON.parse("13.1"));
console.log(JSON.parse("false"));
console.log(typeof JSON.parse("false"));
// 특정 원시 자료형을 나타내지 않는 문자형, 또는 배열 형태의 문자형은 실행 즉시 SyntaxError를 발생시킨다.
// ''홑 일 떄 현재는 프리티어 떄문에 "" 이렇게 됨
console.log(JSON.parse("kiss Carnival"));
console.log(JSON.parse("[2003, 2017]"));

// 119번
// 정규표현식으로 대응되는 문자열 위치 확인하기 (search)
const str = "To lose your path is the way to find that path";

const regex1 = /path/;
const regex2 = /q/;
// 문자열 전체에서 찾음
const regex3 = /t/g;
// i를 추가하면 대소문자 구분없이 찾음
const regex4 = /t/gi;

console.log(str.search(regex1)); // 13
console.log(str.search(regex2)); // -1
console.log(str.search(regex3)); // 15
console.log(str.search(regex4)); // 0

// 119번
// match 정규표현식으로 문자열 확인하기
// 정규 표현식에 맞는 부분을 검색해서 해당 값을 반환, 배열을 반환
const sensitiveCaseRegex = /to/;
const ignoreAllCaseRegex = /to/gi;
// a-f 포함 여부 w+ 화이트 스페이스 전까지
const findRangeCaseRegex = /([a-f])\w+/i;
const findAllRangeCaseRegex = /([a-f])\w+/gi;

console.log(str.match(sensitiveCaseRegex));
console.log(str.match(ignoreAllCaseRegex));
console.log(str.match(findRangeCaseRegex));
console.log(str.match(findAllRangeCaseRegex));

// 120번
// 정규표현식으로 특정 문자의 포함 여부 확인 test
const numRegExp = /[0-9]+/;
const phoneRegExp = /\d{3}-\d{3,4}-\d{4}$/;

console.log(numRegExp.test(12345)); // true
console.log(numRegExp.test("test")); // false
console.log(phoneRegExp.test("010-3003-0046")); // true
console.log(phoneRegExp.test("02-8844-1234")); // false
