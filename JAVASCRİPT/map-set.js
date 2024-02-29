let map1= new Map(); //yeni bir map tanımı

map1.set(27, "gaziantep"); //mape değer ataması yaptık
map1.set(29, "gümşane"); //1. key 2. value

console.log(map1.get(27));

//DEĞERİ DÖNDÜRÜR
let dönenDeger= map1.get(29);
map1.size; //mapin değerini alır kaç tane vs
map1.delete(/*değer siler booelan olarak döner*/);
map1.has(29); //map1 keyi 29 olan değere sahip mi

//FOR OF İLE MAP ÜZERİNDE DÖNEBİİRİZ
for(let [key,value] of map1){
    console.log(key,value)
}

//3 ve 4 dekileri array formatında yakalamak istiyorsam
let keys = Array.from(map1.keys())

keys.forEach((key)=>{
    console.log(key);
})
//23de key, map1.get(key) eklersek gaziantep ve gümşane yazılarını da alırız

let sayılar = [1, 2, 3, 4, 5]; //bunlar referans tip olduğu için ilk başta tanımladım

let karesi = sayılar.map(function(sayı) {
  return sayı * sayı;
});

console.log(karesi); // [1, 4, 9, 16, 25]



// SET ------------------------------------------------------------
// tüm değerler sadece 1 kere tutulur map'in aynısı
let set = new Set();
