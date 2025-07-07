// 66번
// 실수형 숫자로 변환하기
// parseFloat 문자열을 실수형 숫자로 변환한다.
console.log(parseFloat(5.55)); // 5.55
console.log(parseFloat("5.55")); // 5.55

// 67번
// trim 문자열 양쪽 공백, 탭, 줄바꿈 제거
const sentences = [
    "       ABC abc",
    "ABC abc      ",
    `first
second third
    fourth
sentences`,
];

const filterSentence = (sentences) => {
    const fillterd = [];
    sentences.forEach((sentence) => {
        fillterd.push(sentence.trim());
    });
    return fillterd;
};

console.log(filterSentence(sentences)); // ['ABC abc', 'ABC abc', 'first \nsecond third\n second third\n        fourth\nsecond']

// 68번
// slice 문자열 자르기 종료 인덱스는 선택사항
// 기존 문자열 영향 X 첫 번쨰 인자가 두 번쨰 인자보다 크면 slice 작동 X
const sentence = "The sun will shine on us again";
console.log(sentence.slice(13)); // shine on us again
console.log(sentence.slice(13, 24)); // shine on us
console.log(sentence.slice(0)); // The sun will shine on us again
console.log(sentence.slice(0, -23)); // The sun
console.log(sentence.slice(50));
console.log(sentence.slice(7, 2));

// 69번
// substring 문자열 자르기 두 번쨰 종료 인덱스는 선택사항
// 기존 문자열 변경 X
const sentence2 = "This will be the end of Wakanda";
console.log(sentence2.substring(13)); //  the end of Wakanda
console.log(sentence2.substring(13, 20)); // the end
console.log(sentence2.substring(0)); // This will be the end of Wakanda
console.log(sentence2.substring(0, -20)); //
console.log(sentence2.substring(50)); //
console.log(sentence2.substring(20, 13)); // the end

// 70번
// substr 문자열 자르기 두 번쨰 인자는 문자열 길이
// 추줄 하고자 하는 문자열에 길이를 제대로 알고 있다면 사용 하는 것이 좋다.
// 음수를 넣으면 정상적으로 실행이 되지 않는다.
const sentence3 = "Wakanda Forever!!!";
console.log(sentence3.substr(8)); // Forever!!!
console.log(sentence3.substr(8, 7)); // Forever
console.log(sentence3.substr(0)); // Wakanda Forever!!!
console.log(sentence3.substr(-10)); // Forever!!!
console.log(sentence3.substr(0, -3)); //
console.log(sentence3.substr(30)); //
console.log(sentence3.substr(0, 30)); // Wakanda Forever!!!
