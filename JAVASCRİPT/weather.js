
const cityWeatherInfo = {
  "antep": {
    "name": "Gaziantep",
    "temparature": "27",
    "wind": "19",
    "humidity": "5"
  },
  "gumushane": {
    "name": "Gümüşhane",
    "temparature": "29",
    "wind": "10",
    "humidity": "9"
  },
  "ankara": {
    "name": "Ankara",
    "temparature": "6",
    "wind": "2",
    "humidity": "0"
  }
}

/*
if (response.status== 404) {
  document.querySelectorAll(".error").style.display= "block"
  document.querySelector(".weather_two").style.display= "none"
}

if(weather[0].main == "Clouds") {
  alert("Bulut olabilir");
}else {
  weather[0].main == "Rain"
  alert("Üstünü sıkı giyin");
}

searchBtn.addEventListener("click", ()=>{
  cityControl(searchInp.value)
})
*/
function setCity(){
  /* aldığı şehir parametresine göre htmldeki verileri güncelleyecek*/
  let city = document.getElementById("cityInput").value
  
  let weatherInfo = cityWeatherInfo[city]
  if (!weatherInfo) {
    alert("böyle bir şehir bulunamadı");
  }

 
  document.getElementById("city").innerText = weatherInfo.name
 
  document.getElementById("wind").innerText = weatherInfo.wind
  document.getElementById("humidity").innerText = weatherInfo.humidity
  document.getElementById("temp").innerText = weatherInfo.temparature

}

var input = document.getElementById("cityInput");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    setCity();
  }
});