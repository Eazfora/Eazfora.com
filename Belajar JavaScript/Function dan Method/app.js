// pengenalan function
/*
function lempardadu(){
    console.log(Math.floor(Math.random() * 6) + 1);
}
*/


// mendefinisikan dan menjalankan function
// catatan : ++a pre-increment, a++ post-increment
/* 
function nyanyi(){
    console.log('cek...');
    console.log('do re mi...');
}

nyanyi();
*/


// argument dan parameter
/* 
function pagi(name){
    console.log(`hello, ${name}. selamat pagi`);
}
pagi('agung');
*/


// multiple parameter dan argument
/* 
function jumlahkan (a,b){
    const total = a + b;
    console.info(total);
}
*/


// statement return
/*
function jumlahkan(a=0, b=0){
    const total = a + b;
    return total;
    console.log('selesai'); // ga di eksekusi karena ada return
}
function jumlah(a,b){
    if (typeof a !== 'number' || b !== 'number'){
        return false;
    }
    return a + b; //return hanya salah satu yang di eksekusi tidak 2 skealigus
}
*/


// scope atau ruang lingkup
/* 
let programing = 'javascript'; // global

function typesafe(){
    let programing = 'typescript';  // local
    console.info(programing);
}
typesafe();
console.info(programing);
*/
/*
let programing = 'javascript'; 

function typesafe(){
    programing = 'typescript'; // tanpa let jadi variabel tumpuk
    console.info(programing);
}
typesafe();
console.info(programing);
*/


// blocked variabel
/*
let tinggi = 8;
if (tinggi > 5) {
    let lebar = 10;
    console.log(lebar)
}
console.log(tinggi);
*/
/*
for (let index = 0; index < 10; index++) {
    const indexnumber = index;
    console.log(indexnumber);
    
}
console.log(indexnumber); // error karena manggil variabel local
*/


// lexical scope
/*
function lamarkerja() {
    const jabatan = 'programmer';
    function orangdalam() {
        let kenalan = `orang dalam bisa memasukkan ${jabatan}`;
        console.log(kenalan);
    }

    orangdalam(); //lexical
}
*/
/*
function lamarkerja() {
    const jabatan = 'programmer';

    function lebihdalam() {
        function orangdalam() {
            let kenalan = `orang dalam bisa memasukkan ${jabatan}`;
            console.log(kenalan);
        }

        orangdalam(); //lexical
    }
    lebihdalam(); //lexical
}
*/


// function express
/*
function perpangkatan(nilai) {
    return nilai * nilai;
}
let hasil = perpangkatan(5); // expression
*/
/*
const hasill = function (nilai){
    return nilai * nilai;
}
let a = hasill(10); // expression
*/


// function sebagai argumen function lain
/*
function a (func){
    func();
    func();
    func();
}

function lempardadu(){
    const hasil = Math.floor(Math.random()*6) + 1;
    console.log(hasil);
}

a(lempardadu); // cara pemanggilanya di console
*/


// function bernilai balik function
/*
function hasiladalahfunction(){
    const rand = Math.random();
    if(rand > 0.1){
        return function(){
            console.log('selamat, angka lebih besar');
        }
    } else {
        return function(){
            console.log('maaf, mungkin bisa coba lagi');
        }
    }
}

const result = hasiladalahfunction();
*/


// Method
/*
function myfun(){ // function biasa
    console.log('Hi');
    return 'Helo';
}

const myMath = { // object
    perkalian: function (x,y){ // method
        return x * y;
    },
    pembagian: function (x,y){ // method
        return x / y;
    }
}
*/


// This keyword
/*
const saya = {
    nama: 'aim',
    hobi: 'main pasir',
    kenalan: function () {
        return `Hi, saya ${this.nama}. Hobi saya ${this.hobi}`;
    }
}
*/


// Try and Catch untuk menghindari kesalahan dalam program
/*
try {
    saya.kenalan();
} catch {
    console.log('error!!');
}

console.log('Setelah proses try and cath');
*/

try {
    console.log(nama);
} catch (error) {
    console.log('terjadi kesalahan : ',  error.message);
}
console.log('Selesai...');

function teriak(msg){
    try {
        console.log(msg.toUpperCase());
    } catch (error){
        console.log(error);
        console.log('silahkan masukkan tipe data string pada argument teriak()');
    }
}