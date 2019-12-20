//Object
//key Motor valuenya berupa array yaitu Kuning dan Merah
//key Mobil valuenya berupa object
//key Ban value nya 2
//key Jok value nya Hitam

//Array&Object
const Motor = ["Kuning", "Merah"]
console.log(Motor);
console.log(Motor[0]);

const Mobil = { Warna: "Merah", Merek: "Lamborghini", Ban: 4 }
console.log(Mobil);
console.log(Mobil.Merek);

//JSON
const data = '{ "Ban": 2, "Jok": "Hitam" }'

const dataJSON = JSON.parse(data);

console.log(dataJSON)

const dataString = JSON.stringify(dataJSON);

console.log(dataString)

