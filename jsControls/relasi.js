//Operator Relasi atau Perbandingan. Ex: >, <, ==, ===, !=, !==, >=, dan <=
const a = 10;
const b = 10;
const c = 13;

// lebih dari atau >
console.log(a > b);

// kurang dari atau <
console.log(a < c);

// sama dengan double atau = =
// membandingkan nilai tanpa memperdulikan tipe data nya.
console.log(a == '10');

// sama dengan triple atau = = =
// membandingkan nilai dan tipe data
console.log(a === '10');

// Operator tidak sama dengan (!=)
// Operator != adalah kebalikan dari operator ==, dan akan menghasilkan
//nilai true jika hasil operasi 2 buah variabel yang dibandingkan tidak memiliki nilai yang sama.
console.log(a != '10');

// Operator tidak identik dengan (!==)
// Jika operator != tidak mempertimbangkan tipe data,
// maka operator !== hanya akan false jika operator yang 
// dibandingkan memiliki nilai yang sama dan juga tipe data yang sama.
console.log(a !== '10');

// Operator Kurang dari (<) dan Kurang sama dengan dari: (<=)
// Operator < dan <= hanya akan bernilai true jika variabel di sisi kiri
// operator memiliki nilai yang kurang dari variabel di sisi kanan.
// Perbedaan antara < dan <= adalah jika kedua nilai yang dibandingkan sama,
// maka operator < akan menghasilkan false, namun operator <= akan menghasilkan true.
console.log(a <= '10');


// Operator Besar dari (>) dan Besar sama dengan dari (>=)
// Operator > dan >= hanya akan bernilai true jika variabel di sisi kiri
// operator memiliki nilai yang lebih besar dari variabel di sisi kanan.
// Perbedaan antara > dan >= adalah jika kedua nilai yang dibandingkan sama,
// maka operator > akan menghasilkan false, namun operator >= akan menghasilkan true.
console.log(a >= '10');