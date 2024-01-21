//document write ile çıktı veririz pek kullanılmaz
//document.writeln("Hello World") 
//altına bir şey daha yazdığında line yani satır bırakır.
//bi tane daha aşağı inmesini istersen <br> kullanabilirsin
//document.write("Merhaba Dünya")

//console log metodunu kullanırız
console.log("Hello World");
console.log(true)
console.log({name:"zehra", surname:"cart curt"})

//konsolu temizlemek için console.clear();

let a=5;
let b=10;
let at = 300
let isDesc = true

let zeyraElm = document.getElementById("zeyra")

function raEkleyici() {
    let zeyraValue = zeyraElm.innerHTML

    // zeyraElm.innerHTML = zeyraValue + "ra"
    if (isDesc) {
        at -= 10
    }
    else {
        at += 10
    }
    if (at == 0 || at == 310) isDesc = !isDesc
    
    zeyraElm.style.left = at + "px"
}
setInterval(raEkleyici, 50)

document.getElementById("zeyra").innerHTML = "zeyrararararara"
console.log(a+b); //ikisinin toplamını konsolo yazdırmak için yaptım
//console.log("iki sayının toplamı:" ,a+b); şeklinde de yapabiliirm

//pop up kullanmak için= alert("pop up mesajı");


