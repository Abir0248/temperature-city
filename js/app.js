// api key c2abc6f5d5822ba67bd0c7aaccee4522
const API_KEY = `c2abc6f5d5822ba67bd0c7aaccee4522` ;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    // console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));

}

const setInnertext = (id, text) =>{
    document.getElementById(id).innerText =text;
}

const displayTemperature = temperature => {
    setInnertext('city', temperature.name);
    setInnertext('temp', temperature.main.temp);
    setInnertext('weather', temperature.weather[0].main);

    // console.log(temperature);
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('icon-img');
    imgIcon.setAttribute('src',url);


}