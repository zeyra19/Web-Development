//global scop = kıvırcık parantezin içinde olmazsa her yerden erişilebilir 
//var ile tamamlanan her şey function scope olur
//var/let/const degıskenIsmi = degıskenDegeri;
//var'a birden fazla değişken tanımlayabiliriz let ve constta sadece bir değişken

// var a = 5;
// var a = 10;
// console.log(a)

const user = {
    username: "zehra",
    password: "123"
}
//console.log(user) yanlış kullanım

//string veri tipi let isim = "zehra";
// console.log(zehra); şeklinde oluşturulur zehranın önüne typeof yazarsan veri tipi konsola yansır
//çift tırnaklar içinde tanımlanmış her şeydir
//iki string toplanmaz yan yana getirir
//let stringDegisken ="Yaşınız:";
//let yas = 23;
//console.log(stringDegisken + yas);
//ekrana Yaşınız: 23 olarak yansır

// number veri tipi let sayi = 10;
// console.log(sayi); 
// çift tırnak kullanılmaz

//boolean : true ve falseden oluşur
//console.log(5<6);

//null veri tipi boş anlamına gelir

//undefined tanımlanmamış veri tipi

//object
//let insan = {
   // isim : "zehra",
    // yas : 18
//}
//console.log(insan);

//function veri tipi
// let func = function(){
//   console.log("merhaba");
// }
//bu veri tipini çalıştırmak için func();
// console.log(func);




//alert pop up verici 
//alert("ileme devam etmeden önce kaydedin")

//prompt(); kullanıcıdan değer alabiliyoruz

// let sonuc =confirm("silmek istediğinize emin misiniz"); üstten pop up verir
//tamam'a basarsa true, iptal'e basarsa false
//console.log(sonuc);