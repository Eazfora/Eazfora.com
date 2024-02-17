// mengatur nilai default fungsi
/*
function lempardadu(sisi = 6) { // 6 menjadi nilai default
    return Math.floor(Math.random() * sisi) + 1;
}
*/
/*
function perkalian(a, b) {
    b = typeof b !== 'undefined' ? b : 1;
    return a * b;
}
function perkalian(a, b = 1) { // kalo mau kash satu default, baiknya kasih paling belakang
    return a * b;
}
*/


// mengubah array atau object menjadi deret nilai argumen fungsi
/*
const angka = [1, 2, 3, 4];
Math.max(angka); //NaN
Math.max(...angka); // 4
// isinya sama seperti Math.max(1,2,3,4)
// jadi mengubah array [semua element ini jadi satu suku] => (1,2,3,4) jadi 4 element / 4 suku
*/


// menggabungkan array dengan array
/*
const angka = [1, 2, 3, 4, 5, 6, 7];
const nama = ['alex', 'bimo', 'cici'];

const angkatambah = [...angka, 0, 10];
const campuran = [...angka, ...nama];
*/


// menggabungkan property object dengan object
/*
const user = {
    name: 'john',
    email: "@mangap",
}
const credential = {
password: 'yana',
}
const userbaru = { ...user, id: 123 };
const gabunganobject = {...user, ...credential}
*/


// Rest Param
/*
const sumAll = (...nums) => {
    return nums.reduce((total, el) => total + el);
};

const nama = ['alex', 'bimo', 'cici', 'delila', 'felix'];

const pemenang = (gold, silver, bronze, ...sisa) => {
    console.log(`medali emas di raih : ${gold}`);
    console.log(`medali silver di raih : ${silver}`);
    console.log(`medali bronze di raih : ${bronze}`);
    console.log(`peserta lainnya : ${sisa}`);
}
*/

// destructing untuk bongkar array ke masing variabel
/*
const nama = ['alex', 'nano', 'mutia', 'cici', 'delila', 'gerard'];

const [gold, silver, bronze, ...peserta] = nama;
*/


// destructing untuk bongkar property object ke masing variabel
/*
const user = {
    name: 'john',
    email: 'john@do',
};

const { name: nama, email, phone = '091090' } = user; // tinggal panggil variabel nya
*/


// destructing properti object dalam function
/*
const user = {
    name: 'john',
    email: 'john@do',
    role: 'admin',
};

const userandrole = ({ name, role }) => { // panggilnya userandrole(user)
    return `${name} ${role}`;
}
*/
const animes = [
    {
        title: 'attack on titan',
        rating: 90,
    },
    {
        title: 'one piece',
        rating: 89,
    },
    {
        title: 'bleach',
        rating: 82,
    },
    {
        title: 'hunter x hunter',
        rating: 90,
    },
    {
        title: 'naruto',
        rating: 84,
    },
];

const anime = animes.map(({ title, rating }) => {
    return `${title} rating ${rating}`;
}
) ;
