// 56번
// ES6의 모듈은 JS 코드를 담고 있는 하나의 파일이다.
// 내보내기
// 정의된 파일들을 실행시키는 방법은 두 가지가 있다.
// 하나는 런타임 로딩이다. 이는 Http를 활용해 구동 시점에 불러온다.
// 번들링이 있다. 이는 개발 시점에 일어나고 하나의 파일로 묶어주는 역할이다. 대표적으로는 웹팩이 있다. 대체로 node.js환경에서 일어난다.
export function hello(name) {
    console.log(name);
}

// 57번
// default 키워드를 사용해 모듈에서 기본으로 내보내는 값을 정의할 수 있다.
// 숫자, 문자, 불리언과 같은 기본형과 객체, 함수, 클래스와 같은 참조형 값 모두 올 수 있다.
// 중요한 점은 하나의 모듈에서 한 번만 사용이 가능하다.
// var, let, const와 같은 변수선언 키워드가 올 수 없다.
export default 'hello';
export default function hello2(name) {
    console.log(name);
}

export default class Hello {
    constructor(greeting) {
        this.greeting = greeting;
    }

    hi(name) {
        console.log(name);
    }
}

// 58번
// 식별자 이름이 다르다면 여러개를 내보낼 수 있다.
export const version = '0.0.1';

export var personA = {
    name: 'a'
};

export class Person {
    constructor(name) {
        this.name = name;
    }
}

// 59번
export default function add(a, b) {
    return a + b;
};

export const version2 = 'v2.0';
console.log('hello');
window.hello = function hello3(name) {
    console.log(name);
}


