let sayilar = [19,7,6,15,3];

function ekle(z,o,k,s,e){
    console.log(z,o,k,s,e)
};

//eski yöntemle 
//ekle(sayilar[19],sayilar[7],sayilar[6],sayilar[15],sayilar[3]); alırdık

//yeni yöntemle
//ekle(...sayilar);


//İKİ DİZİYİ BİRLEŞTİRMEK İÇİNDE KULLANILIR concat yerine
let diller1 = ["java", "C+"];
let diller2 = ["python", "css", ...diller1];

//şöyle de olabilirdi
let diziler1 = ["marvel", "dc"];
diziler2 = [...diller1];
