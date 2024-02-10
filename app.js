const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apikey="9774657a03c18f6617fcefb0ba55971d"
const searchinp=document.querySelector('#input');
const searchbtn=document.querySelector('.search button')

async function checkweather(city){
    const resp= await fetch(apiurl+city+`&appid=${apikey}`);
    var data=await resp.json()
    console.log(data);

const cit=document.querySelector('.city').innerHTML= data.name;
const temp=document.querySelector('.temp').innerHTML=Math.round(data.main.temp);
const humidity=document.querySelector('.humidity').innerHTML=Math.round(data.main.humidity);
const wind=document.querySelector('.wind').innerHTML=Math.round(data.wind.speed);
}
searchbtn.addEventListener("click",()=>{
    checkweather(searchinp.value)
})


