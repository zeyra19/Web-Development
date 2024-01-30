let product1 = {
  name : "phone 11" ,
  price : 7000
}

let product2 = {
  name : "phone 12" ,
  price : 8000
}

let product3 = {
  name : "phone 13" ,
  price : 9000
}

let product4 = {
  name : "computer 1" ,
  price : 3000
}

let product5 = {
  name : "computer 2" ,
  price : 4000
}

let products = [product1, product2, product3, product4, product5];
//5 ürünümü dizinin içerisine koydum
let filteredProducts = [];

let theNameEnteredByTheUser = prompt("bir ürün ismi giriniz");

//kullanıcı phone yazdiginda 3ü gelsin computer yazdiginda 2si gelsin istiyorum bu yüzden uzerlerinde dönmem gerekiyo

products.forEach(function(product){
  if(product.name.toUpperCase().includes(theNameEnteredByTheUser.toUpperCase(),0)){
    filteredProducts.push(product);
  }
});
//almış oldugum ürünün ismini uppercasele büyük harfe çevirdim arama yaparken inclueds metodunu kullaniyorum.bunu içeriyor mu diye bak dedim. 0 verdim çünkü tüm string içinde arama yapsin istiyorum. harf hassasiyeti olmasin diye her iki tarafa touppercase verdim

//bu ürünü iceriyorsa ayrı bir array de tut dedim o yüzden let filteredProductsla tanimladim

