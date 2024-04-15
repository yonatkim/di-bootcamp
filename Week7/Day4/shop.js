// shop.js

const products = require('./product');

function findProductByName(productName) {
    const product = products.find(product => product.name === productName);

    if (product) {
        console.log(`Product Name: ${product.name}`);
        console.log(`Price: $${product.price}`);
        console.log(`Category: ${product.category}`);
    } else {
        console.log(`Product '${productName}' not found.`);
    }
}

findProductByName('iPhone');
findProductByName('MacBook');
findProductByName('Huawei'); 

