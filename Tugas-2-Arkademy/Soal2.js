//Buat segitiga dengan *
  
  for(let baris = 1; baris <= 10; baris++) {
    let kolom = " ".repeat(10 - baris);
    let kolom2 = "*".repeat(baris * 2 - 1)

    console.log(kolom + kolom2 + kolom);

}
