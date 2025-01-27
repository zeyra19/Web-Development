let weight, height, measure, bmi, error ;

let calculate =() => {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	error = "Lütfen bir değer giriniz.";
	height /= 100;
	height *= height;
	bmi = weight/height;
	bmi = bmi.toFixed(1); //sonuç en fazla bir ondalık basamağa sahip olsun

	if (bmi <= 18.4) {
		measure = "Sizin BMI'niz  " + bmi + " yani " + "kilonuz düşük";

	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = "Sizin BMI'niz  " + bmi + " yani " + "kilonuz normal";

	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = "Sizin BMI'niz " + bmi + " yani " + "kilonuz obeze yakın";

	} else if (bmi >= 30) {
		measure = "Sizin BMI'niz  " + bmi + " yani " + "obezsin";
	}
	

	if (weight === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {
		document.getElementById("results").innerHTML = measure; 
	}
	if (weight < 0) {
		document.getElementById("results").innerHTML = "Geçersiz veri girişi.";
	}
};