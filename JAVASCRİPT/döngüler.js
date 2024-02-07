//for loop
//1- 9'a kadar yazdiralim
for(let i=0; i<10; i++){
  console.log(i);
}

//içinden 3 sayısını secmek için if koyup 3e eşitse şunu yap dedim

for(let i=0; i<10; i++){
  
  if(i==3){
    console.log('en sevdigim rakam:' +i);
    continue;
  }
  console.log(i);
}

// WHİLE LOOP
//1-9'a kadar while döngüsüyle de yazdırabiliriz, true ise çalışır false ise çalışmaz

let i=0;
while(i<10){
  console.log(i);
  i++;
}

//DO-WHİLE
//değeri false olursa ilk başta bir kere mutlaka ekrana yazdırır sonra çalışmaz 
let i=0;
do{
  console.log(i);
  i++;
}while(i<10)
