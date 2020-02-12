const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Marcin', 'Michał', 'Patryk', 'Jakub', 'Sebastian', 'Jacek', 'Cezary', 'Hubert', 'Konrad', 'Jan'];
const femaleNames = ['Maria', 'Weronika', 'Katarzyna', 'Wioletta', 'Izabela', 'Zuzanna', 'Angelika', 'Anna', 'Monika', 'Ewa'];
const lastNames = ['Nowak', 'Wójcik', 'Woźniak', 'Bajek', 'Szewczyk', 'Cebula', 'Bis', 'Ciak', 'Duch', 'Kurlej'];

function randChoice(arr) {
    return arr[(Math.floor((Math.random() * arr.length) + 1)) - 1];
}

const people = [];

for (let i = 1; i < 21; i++ ) {

    const gender = randChoice(genders)
    
    const generatedIdentity = {
        gender: gender,
        firstname: (gender == 'M') ? (randChoice(maleNames)) : (randChoice(femaleNames)),
        lastNames: randChoice(lastNames),
        age: Math.floor((Math.random() * 61)+ 18),
    };

    people.push(generatedIdentity);
}


const storeData = (data, path) => {
    try {
        fs.writeFileSync(path, JSON.stringify(data))
    } catch (err) {
        console.error(err)
    }
}

const filePath = './people.json';

storeData(people, filePath);
