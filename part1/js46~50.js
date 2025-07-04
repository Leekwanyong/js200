// 46번
// _ 비공개 임을 나타내기 위해서 (_)을 사용
let user = {};
Object.defineProperties(user, 'age',{
    get: function () {
        return this._age;
    },
    set: function (age) {
        if (age < 0) {
            console.error('0보다 작을 수 없어요');
        } else {
            this._age = age;
        }
    },
    enumerable: true,
})
user.age = 10;
console.log(user.age); // 10
user.age = -1; // error 0보다

let user2 = {
    get name() {
        return this._name;
    },
    set name(val) {
        throw new Error('3글자 이상이어야 한다.')
        this._name = val;
    }
}

user2.name = 'harin';
console.log(user2.name); // harin
user2.name = 'ha'; // 3글자 이상

// 47번
const double = x => x + x;
console.log(double(2)); // 4

const add = (a, b) => a + b;
console.log(add(1, 2)); // 3

// 화살표 함수는 아큐먼트를 가질 수 없음 Error
const printArguments = () => {
    console.log(arguments);
}
printArguments(1, 2, 3);

const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}
console.log(sum(1, 2, 3)); // 6

setTimeout(() => {
    console.log('화살표 함수');
}, 2000);

// 48번
const teacherJay = {
    name: '제이',
    age: 30,
    teachJavascript: function (student) {
        student.gainExp();
    }
}

const studentBbo = {
    name: '뽀',
    age: 20,
    exp: 0,
    gainExp: function () {
        this.exp++;
    }
}
console.log(studentBbo.exp); // 0
teacherJay.teachJavascript(studentBbo); // 0
console.log(studentBbo.gainExp()); // 1

const studentProto =  {
    gainExp: function () {
        this.exp++;
    }
}

const harin = {
    name: '하린',
    age: 10,
    exp: 0,
    __proto__: studentProto,
}

const bbo = {
    name: '뽀',
    age: 10,
    exp: 10,
    __proto__: studentProto,
}

bbo.gainExp();
harin.gainExp();
harin.gainExp();
console.log(harin); // 2
console.log(bbo); // 11

// 49번
// constructor 모든 객체는 가짐 만든 생성자 함수를 가리킴
function Teacher(name, age, subject) {
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.teach = function (student) {
        console.log(student + '에게' + this.subject + '를 가르칩니다.');
    }
}

const jay = new Teacher('jay', 30, 'javascript');
console.log(jay); // {name: 'jay', age: 30, subject: 'javascript', teach: f}
jay.teach('bbo'); // 가리킴 출력

console.log(jay.constructor); // f
console.log(jay instanceof  Teacher); // true

const jay2 = Teacher('jay', 30, 'javascript');
console.log(jay2); // undefined new 키워드가 없음 생성자는 new가 무조건 있어야 함
console.log(age); // 30

// 50번
// 생성자 함수로부터 만들어진 객체는 그 생성자 함수의 프로토타입 객체를 상속
// 모든 객체는 __proto__를 가짐
function Storage() {
    this.detaStore = {};
}

Storage.prototype.put = function (key, data) {
    this.detaStore[key] = data;
}

Storage.prototype.getData = function (key) {
    return this.detaStore[key]
}

const productStorage = new Storage();
productStorage.put('id001', {name: '키보드', price: 2000});
console.log(productStorage.getData('id001')); // {name: '키보드', price: 2000}

function RemovableStorage() {
    Storage.call(this);
}

RemovableStorage.prototype = Object.create(Storage.prototype);

RemovableStorage.prototype.removeAll = function () {
    this.detaStore = {};
}

const productStorage2 = new RemovableStorage();
productStorage2.put('id001', {name: '키보드', price: 2000});
productStorage2.removeAll();
const item2 = productStorage2.getItem('id001');
console.log(item2); // undefine
