// 101번
// 객체 키 추출 keys() 키만 추출된다 배열에 담아 반환된다.
const obj = {
    movie: "Sunny",
    music: "Like Sugar",
    style: "Retro",
    price: Infinity,
};

const arr = Object.keys(obj);

console.log(arr); // ["movie", "music", "style", "price"];

// 102번
// 값만 추출 values 배열에 담아 반환
const value = Object.values(obj);
console.log(value); // ['Sunny', 'Lkey Sugar', 'Retro', Infinity]

// 103번
// 객체를 배열로 변환 entries
const modifiedObj = Object.entries(obj);
console.log(modifiedObj); // [["movie", 'Sunny'], ["music", 'Lkey Sugar'], ["style", 'Retro'], ["price", Infinity]]

// 104번
// 객체 변경되지 않도록 하기 freeze 객체 동결
// 동결 이후에는 다른 속성을 추가하거나 제거 할 수 없다.
let obj2 = {};

obj2.title = "IDOL";
obj2 = Object.freeze(obj2);
obj2.title = "Euphoria";

console.log(obj2); // {title: 'IDOL'}

const changeUnitNum = (obj, num) => {
    "use strict";

    while (true) {
        console.log(obj);

        if (obj.age >= num) {
            obj = Object.freeze(obj);
        }
        obj.age += 1;
    }
};

let profile = { name: "지연", age: 25 };
/*
{ name: "지연", age: 25 }
{ name: "지연", age: 26 }
{ name: "지연", age: 27 }
{ name: "지연", age: 28 }
{ name: "지연", age: 29 }
{ name: "지연", age: 30 }
 age가 31이 되면 에러
 */
changeUnitNum(profile, 30);

// 105번
// 객체에 속성 추가 못하게 만들기 seal 객체를 밀봉한다.
// 단단히 봉인되었기 떄문에 속성을 추가/삭제 할 수 없다.
const album = {
    name: "LOVE YOURSELF",
};

album.song = "Euphoria";
album.singer = "RM";

console.log(album); // {name: 'LOVE YOURSELF', song: 'Euphoria', singer: 'RM'}

Object.seal(album);

album.comment = "Answer";
album.singer = "JK";
delete album.name;

console.log(album); // {name: 'LOVE YOURSELF', song: 'Euphoria', singer: 'JK'}
