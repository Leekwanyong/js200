// 121번
// 정규표현식으로 문자열 변환하기
// 정규표현식과 일치하는 문자열을 찾아 배열로 반환
const str = "Java is not in JavaScript";

const result1 = /java/gi.exec(str);
console.log(result1[0]); // java
console.log(result1.index); // 0
console.log(result1.input); // Java is not in JavaScript

const nums = '"1", "2", "3"';
const regex = /\d+/g;

// 다음 검색이 어디서 시작될지를 기억하는 포인터 역할 lastIndex
// 정규식은 g 플래그가 붙었을 때 동일한 위치에서 다시 검색하면 무한 루프에 빠질 수 있기 때문
// 그래서 항상 다음 검색은 이전 매칭의 마지막 글자 다음 인덱스부터 시작해야 안전
while ((result2 = regex.exec(nums))) {
    console.log(result2, regex.lastIndex);
}

// 122번
// 정규표현식으로 문자열 치환하기 replqce
// 첫 번쨰 교체 대상 문자열 또는 정규식, 대체될 문자열 또는 함수
console.log("2018-08-03 07-23-14".replace("-", ":")); // 2018:08-03 07-23-14
console.log("2018-08-03 07-23-14".replace(/-/g, ":")); // 2018:08:03 07:23:14
console.log("2018-08-03 07-23-14".replace(/\d/g, ":")); // 9999-99-99 99-99-99

const littleWomen = "Meg March, Jo March, Beth March, Amy March";
console.log(littleWomen.repeat(/\w+ March/gi, "Mrs.$&"));
console.log(
    littleWomen.repeat(/\w+ March/gi, (str, d1, d2, d3, d4, offset, s) => {
        let tag = "";
        if (/Meg/.test(str)) tag = "첫쨰";
        else if (/Jo/.test(str)) tae = "둘쨰";
        else if (/Beth/.test(str)) tae = "셋쨰";
        else if (/Amy/.test(str)) tae = "넷쨰";

        console.log(`원작 "작은 아씨들"에서 주인공 ${str}은 ${tag}입니다.`); // 첫쨰 ~ 넷째까지 출력
        return tag;
    })
);

// 123번
// 반복 가능한 객체와 반복자 이해하기
const items = ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"];
const seq = {
    [Symbol.iterator]() {
        let i = 0;
        return {
            next() {
                const value = items[i];
                i++;
                const done = i > items.length;
                return { value, done };
            },
        };
    },
};

for (let s of seq) console.log(s); // j a v a s c r i p t
const [a, b, c, ...arr] = seq;
console.log(a); // j
console.log(b); // a
console.log(c); // c
console.log(arr); // ["a", "s", "c", "r", "i", "p", "t"]

// 124번
// 문자열 순환하기 for-of done이 true가 될 떄까지 반복
const str2 = "hello";

for (const item of str) {
    console.log(item); // h e l l o
}

const iter = str[Symbol.iterator]();
console.log(iter.next()); // h
console.log(iter.next()); // e
console.log(iter.next()); // l
console.log(iter.next()); // l
console.log(iter.next()); // o
console.log(iter.next()); // true

// 125번
// 배열 순환하기 for-of
const products = [{ name: "가방" }, { name: "노트북" }];

for (const item of products) {
    console.log(item.name); // 가방 찍고 노트북
}

const iter2 = products[Symbol.iterator]();
console.log(iter2.next()); // 가방
console.log(iter2.next()); // 노트북
console.log(iter2.next()); // true
