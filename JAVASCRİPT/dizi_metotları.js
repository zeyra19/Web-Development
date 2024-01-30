/* push....:dizinin sonuna eleman ekler, ayrıca dizinin uzunluğunu döner. dizinin sonuna pushla ekledigimiz sayıyı ya da değeri her neyse ekler. başta length 3 dü pushla 4 oldu.
let sayılar = ["1","2","3"];
sayılar.push("4");
console.log(sayılar);

unshift....:bir dizinin başına eleman ekler, eleman sayısını geriye döner.
  sayıların başına bir şey getirmek istiyosam şöyle yaparim
  sayılar.unshift("0");
  
  pop.....: dizinin sonundan eleman siler
  sayılar.pop();
  console.log(sayılar);
  
  shift.......:dizinin başından eleman siler
  sayılar.shift();
  
  SPLİCE...: eleman eklemek ve silmek icin kullanilir. elemanı istedigin yere ekleyebilirsin
  sayılar.splice(0,0, "5");
  dizinin 0. indexine herhangi bi elemanı silmeden(0) 5 sayısını ekle diyorum
  
  JOİN......: her bir değer arasına istedigimiz bir seyi koyabiliriz -,_,+,. herşey olabilir
  sayılar.join("-") console çıktısı 1-2-3
  şeklinde olur.
  
  CONCAT......:dizileri birleştirmek için kullanılır
  let birlesmisDizi = sayılar1.concat(sayılar2);
  console.log(birlesmisDizi);
  
  SLİCE....: diziyi istedigimiz yerden bölüp yeni bir dizi oluşturur
  sayılar.slice(2) dedim ki 2. indexinden başla sonuna kadar git
  
  LENGTH.....:dizinin güncel uzunluğunu yakalayabiliriz
  console.log(sayılar.length);
  
  REVERSE......:geriye döndürür
  
  console.log(sayılar);
  sayılar.reverse();
  
  konsola sayılar 3,2,1 şeklinde yazılacak
  
  SPLİT.......: değerleri ayırır dizi olarak döner
  let değerler = "A", "B", "C";
  let değerlerDizi = değerler.split(",");
  console.log(değerlerDizi);
  
  INDEXOF......: belirtilen eleman var mi yok mu bakar varsa 0 yoksa -1
  
  let index = sayılar.indexOf("2");
  console.log(index);
  
  ifle de yazdırabiliriz
  if(index==0){
    console.log("belirtilen eleman var");
  }else{
    console.log("belirtilen eleman yok");
  }
  
  İNCLUDES.......: dizimde içeren bir şey varsa true olarak döner yoksa false olarak
  
  let sonuc = sayılar.included("2");
  console.log(sonuc);
  2 sayısını iceriyo musun diye sorgulattim bana true olarak döndü
  */
  