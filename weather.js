// const searchZip = document.getElementById('searchZip');

const apiKey = 'ef18d390e6563614d70389d312dc8586';
let city = document.getElementById('city')
let currentDate = document.getElementById('currentDate')
let currentTemp = document.getElementById('currentTemp')
let conditions = document.getElementById('conditions')
let tempHi = document.getElementById('tempHi')
let tempLo = document.getElementById('tempLo')
let body = document.getElementById('body')

const getWeather = () => {
    
    let zipCode = document.getElementById('zipinput').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${apiKey}`)
    .then(response => response.json())
    .then(response => {
        city.innerHTML = response.name,
        currentDate.innerHTML = new Date().toLocaleDateString(),
        currentTemp.innerHTML = response.main.temp+'°F',
        conditions.innerHTML = ` ${response.weather[0].main}`,
        tempHi.innerHTML = response.main.temp_min+'°F'+'&nbsp / &nbsp',
        tempLo.innerHTML = response.main.temp_max+'°F'
    });

}
