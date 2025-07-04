// 51번
// 숫자여도 객체의 키를 저장할 때 자동으로 문자열 변환을 수행
// 키가 존재하지 않으면 자동으로 해당 키를 추가 신기함 객체 리터럴로 생성해도 문자열임
// 하지만 {1: 1} 처럼 보이는데 이는 보기 편하게 하기 위함 Object.keys(obj) 하지만 찍어보면 문자열이다.
class Cart {
    constructor() {
        this.store = {};
    }

    addProduct(product) {
        this.store[product.id] = product;
    }

    getProduct(id) {
        return this.store[id];
    }
}

const cart1 = new Cart();

cart1.addProduct({id: 1, name: '노트북'});
console.log(cart1.store); // {'1': { id: 1, name: '노트북' }

const p = cart1.getProduct(1);
console.log(p); // {id: 1, name: '노트북'}

// 52번
class Chart {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    drawLine() {
        console.log('drawLine');
    }
}

class BarChart extends Chart {
    constructor(width, height) {
        super(width, height);
    }
    draw() {
        this.drawLine();
        console.log(`draw ${this.width} ${this.height}`);
    }
}

const barchart1 = new BarChart(100, 200);
barchart1.draw(); // drawLine draw 100 200