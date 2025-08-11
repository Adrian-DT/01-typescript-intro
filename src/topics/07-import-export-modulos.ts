import { type Product, taxCalculation } from './06-functions-destructuracion';

const shoppingCart: Product[] = [
    {
        description: 'One Plus Nord',
        price: 400.0
    },
    {
        description: 'iPad Air',
        price: 450.0
    }
];

const [ total, tax ] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log('Total:', total);
console.log('Tax:', tax);