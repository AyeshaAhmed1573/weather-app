const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apikey="9774657a03c18f6617fcefb0ba55971d"
const searchinp=document.querySelector('#input');
const searchbtn=document.querySelector('.search button')
const image=document.querySelector("#main")
async function checkweather(city){
    const resp= await fetch(apiurl+city+`&appid=${apikey}`);
    var data=await resp.json()
    console.log(data);

const cit=document.querySelector('.city').innerHTML= data.name;
const temp=document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+"°C";
const humidity=document.querySelector('.humidity').innerHTML=Math.round(data.main.humidity)+"%";
const wind=document.querySelector('.wind').innerHTML=Math.round(data.wind.speed)+"Km/h";
if (data.weather[0].main=="Clear") {
    image.setAttribute('src', "Sunny.png");
    
}  
else if (data.weather[0].main=="Haze") {
    image.setAttribute('src', "mist.png");
    
}
else if (data.weather[0].main=="Clouds") {
    image.setAttribute('src', "scatteredclouds.png");
    
}
else if (data.weather[0].main=="Drizzle") {
    image.setAttribute('src', "rain.png");
    
}
else if (data.weather[0].main=="Rain") {
    image.setAttribute('src', "showerrain.png");
    
}
else if (data.weather[0].main=="Snow") {
    image.setAttribute('src', "snow.png");
    
}
else if (data.weather[0].main=="Smoke") {
    image.setAttribute('src', "smoke.png");
    
}
document.querySelector(".weather").style.display="block"
}

searchbtn.addEventListener("click",()=>{
    checkweather(searchinp.value)
})


