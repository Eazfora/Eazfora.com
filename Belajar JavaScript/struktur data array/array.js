// Array
/*
// kumpulan string
let hewan = ['naga', 'bebek', 'kudanil', 'lohan'];

// urutan index 
hewan [0] = naga
hewan [1] = bebek
hewan [2] = kudanil
hewan [3] = lohan

// pengubahan  isi
hewan[1] = 'macan'; tulis di console
*/


// Method pada array
/*
push => menambah item pada akhir Array
pop => mengapus item paling akhir array 
shift => mengapus item paling awal
unshift => menambah item paling awal
*/
let barbel = [];
barbel.push(10); // => barbel = [10]
barbel.push(11,12); // => barbel = [10, 11 ,12]
barbel.pop(); // => barbel = [10,12]

barbel.unshift(9); // => barbel = [9,10,12]
barbel.shift(); // => barbel = [10,12]

/* beberapa method dalam array
concat => menggabungkan array
includes => mencari suatu nilai di dalam array
indexOf => sama kayak string.indexOf
join => membuat suatu string dari sebuah array
reverse => membalikkan urutan nilai dari array
slice => menyalin sebagian nilai dari array
splice => mengapus atau mengubah elemnt
sort => mengurutkan nilai pada array
// noted : liat cara pemakaianya di mdn web docs
*/


// const dengan array
/*
const untuk mendeklarasikan sebuah array, maka mencegah variabelnya untuk di-assign 
ke array yang berbeda, tetapi kita masih bisa mengubah isi dari array tersebut.
menetapkan nilai konstan berupa alamat memori tempat array berada.
*/


// multidimensi atau nested array

const board = [
    [null, null, 'o'],
    ['X', 'O', null],
    ['O', null, 'X']
]