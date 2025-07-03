// 36번
// arguments는 객체다.
function sum() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    console.log(arguments instanceof Array); // false
    return total;
}

var sumOf1to3 = sum(1,2,3);
console.log(sumOf1to3); // 6

function testArg() {
    var newArr = Array.prototype.slice.call(arguments);
    console.log(newArr); // ['a', 'b']
    console.log(newArr.indexOf('b')); // 1
    console.log(arguments.indexOf('b')); // error
}

testArg('a', 'b');

// 37번
// ES6 이후 매개변수에 기본 값을 세팅하여 값을 주지 않을 떄 기본값을 설정할 수 있다.
function drawChart(width = 200, height = 400) {
    console.log(width, height);
}

drawChart(100); // 100 400
drawChart() // 200 400

function drawChart2(width = 200, height = width / 2) {
    console.log(width, height);
}

drawChart2(300); // 300 150
drawChart2() // 200 100

// 38번
// 나머지 매개변수 몇개가 올지몰라서 다 커버해줘
function sum(...args) {
    var total = 0;
    for (var i = 0; i < args.length; i++) {
        total += args[i];
    }
    console.log(args.indexOf(1)); // 0
    return total;
}

console.log(sum(1, 2, 3)); // 6

function sum2(a, b, ...others) {
    var total = a + b;
    for (var i = 0; i < others.length; i++) {
        total += others[i];
    }
    return total;
}

console.log(sum2(1, 2)); // 3
console.log(sum2(1, 2, 3, 4)); // 10

// 39번
// 스코프 유효범위 JS는 보통 전역과 함수 단위로 유효범위가 정해진다.
var a = 10;
console.log(a); // 10

function print() {
    var b = 20;
    if (true) {
        var c = 30;
    }
    console.log(c); // 30
}

print();
console.log(b); // error

var global = 'global';

function print1() {
    console.log(a); // gloabl
}
print1();

function print2() {
    var a = 'local';
    print1();
}

print2(); // global

// 40번
// 함수 선언전에 실행이 가능하다. 이를 호이스팅이라고 한다.
hello(); // hello
function hello() {
    console.log('hello');
}

hello2() // error
var hello2 = function () {
    console.log('hello2');
}