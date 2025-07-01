// 16번
console.log(infinity); // infinity
console.log(1 / infinity); // 1
console.log(0 / 0); // NaN
console.log(infinity - infinity); // NaN
console.log(0 / '말도 안되는 값'); // NaN

// 17번
console.log("I' am in Jeju"); // I'm in jeju
console.log('Hello World'); // Sewha ocean is wonderful
console.log(`Have you ever eaten Makgeolli?`); // Have you ever eaten Makgeolli?
console.log("This is the first line\nAnd this is the second"); // This is the first line 줄바꿈 후 And this is the second

// 18번
console.log(7 > 3); // true
console.log(7 < 3); // false

// 19번
var value = null;
console.log(value); // 비어있다 null
console.log(typeof value); // 타입 체크 하면 오브젝트 JS 이슈

var value;
console.log(value); // 변수 선언 후 아무것도 안 넣으면 undefined
console.log(typeof value); // 이것도 오브젝트

// 20번
var cart = [
    {name: '옷', price: 2000},
    {name: '가방', price: 3000}
]

var numOfItems = `카트에 ${cart.length}개의 아이템이 있습니다.`;
var cartTable =
        `
          <ul>
             <li>품목: ${cart[0].name}, 가격: ${cart[0].price}</li>
             <li>품목: ${cart[1].name}, 가격: ${cart[1].price}</li>
          </ul>
        `
console.log(numOfItems); // 카트에 2개에 아이템이 있다.
console.log(cartTable); // ul li 출력

var personName = 'harin';
var helloString = 'hello' + personName;
var helloTemplateString = `hello ${personName}`;
console.log(helloString === helloTemplateString); //  true
console.log(typeof helloTemplateString); // string

// 21번
var x = 10;
x += 5; // 15
x *= 2; // 30
console.log(x); // 30
var y = 10;
y -= 5; // 5
y /= 5; // 1
console.log(y); // 1

console.log(15 % 4); // 3
console.log(3 ** 3); // 27
console.log(+10); // 10
console.log(-10); // -10
var value2 = 10;
++value2;
--value2;
console.log(value2); // 10

// 22번
console.log(5 == 5); // true
console.log("5" == 5); // true
console.log(5 == '5'); // true
console.log(5 != 1); // true
console.log(5 != "1"); // true
console.log(5 != '5'); // false
console.log(5 === 5); // true
console.log(5 === "5"); // false
console.log(5 !== 10); // true
console.log(5 !== "5"); // true

console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 <= 6); // true
console.log(5 >= 5); // true

// 23번
// AND
console.log(true && true); // true
console.log(true && false); // false
console.log('문장' == '문장' && 5 == 5); // true
console.log(5 == 5 && '다른 문장 1' == '다른 문장 2'); // false

// OR ||
console.log(true || false); // true
console.log(false || false); // false
console.log('문장' == '문장' || 5 == 10); // true;

// NOT 연산자 숫자형, 문자열은 항상 true
console.log(!true); // false
console.log(!false); // true
console.log(!5); // false
console.log(!'문장'); // false
console.log(!!5); // true
console.log(!!'문장'); // true

// 24번
var condition = 5 > 10; // false
condition ? console.log('Left') : console.log('Right'); // Right
var result = condition ? (console.log('삼항 연산식의 첫 번쨰 표현식')) : (console.log('삼항 연산식의 두 번쨰 표현식'), "표현식 2") // 두 번쨰, 표현식2

// 25번
// 비트는 바이트 보다 더 작은 단위
console.log(14 & 11); // 0이 하나라도 있으면 0 10
console.log(~14); // &에 반대로 -15
console.log(14 | 11); // 최소 하나만 1이라도 1을 반환 15
console.log(14 ^ 11); // 1인 경우에만 1을 반환 5
console.log(2 << 2); // b 비트의 자리수만큼 왼쪽으로 이동, 오른쪽은 0으로 채움 8
console.log(14 >> 1); // a 비트의 자리수만큼 오른쪽 남은 비트는 버림 7
console.log(14 >>> 2); // a 이진수를 b비트만큼 오른쪽으로 이동 오른쪽에 남은 비트는 버리고 왼쪽에 빈자리는 0으로 채움 3