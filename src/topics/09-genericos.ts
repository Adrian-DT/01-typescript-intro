
// Función genérica que devuelve el tipo de lo que pasemos por argumento
export function whatsMyType<T> (argument: T): T {

    return argument;
}

const amIString = whatsMyType<string>('Hola mundo');
const amINumber = whatsMyType<number>(500);
const amIArray = whatsMyType<number[]>([1,2,3,4,5,6,7,8,9]);

console.log(typeof amIString);
console.log(typeof amINumber);
console.log(typeof amIArray);