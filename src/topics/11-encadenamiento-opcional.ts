

export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Adrián',
}

const passenger2: Passenger = {
    name: 'Carlos',
    children: ['Leo'],
}

const printChilder = ( passenger: Passenger): number => {
    // Podemos comprobar previamente si no esta definido el children, devolver 0
    if (!passenger.children) return 0;
    // Podemos indicar que si el children de passenger no esta definido, asignarle 0
    const howManyChilder = passenger.children?.length ?? 0;
    // Si estamos seguros de que sí o sí existirá un children, podemos forzar con !
    // const howManyChilder = passenger.children!.length;
    console.log(passenger.name, howManyChilder);

    return howManyChilder;
}

printChilder(passenger1);