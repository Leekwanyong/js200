// 62번
// NaN 인지 확인 NaN 이면 true 반환 아니면 false 반환
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN('Is is Number?')); // false
console.log(Number.isNaN(0)); // false
console.log(Number.isNaN(null)); // false
console.log(Number.isNaN(-1)); // false
console.log(Number.isNaN(0/0)); // true
console.log(Number.isNaN(new Date)); // fase
console.log(Number.isNaN(new Date().toString())); // false
console.log(Number.isNaN('Infinity')); // false

function verifyNumber(n) {
    if (!n || Number.isNaN(n)) return 0;
    return n;
}

const num1 = verifyNumber(15); // 15
const num2 = verifyNumber(undefined); // 0
const num3 = verifyNumber(null); // 0
const num4 = verifyNumber(NaN); // 0

// 63번
// 정수인지 확인
console.log(Number.isInteger(0)); // true
console.log(Number.isInteger(-1)); // true
console.log(Number.isInteger(77777777777777)); // true
console.log(Number.isInteger(null)); // false
console.log(Number.isInteger(0/0)); // false
console.log(Number.isInteger('Infinity')); // false
console.log(Number.isInteger(true)); // false
console.log(Number.isInteger({})); // false

function verifyInteger(n) {
    if (!Number.isInteger(n)) return 0;
    return n;
}
const num5 =  verifyInteger(15); // true
const num6 = verifyInteger(Infinity); //false 0
const num7 = verifyInteger(0.05); // false 0

// 64번
// isArray 배열 자료형 여부
function callRoll(students) {
    if (!Array.isArray(students)) return

    students.forEach((student) => {
        console.log(student);
    })
}

const students = ['jun', 'all', 'murry', 'toby'];
callRoll(students); // jun, all, murry, toby

// 65번
// 문자열을 숫자형으로 반환한다.
// 첫 번쨰는 반환하고 싶은 숫자를 두 번쨰는 특정 진수를 나타낸다.
console.log(parseInt('15')); // 15
console.log(parseInt('15', 10)); // 15
console.log(parseInt('15', 2)); // 1
console.log(parseInt(5.15)); // 5
console.log(parseInt('5.15')); // 5
