// 10 번
var result = true;

if (result) console.log('result가 참 입니다.');
if (!result) {
    console.log('실행되지 않습니다.');
}
if (result) {
    console.log('result의 결과');
    console.log('>>참 입니다.');
}

// 11 번
var number = 2;

if (number == 1) {
    console.log('number는 1');
} else if (number == 2) {
    console.log('number는 2');
} else if (number == 3) {
    console.log('number는 3');
} else {
    console.log('number는 1~3 중에 없습니다.');
}

// 12번
var subject = '자바스크립트';

switch (subject) {
    case '자바스크립트':
        console.log('초보자를 위한 JS');
        break;
    case 'C언어':
        console.log('초보자를 위한 C');
        break;
    case 'TS':
        console.log('초보자를 위한 TS');
        break;
        default:
            console.log('이제 초보자가 아닙니다.');
            break;
}

// 13번
var hometown = [
    {name: '남준', place: '안산', city: '고양'},
    {name: '진', place: '과천'},
    {name: '호석', place: '광주', city: '전라도'},
    {name: '지민', place: '부산', city: '경상도'}
]

for (var i = 0; i < hometown.length; i++) {
    var h = hometown[i];
    console.log(h);
    // 이 조건문에 걸리면 컨티뉴로 밑에 코드 실행을 생략하고 다음으로 반복해라
    if (!h || !h.city) continue;

    console.log(i + '번쨰 실행입니다.');

    if (h.name === '호석') {
        console.log(h.name + '의 고향은' + h.city + ' ' + h.place + '입니다.' );
    }
}

// 14번
var store = {snack: 1000, flower: 5000, beverage: 2000};

for (var item in store) {
    // store 객체에 item 키 정보가 있는지 확인 없다면 다음 반복문 실행
    if (!store.hasOwnProperty(item)) continue;

    console.log(item + '는 가격이' + store[item] + ' 입니다.');
}

// 15번
var hometown2 = [
    {name: '남준', place: '안산', city: '고양'},
    {name: '진', place: '과천'},
    {name: '호석', place: '광주', city: '전라도'},
    {name: '지민', place: '부산', city: '경상도'}
]

// 매개변수 h, name을 받음
var isHometown = function (h, name) {
    console.log(`함수가 실행되었습니다. ${h.city} 도시에서 ${name}을 찾습니다.`, h);
    // h.name === name이 같다면 console 출력 후 함수 종료
    if (h.name === name) {
        console.log(`${h.name}의 고향은 ${h.city} ${h.place} 입니다.`);
        return true;
    }
    // 아니라면 함수 종료
    return false;
}

var h2;
// 배열에 앞에서 부터 값을 뺴옴 즉 0번쨰 부터 끝까지 , 그 값 자체가 반환
while (h2 = hometown2.shift()) {
    // 셋 중에 하나라도 없다면 밑에 코드 실행 X 다음 반복문 실행
    if (!h2.name || !h2.city || !h2.place) continue;

    // 객체의  {name: '남준', place: '안산', city: '고양'}, 값이 0번째부터 들어감
    var results = isHometown(h2, '호석');
    // results 있다면 와일문 종료
    if (results) break;
}

var k = 0;
var names = ['남준', '정국', '윤기', '호섭'];
var cities = ['경기', '부산', '대구', '광주'];
// 한 번은 무조건 실행
do {
    // 0번 쨰부터 남준 배열에 끝까지 하나 씩 넣음, city 경기부터 ~
    hometown2[k] = {name: names[k], city: cities[k]};
    // k 증가 1씩
    k++;
} while (k < 4);

console.log(hometown2);