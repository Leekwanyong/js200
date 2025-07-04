// 54번
// this는 동적으로 결정된다
this.valueA = 'a';
console.log(valueA); // a
valueB = 'b';
console.log(this.valueB); // b

function checkThis() {
    console.log(this); // global
}

function checkThis2() {
    'use strict';
    console.log(this); // undefined
}

checkThis();
checkThis2();

function Product(name, price) {
    this.name = name;
    this.price = price;
}

const product1 = new Product('가방', 2000);
console.log(window.name); // 가방
console.log(window.price); // 2000

const product2 = {
    name: '가방2',
    price: 3000,
    getVAT() {
        return this.price / 10;
    }
}

const valueOfProduct2 = product2.getVAT();
console.log(valueOfProduct2); // 300

const calVAT = product2.getVAT();
const VAT2 = calVAT();
console.log(VAT2); // 200

const newCalVAT = calVAT.bind(product2);
const VAT3 = newCalVAT();
console.log(VAT3); // 300

const counter1 = {
    count: 0,
    addAfterSec() {
        setTimeout(function () {
            this.count += 1;
            console.log(this.count);
        }, 1000)
    }
};
counter1.addAfterSec(); // 중첩 함수이기 떄문에 전역을 가리킴 NaN

const counter2 = {
    count: 0,
    addAfterSec() {
        setTimeout( () => {
            this.count += 1;
            console.log(this.count);
        }, 1000)
    }
};
counter2.addAfterSec(); // 1
