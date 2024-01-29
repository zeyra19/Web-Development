//kutu parantezi alt gr 8 ve 9'a basarak yapariz

//console'a yazdigim şey 3. indexi getir demek
//ArrayIndexOutOfBoundException js hariç diğer programlama dillerinde yazılanın dışına çıktığında bu hatayı verir

let numbers = [0,1,2,3];

console.log(numbers[3]);

//numbersda ki 1i 6 ile değiştirmek istiyorum bunun için ilk 11. satırı yaparım sonra 12. satırla ekrana yazdırırım
numbers[2]="6"; 
console.log(numbers[2]);
//iki türlü dizi tanimlayabiliriz ilki kutu paranteziyle ikincisi ile
//let dizi = new Array();

//FOREACH DİZİLERDE KULLANILIR

let isimler = ["zehra","nur","hindi"];

isimler.forEach(function(isim){
console.log(isim);
})
//isimler dizisinin üzerinde foreach döngüsünü kullanarak dönmek istiyor. sonrasında metod istiyor. functionı verdim içine de isim adinda bir parametre verdim. 

//forEach tek tek dizinin içerisindeki her bir elemanı isim adındaki değişkenin içerisine koyuyor

//bunu for döngüsüyle yapalim
let isimler = ["zehra","nur","hindi"];

for(let i=0 ; i<isimler.length ; i++){
  console.log(isimler[i]);
}

//bunu while döngüsü ile yapalim
let isimler = ["zehra","nur","hindi"];
let sayac = 0;
while (sayac<isimler.length){
  console.log(isimler[sayac]);
  sayac++;
}