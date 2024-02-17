// pengenalan perulangan
/*
for (let i = 0; i <= 10; i++) {
    console.log('saya agung');
    console.log(i);
}
*/


// contoh lain
/*
for (let i = 10; i <= 100000; i *= 10) {
    console.log(i);
}
*/


// infinitive bikin komputer meledak
/*
for (let i = 20; i >= 0; i++) {
    console.log(i);
}
*/


// akses data array dengan perulangan
/*
const animals = ['cat', 'deer', 'hog', 'koala', 'zebra'];

for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}
*/


// nested loop
/*
const pilihan = 'abcd';
for (let i = 1; i <= 10; i++) {
    console.log(`${i}. Soal Nomor ${i}:`);
    for (let j = 0; j < pilihan.length; j++) {
        console.log(`${pilihan[j]}. Pilihan Jawaban`);
    }
}
*/


// akses data nested array dengan nested loop
/*
const studentrow = [
    ['olivia', 'emma', 'liam', 'noah'],
    ['amelia', 'oliver', 'ava', 'elijah'],
    ['sophia', 'mateo', 'isabella', 'lucas'],
];

for (let i = 0; i < studentrow.length; i++) {
    const row = studentrow[i];
    console.log(`seat row #${i + 1}`);
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
};
*/


// while do
/*
const password = 'pass123';

let guess = prompt('masukkan pwnya !');
while (guess === password) {
    guess = prompt('enter the password');
}
alert('selamat. password valid');
*/


// break untuk mengentikan loop
/*
let input = prompt(`hei, say something!`);
while (true) {
    input = prompt(input);
    if (input.toLowerCase === 'stop') break;
}
alert('ok');
*/
/*
for (let i = 0; i < 10000; i++) {
    console.log(i);
    if (i === 1000) break;
}
*/


// game tebak tebakkan dengan do while
/*
let maximum = parseInt(prompt('masukan nilai maksimal !'));
while (!maximum) {
    maximum = parseInt(prompt('masukan nilai maksimal !'));
}

const targetnum = Math.floor(Math.random() * maximum) + 1;
console.log(targetnum);

let guess = parseInt(prompt('isi angka tebakan pertama kamu'));

while (guess !== targetnum) {
    if (guess > targetnum) {
        guess = parseInt(prompt('terlalu tinggi, coba lagi'));
    }
    else {
        guess = parseInt(prompt('terlalu rendah, coba lagi'));
    }
}

alert('selamat tebakan anda benar');
*/


// loop pada array of
/*
let fruits = ['banana', 'orange', 'apple', 'manggo'];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(`buah ${fruits[i]}`);
// }

for (const buah of fruits) {
    console.log(`buah ${buah}`);
}
*/
/*
const studentrow = [
    ['olivia', 'emma', 'liam', 'noah'],
    ['amelia', 'oliver', 'ava', 'elijah'],
    ['sophia', 'mateo', 'isabella', 'lucas'],
];

// for (let i = 0; i < studentrow.length; i++) {
//     const row = studentrow[i];
//     console.log(`seat row #${i + 1}`);
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }
// };

for (const array of studentrow) {
    for (const murid of array) {
        console.log(`${murid}`);
    }
}
*/


// loop pada obejct dengan for in
/*
const studentscore = {
    olivia: 20,
    liam: 13,
    emma: 40,
    noah: 18,
    amelia: 32,
    oliver: 10,
    ava: 11,
    elijah: 21,
    sophia: 14,
    mateo: 22,
};

for (const student in studentscore) {
    console.log(`${student} memiliki skor ${studentscore[student]}`);
}
*/

/*
let total = 0;
let scores = Object.values(studentscore);
/*scores jadi array [
    20,
    13,
    40,
    18,
    32,
    10,
    11,
    21,
    14,
    22
]
*/
/*
for (const score of scores) { // make for of karena data nya array
    total += score;
}

console.log(total /scores.length);
*/