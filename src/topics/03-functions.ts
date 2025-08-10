
function addNumbers(a: number, b: number):number {
    return a + b;
}

const addNumbersFlecha = (a: number, b: number):string => {
    return `${a + b}`;
}

// La convención es que se declaren primero los argumentos obligatorios de una función, después los opcionales,
// y por último, los opcionales con valores por defecto.
// A partir de 3 argumentos, se recomienda pasar un objeto.
function multiply(firstNumber: number, secondNumber?: number, base: number = 2): number {
    return firstNumber * base;
}

// Por defecto si almacenamos el resultado de una función en una constante o variable, su tipo
// será el retornado, si queremos almacenarlo en otro tipo, debemos castearlo
// const result: string = addNumbers(10, 15).toString();
// const result2: string = addNumbersFlecha(1, 12);
// const result3: number = multiply(5);
// console.log({ result, result2, result3 });

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const legolas: Character = {
    name: 'Legolas',
    hp: 65,
    showHp: function (): void {
        console.log(`Salud: ${ this.hp }`);
    }
}

legolas.showHp();

healCharacter(legolas, 15);

legolas.showHp();

export {};