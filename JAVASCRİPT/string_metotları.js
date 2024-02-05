//charAt() bizim vermis oldugumuz index numarasındaki karakteri çağırır. örnekte kursun 3. indexini cagirdim G gelicek
let kurs ="Web Geliştirme Kursu";
let karakter= kurs.charAt(3);

//concat iki diziyi birlestiri

//indexOf karakteri verip index numarasini alicaz. bana 3 olarak dönecek 
let index = kurs.indexOf("G");

//toUpperCase kelimelerin hepsini büyük harfe dönüştürür string olarak döner

//toLowerCase kelimelerin hepsini küçük harfe dönüştürür string olarak döner

//TRİM = kullanicinin girmis olduğu verinin arasında boşluk olursa sen o boşlukları sil
console.log(kurs.trim());

//slice ve substring metotlari başlangıç ve bitiş arasındaki bir kelimeyi çekmek için kullanabiliriz
console.log(kurs.slice(0,6));

//replace eski halinden yeni haline çevirmek için
console.log(kurs.replace("modern", "güncel"));

//startsWith başı neyle başlıyor? değer veririz true false olarak geri döner.
if(kurs.startsWith("M")){
  console.log("M harfi ile başlıyor");
}

//endsWith sonu şunla mı bitiyo? 