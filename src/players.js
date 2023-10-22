import Messi from './messi.jpg'
import Cristiano from './cristiano.webp'
import Zlatan from './zlatan.webp'
import Iniesta from './iniesta.jpg'

const players = [
    {
        id:0,
        name: 'Lionel Messi',
        team: 'Paris Saint-Germain',
        nationality: 'Argentina',
        jerseyNumber: 30,
        age: 34,
        imageUrl: Messi,
    },
    {
        id:1,
        name: 'Cristiano Ronaldo',
        team: 'Manchester United',
        nationality: 'Portugal',
        jerseyNumber: 7,
        age: 36,
        imageUrl: Cristiano,
    },
    {
        id:2,
        name: 'Zlatan Ibrahimovic',
        team: 'AC Milan',
        nationality: 'Sweden',
        jerseyNumber: 11,
        age: 40,
        imageUrl: Zlatan,
    },
    {
        id:3,
        name: 'Andrés Iniesta',
        team: 'Vissel Kobe',
        nationality: 'Spain',
        jerseyNumber: 8,
        age: 38,
        imageUrl: Iniesta,
    },
];

export default players;