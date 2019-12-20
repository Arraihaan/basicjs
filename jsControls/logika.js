const a = 10;
const b = 10;
// Operator “dan” (and), ditulis dengan &&.
// Operator and hanya akan menghasilkan nilai true
// jika kedua nilai yang dibandingkan juga bernilai true,
// dan menghasilkan nilai false jika salah satu atau
// kedua nilai yang dibandingkan adalah false.
// 1 && 1 atau AND
if (a === 10 && b === 11) {
  console.log(true);
} else {
  console.log(false);
}

//Operator “atau” (or), ditulis dengan ||.
//Operator or akan menghasilkan nilai true jika salah satu
//atau kedua nilai yang dibandingkan adalah true.
//Jika kedua nilai yang dibandingkan false,
//maka hasilnya adalah false.
// || atau NOR
if (a === 11 || b === 10) {
  console.log(true);
} else {
  console.log(false);
}

//Operator negasi, ditulis dengan !.
//Operator ini digunakan untuk membalik nilai logika.
//Jika ditulis a adalah true maka !a adalah false dan begitu juga sebaliknya.
// NOT !
if (!a === 10) {
  console.log(true);
} else {
  console.log(false);
}