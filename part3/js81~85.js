// 81번
// JS에서 배열은 Linked List 자료구조 형태이다.
// 따라서 배열 앞과 뒤에서 요소를 추가하는 것이 가능하다.
// push는 배열 뒤에서 요소를 추가한다.
const festra = ["mang"];
festra.push("chimmy");
festra.push("tata");
festra.push("cooky");
festra.push("shooky");

festra.forEach((name) => {
    console.log(name); // mang, chimmy, tata, cooky, shooky (,)마는 없음음
});

// 82번
// unshift 메소드는 배열 맨 앞에 요소를 추가한다.
festra.unshift("koya");
festra.unshift("rj");

festra.forEach((name) => {
    console.log(name); // koya, rj mang, chimmy, tata, cooky, shooky (,)마는 없음음
});

// 83번
// 배열 길이 구하기 length
const ship = {
    max: 4,
    passengers: [],
    onBoard: function (name) {
        if (this.passengers.length === 4) {
            console.log(`This ship is full, ${name} can not board this ship.`); // asher
        } else {
            this.passengers.push(name);
            console.log(name); // chloe jay david asher
        }
    },
};

ship.onBoard("chloe");
ship.onBoard("jay");
ship.onBoard("david");
ship.onBoard("asher");
console.log(ship.passengers);
["chloe", "jay", "david", "asher"];

// 84번
// 배열 합치기 concat
// 다만 자료형이 배열이어야 한다. 문자열도 concat이 있음 헷갈리지 않게 주의
const prevList = [1, 2, 3];
const currentList = [4, 5, 6];
const nextList = [7, 8, 9];

console.log(prevList.concat(currentList)); // [1, 2, 3, 4, 5, 6]
console.log(prevList.concat(nextList)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(["배열"].concat("합치기")); // ['배열', '합치기']
console.log(["배열"].concat("합치기", "JavaScript200")); // ['배열', '합치기', 'JavaScript200']

// 85번
// 배열에 특정 구분자 넣어 문자형으로 변환하기 join
// Array 객체의 메소드 join은 각 배열 요소를 병합하여 하나의 문자열로 변환
const dialogue = [
    "Fear is the path to the dark side",
    "Fear leads to anger",
    "Anger leads to hate",
    "Hate leads to suffering",
    "I sense much fear in you",
];

console.log(dialogue.join(". "));
/* Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. 
Hate leads to suffering. I sense much fear in you.
*/

console.log(dialogue.join(".\n "));
/*
Fear is the path to the dark side.
Fear leads to anger.
Anger leads to hate.
Hate leads to suffering.
I sense much fear in you.
*/
