// 53번
// static이라면 상속 받을 떄 메소드를 상속 받을 수 있다.
class Product {
    static build(name, price) {
        const id = Math.floor(Math.random() * 1000);
        return new Product(id, name, price);
    }

    static getTaxPrice(product) {
        return (product.price * 0.1) + product.price;
    }

    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class DeposableProduct extends Product {
    depose() {
        this.depose = true;
    }
}

const gum = Product.build('껌', 1000);
console.log(gum); // product {id: 554, name: '껌', price: 1000}

const clothes = new DeposableProduct(1, '옷', 2000);
const taxPrice = DeposableProduct.getTaxPrice(clothes);
console.log(taxPrice, 'tax'); // 2200

class ProductWithCode {
    static get CODE_PREFIX() {
        return 'PRODUCT-';
    }

    constructor(id) {
        this.id = id;
        this.code = ProductWithCode.CODE_PREFIX + id;
    }
}

const product1 = new ProductWithCode('001');
console.log(ProductWithCode.CODE_PREFIX); // PRODUCT-
console.log(product1.code); // PRODUCT-001