interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    anyo: number
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        anyo: 2015
    }
}

const song = 'Song ya existe';
// Desestructuración, si ya existe la variable, podemos acceder a la propiedad con song seguido
// del nombre que le queremos dar a la constante song:anotherSong
const { song:anotherSong, songDuration:duration, details } = audioPlayer;

// const { author, anyo } = audioPlayer.details;
const { author, anyo } = details;

console.log(`Song existente:`, song);
console.log(`Song:`, anotherSong);
console.log(`Duration:`, duration);
console.log(`Author:`, author);
console.log(`Año:`, anyo);


// Desestructuración de arrays
// Podemos desestructurar un array, delimitando las posiciones del que queremos extraer con comas.
// Si no existe esa posición, podemos establecer un valor por defecto con = 'Personaje no encontrado'
const [ , , trunks = 'No encontrado']: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log('Personaje:', trunks);

export {};