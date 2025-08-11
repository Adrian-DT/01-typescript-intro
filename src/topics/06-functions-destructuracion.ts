
interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "One Plus Nord",
    price: 400.0
}

const tablet: Product = {
    description: "iPad Pro",
    price: 900.0
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

// Declaramos una función que recibirá un objeto con las propiedades de TaxCalculationOptions
function taxCalculation( options: TaxCalculationOptions): [number, number] {
    // Desestructuramos el objeto recibido por argumento
    const { products, tax } = options;
    let total = 0;
    // Recorremos los precios de los productos que recibiremos en el objeto y lo acumulamos al total
    // utilizando desestructuración
    products.forEach( ({ price }) =>
        total += price
    );
    // Retornamos un array de números, el cual el primero será la cantidad total y el segundo, el tax de esa cantidad
    return [total, total * tax];
}

const shoppingCart = [phone, tablet];

const tax = 0.15;

// Obtenemos el resultado pasando por la función un objeto con las mismas propiedades que definimos
// en TaxCalculationOptions
const [total, taxTotal ] = taxCalculation({
    tax: tax,
    products: shoppingCart
});

console.log('Total:', total);
console.log('Tax:', taxTotal);

export {};