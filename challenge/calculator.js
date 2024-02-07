let display = document.querySelector('#display');
let buttons= document.querySelector('button');

buttons.forEach((item) => {
  item.onclick = () => {
    if( item.id =='clear') {
      display.innerText=''; //eğer clear düğmesine basilirsa display alanini temizlesin '' girsin diye
      
    }else if (item.id=='backspace') {
      let string =display.innerText.toString();
      display.innerText= string.substr(0, string.length - 1);
       //tıklanan düğme backspace ise displayde ki metni bir karakter geri giderek düzenle. stringin 0 indexinden başla stringin uzunluğu-1. indexine kadar bir karakteri silerek yeni bir string döndür. 
       
       
    }else if(display.innerText != '' && item.id == 'equal') {
      display.innerText= eval(display.innerText);
      //displayde ki ifadeleri hedapalyip sonucu göstersin diye eval ifadesini kullandim
      
    }else if (display.innerText = '' && item.id == 'equal') {
      display.innerText = 'Empty';
      setTimeout(() => (display.innerText = ''), 2000);
      //display boşsa empty mesajini göster ve 2 saniye soora sil
    }else{
      display.innerText += item.id;
    }
    
  }
}

)
let themeToggleBtn =document.querySelector('.theme-toggle');
let calculator = document.querySelector('.dark');
let toggleIcon = document.querySelector('.toggle-icon');
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle('dark');
  themeToggleBtn.classList.toggle('active');
  isDark = !isDark;
}
//temayı degistirmek icin