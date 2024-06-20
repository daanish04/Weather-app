let city=document.querySelector('.city');
let temp=document.querySelector('.temp');
let range=document.querySelector('.range');
let humidity=document.querySelector('.humidity')
let real=document.querySelector('.real');
let pressure=document.querySelector('.pressure');
let wind=document.querySelector('.speed');
let search=document.querySelector('.search');
let target=document.querySelector('.target');
let display=document.querySelector('.display');
let tempimg=document.querySelector('.tempimg');

const apiId="58546f7ce41e610095a8904c26f47688";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(place){
    const response=await fetch(apiUrl+place+`&appid=${apiId}`);
    let data=await response.json();

    console.log(data);
    city.textContent=data.name;
    temp.textContent=Math.round(data.main.temp)+`℃`;
    range.textContent=Math.round(data.main.temp_max)+`℃/`+Math.round(data.main.temp_min)+`℃`;
    humidity.textContent=data.main.humidity+`%`;
    real.textContent=Math.round(data.main.feels_like)+`℃`;
    pressure.textContent=data.main.pressure +`mBar`;
    wind.textContent=data.wind.speed+`km/h`;
    display.textContent=data.weather[0].main;

    let wid=data.weather[0].id;

    tempimg.classList.remove('thunderstorm', 'drizzle', 'rain', 'snow', 'mist', 'clear', 'cloudy');
    if(wid<300){
        tempimg.classList.add('thunderstorm');
    }
    else if(wid<400){
        tempimg.classList.add('drizzle');
    }
    else if(wid<600){
        tempimg.classList.add('rain');
    }
    else if(wid<700){
        tempimg.classList.add('snow');
    }
    else if(wid<800){
        tempimg.classList.add('mist');
    }
    else if(wid==800){
        tempimg.classList.add('clear');
    }
    else{
        tempimg.classList.add('cloudy');
    }

    
}

document.addEventListener('keydown', function(e){
    if(e.key=='Enter'){
        checkWeather(target.value);
    }
})
search.addEventListener("click", function() {checkWeather(target.value)});