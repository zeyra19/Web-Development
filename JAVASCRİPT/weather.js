if (response.status== 404) {
  document.querySelectorAll(".error").style.display= "block"
  document.querySelector(".weather_two").style.display= "none"
}

if(data.weather[0].main == "Clouds") {
  alert("Bulut olabilir");
}else {
  data.weather[0].main == "Rain"
  alert("Üstünü sıkı giyin");
}

searchBtn.addEventListener("click", ()=>{
  cityControl(searchInp.value)
})