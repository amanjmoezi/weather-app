const tocken = "5ee8b69845b8fa7570ecf552330f9eff";
const city = "sanandaj";
const tempElement = document.querySelector(".temp");
const statusElement = document.querySelector(".status");
const timeElement = document.querySelector(".time");
const countryElement = document.querySelector(".loc");
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${tocken}&units=metric`;
fetch(url)
.then(resp=>resp.json())
