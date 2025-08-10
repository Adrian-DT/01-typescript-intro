
const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const gimli: Character = {
    name: 'Gimli',
    hp: 100,
    skills: skills,
};

gimli.hometown = "Moria";

console.table(gimli);

export {};