const URL = 'https://api.openweathermap.org/data/2.5/weather?lang=vi&units=metric&appid=dec88dc4a5477646356fe07a2dfa9a14&q='

function getTemp (cityName){
    return fetch(URL + cityName)
    .then(res => res.json())
    .then(resJSON => resJSON.main.temp);
}

export default getTemp;