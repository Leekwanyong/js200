// 41번
// let 키워드가 등장하면서 유효범위가 블록 범위로 지정할 수 있게 되었다.
if (true) {
    var functionScopeValue = 'global';
    let blockScopeValue = 'local';
}

console.log(functionScopeValue); // global
console.log(blockScopeValue); // error

let value = '바깥값';
if (true) {
    console.log(value); // error
    let value = '안쪽값'
}

// 42번
// const는 let과 큰 차이점은 선언 시 값을 할당해야 하고 이후 재할당이 불가능하다.
const URL = 'http://js.com';
URL = 'http://js.com'; // error

if (true) {
    const URL2 = 'http://js.com';
}

console.log(URL2); // error 블록 스코프

const CONST_USER = {name: 'jay', age: 30};
console.log(CONST_USER.name, CONST_USER.age); // jay 30
CONST_USER.name = 'jay2';
CONST_USER.age = 35;
console.log(CONST_USER.name, CONST_USER.age); // jay2 35
CONST_USER = {name: 'bbo'}; // error 새로운 값 추가 X 변경은 가능

// 43번
// 스코프 체인 실행 컨텍스트, 렉시컬 환경이 있다.
// 실행은 코드가 실행되기 위한 정보를 가지고 있다. 실행 가능한 코드가 생성될떄 생성된다.
// 처음에는 전역 컨텍스트가 활성화 되고 코드를 순차적으로 평가 함수 호출문은 만나면
// 실행 컨텍스트가 만들어진다. 함수 내부에 코드를 평가하고 이를 스택을 이용해 관리한다.
// 함수가 종료되면 스택에 있는 것도 사라진다.
var person = 'harin';

function print() {
    var person2 = 'jay';

    function innerPrint() {
        console.log(person); // harin
        console.log(person2); // jay
    }
    innerPrint();
    console.log('print finished');
}

print();
console.log('finished');

// 44번
// 클로저는 함수에서 지역변수를 선언하고 내부 적으로 또다른 함수를 참조해야 한다.
// 이를 의도적으로 끊기 위해서는 널 또는 언디파인드가 제일 간단한 방법이다.
// 이벤트 리스너라면 리무브를 써서 끊을 수 있다.
function createCounterClosure() {
    let count = 0;
    return {
        increment: function () {
            count++;
        },
        getCount: function () {
            return  count;
        }
    }
}

const counter1 = createCounterClosure();
const counter2 = createCounterClosure();

counter1.increment();
counter1.increment();
console.log(counter1.getCount()); // 2
counter2.increment();
console.log(counter2.getCount()); // 1

// 45번
let user = {name: 'jeado'}
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(descriptor);

// enumerable for...in 루프나 Object.key 메소드같이 속성을 나열할 떄 나열 가능 여부를 정의
// writable 값을 변경할 수 있는가? false라면 불가
// configurable 속성 기술자를 변경할 수 있는가? false일 경우 변경 불가 delete object.defineProperty로 writable을 변경 불가 Object.defineProperty로 enumerable, configurable을 변경 불가
// writable: true → false 예외적으로 허용
// 속성 기술자는 객체 속성을 제어하고 제한하는 장치이며, 개발자가 의도한 방식으로만 속성을 읽을 수 있도록 강제하는 수단
let user2 = {};
Object.defineProperty(user, 'name', {
    value: 'jeado',
    enumerable: true,
    configurable: true,
    writable: false,
})
console.log(user2.name); // { value: 'jeado', writable: true, enumerable: true, configurable: true }
user2.name = 'bbo';
console.log(user2.name); // jeado

let user3 = {
    name: 'jeado',
    toString() {
        return this.name;
    }
}

Object.defineProperty(user3, 'toString', {
    enumerable: false,
})

for (let key in user3) {
    console.log(key); // 나열 불가
}

let user4 = {};
Object.defineProperty(user4, 'name', {
    value: 'jeado',
    configurable: false,
})
delete user4.name; // 삭제 불가
console.log(user4);
Object.defineProperty(user4, 'name', {
    writable: true,
})

