function sayHello() {
  console.log('hello!')
}

sayHello() 

//sayHello adında bi fonksiyonum var içine konsola yansitmak istedigim şeyi yazdim fonksiyondan çıkıp fonksiyona verdigim adı aşağıya yazıp parantezleri açtım. çalışsın diye

function multiply(number1, number2){
  return number1 * number2
}

let total = multiply(5,2)

console.log("toplam", total)

//gönderdiğim iki parametreyi number1 ve number2yi çarparak değeri bana geri döndürdü


function topla(){
  let total = 0
  for (let i=0; i < arguments.length; i++)
  total += arguments[i]
}
return total
console.log(topla(2,3,4,5,6))

//parametre sayısını bilmiyosam veya tek tek almak istemiyosam argument objemin icinde hepsi var