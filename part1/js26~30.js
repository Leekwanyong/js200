// 26번
// 형 변환에는 두 가지가 있다 JS가 암묵적으로 하는 형변환 이는 JS 동적언어 특징이다. 개발자가 명시적으로 하는 형변환이 있다.
// 재미있는 사실은 산술연산자 중에서 +만 문자열 연결을 우선한다.
console.log("5" + 1); // "51"
console.log("5" - 1); // 4
console.log("5" * 2); // 10
console.log("There is" + 5); // There is 5
console.log("Five" * 2); // NaN

console.log('- 연산자를 활용한 자료형 변환');
var str = 5 + "1";
console.log(str); // "51"
console.log(typeof str); // string

var num = +str;
console.log(num); // "51"
console.log(typeof num); // string

console.log('- 함수를 활용한 자료형 변환');
str = String(num);
console.log(str); // "51"
console.log(typeof str); // string

num = Number(num);
console.log(num); // 51
console.log(typeof num); // number

// 27번
// 배열 자료형의 형태는 대괄호[]와 사이의 요소들로 구성된다 [] 빈 배열이라면 요소가 없다는 것이다.
// 다른 언어와 다르게 길이가 고정되어 있지 않다.
var arr = [1, 2, 3, 4];
console.log(arr.length); // 4
console.log(arr[0]); // 1
console.log(arr[1]); // 2
console.log(arr[2]); // 3
console.log(arr[3]); // 4
console.log(arr[4]); // undefined

// 28번
// 여러 개의 값을 한번에 접근할 수 있도록 JS에서는 객체를 제공한다.
// 키와 값으로 되어 있고 하나의 키에는 하나에 값이 매핑된다.
var family = {
    'address': 'Seoul',
    members: {},
    addFamily: function (age, name, role) {
       this.members[role] = {
           age: age,
           name: name,
       }
    },
    getHeadcount: function () {
        return Object.keys(this.members).length;
    }
}

family.addFamily(30, 'chloe', 'aunt');
console.log(family.getHeadcount()); // 3

// 29번
var printMembers = function () {
    var members = family.members;
    for (role in members) {
        console.log('role =>' + role + ', name =>' + members[role].name + ', age =>' + members[role].age);
    }
}

printMembers(); // aunt, chloe, 30

var members = family.members;
members['nephew'] = {age: 3, name: 'hyun'};
members.niece = {age: 5, name: 'lyn'};
delete members.aunt;
delete members['dog'];
printMembers(); // niece ~, nephew ~

// 30번
// 축약 29번과 같은 동작을 한다.
var address = 'Seoul';
var members2 = {};
var addFamily2 = function (age, name, role) {
    this.members[role] = {age, name}
}
var getHeadcount2 = function () {
    return Object.keys(this.members2).length;
}
var family2 = {address, members2, addFamily2, getHeadcount2}
family2.addFamily2(30, 'chloe', 'aunt');
console.log(family2.getHeadcount2()); // 3
