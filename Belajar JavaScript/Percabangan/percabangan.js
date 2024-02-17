// operator pembanding > < >= <= == != === !==


// double equals == dan triple equals ===
/*
== hanya membandingkan nilai saja:
5 == 5 => true karena 5 itu sama dengan 5
5 == 2 => false karena beda nilai
2 == '2' => true karena valuenya sama

=== membandingkan nilai dan juga tipe Data:
5 === 5 => true karena nilai dan tipe data sama
5 === '5' => false karena nilai benar namun tipe data beda
5 != '5' => false 
5 !== '5' => true
!= di baca tidak sama nilai
!== di baca tidak sama nilai dan tidak sama tipe data
*/


// console, alert dan prompt
/*
console.log('yana');
alert('helo');
prompt('masukan angka');
*/


// if satu kondisi
/*
let angka = Math.random();
console.log(angka);

if (angka >= 0.5){
    console.log('angka lebih dari 0.5');
}

if (angka <= 0.5){
    console.log('angka kurang dari 0.5');
}
*/


// else if
/*
const nilai = 80;

if (nilai < 50){
    console.log('E');
}
else if (nilai < 60){
    console.log('D');
}
else if (nilai < 70){
    console.log('C');
}
else if (nilai < 80){
    console.log('B');
}
else if (nilai < 100){
    console.log('A');
}
*/


// if else if else
/*
const inihari = prompt('masukkan hari').toLowerCase();

if ( inihari === 'senin'){
    console.log('selamat bekerja kawan');
} else if ( inihari === 'sabtu'){
    console.log('semoga jangan cepat berlalu');
} else {
    console.log('biasa aja');
}
*/


// nested if
/*
const password = prompt('buat password');

// minimal panjang pass nya 6 karakter
if(password.length >= 6){
    if (password.indexOf(' ') === -1){ // artinya tidak ada spasi
        console.log('password valid');
    } else {
        console.log('password tidak boleh ada spasi');
    }
} else {
    console.log('password kurang dari 6 karakter');
}
*/


// operator logic and => harus true && true => true
/*
const password = prompt('buat password');

if (password.length >= 6 && password.indexOf(' ') === -1){
    console.log('password valid');
} else {
    if(password.length < 6){
        console.log('password kurang dari 6 karakter');
    }
    else if (password.indexOf(' ') === -1){
        console.log('password tidak boleh ada spasi');
    }
}
*/


// operator logic or => salah satu true maka true
/*
const role = prompt('masukan role akun');

if (role === 'admin' || role === 'spv'){
    console.log('boleh mengaksesnya');
} else {
    console.log('akses di tolak');
}
*/


// operator not nilainya kebalikan
/*
const role = prompt('masukkan role akun');

if (role !== 'admin'){
    console.log('akses ditolak');
} else {
    console.log('boleh mengaksesnya');
}
*/


// switch

const balonku = prompt('warna balon');
switch(balonku){
    case 'merah':
        console.log('warna merah');
        break;
    case 'hijau':
        console.log('warna hijau');
        break;
    default: 
        console.log('tidak tersedia');
        break;

}