//bir dizide renkleri tanımladım
const colors = ["red", "green", "blue"];
//elementleri sırasıyla tanıt
const fiirstColor = colors[0];
const ssecondColor = colors[1];

//destructuring ile
const [firstColor, secondColor] = colors;

//ikinci elementi atlamak
const [firstColorr, , thirdColor] = colors;


// iç içe geçmiş destructuring
const userProfile = {
    name: "zehra",
    details: {
      age: 18,
      hobby: "ogulcanla buluşmak"
    }
  };

  const {details: { age, hobby }} = userProfile;

//..................................................................................................

let hesapla = (z,o)=> {
    let toplam= z+o
    let cikar= z-o
    let carp= z*o
    let bol= z/o

    let dizi=[toplam,cikar,carp,bol]
    return dizi
}

let [c,k,s,e]= hesapla(z,o)
console.log(c,k,s,e)