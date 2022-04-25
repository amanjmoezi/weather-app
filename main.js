const tocken = "5ee8b69845b8fa7570ecf552330f9eff";
const city = "sanandaj";
const tempElement = document.querySelector(".temp");
const statusElement = document.querySelector(".status");
const timeElement = document.querySelector(".time");
const countryElement = document.querySelector(".loc");
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${tocken}&units=metric`;
fetch(url)
.then(resp=>resp.json())
.then((json)=>{
    const {name,main,sys,weather} = json;
    const d = new Date();
    let time = `${d.getFullYear()},${d.getMonth()},${d.getDay()}`;
    const temp = Math.round(main.temp);
    statusElement.innerText = weather[0].main;
    timeElement.innerText = time;
    countryElement.innerText = `📍 ${sys.country},${name}`;
   
    tempElement.innerText = `${temp}°`
    if (d.getHours()>=12) {
        document.querySelector(".weather-box").classList.remove("night");
        document.querySelector(".weather-box").classList.add("san");
    }
    
})