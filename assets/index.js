var key = '3bba06bcab2a36ab90dba65ed716c223'
var defaultUnits = `&units=imperial`
var cities = [];

var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
// var weewoo would be var name, i kept getting a 'deprecated' error whenever on line 19 so i just changed it to a random name to see if it would work and it did.
var weewoo = document.querySelector(".weewoo");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");
var humidity = document.querySelector(".humidity");
var icon = document.querySelector(".icon");
var cityhistory = document.querySelector(".demo");
var forecast = document.querySelector(".forecast-container");
var iconcontainer = document.querySelector(".icon-container");


const d = new Date();
document.getElementById("date").innerHTML = d;

button.addEventListener('click', function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +inputValue.value+ "&appid=3bba06bcab2a36ab90dba65ed716c223")
.then(response => response.json())
.then(data => {

    console.log(data);
    console.log(data.coord.lon);
    var lon = data.coord.lon
    var lat = data.coord.lat

    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + defaultUnits +"&appid=3bba06bcab2a36ab90dba65ed716c223")
    .then (response => response.json())
    .then (data => {
        console.log(data);
        var temp1 = data.daily[0].temp.day;

        var iconMain = "https://openweathermap.org/img/w/" + data.current.weather[0].icon + ".png"
                        $(`<img src="${iconMain}" alt="">`).appendTo(iconcontainer);

        var icon1 = "https://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + ".png"
        console.log(temp1);
        $(`<div class="card">
        <div class="card-header">
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">Temp: ${temp1} °F</li>
                <h3 class="card-title"><img class="card-img-top" src="${icon1}" alt=""></h3>
            </ul>
        </div>
        </div>
`).appendTo(forecast);
    })

    let nameValue = data['name'];
    let tempValue = data['main']['temp'];
    let descValue = data['weather'][0]['description'];
    // let iconValue = data['weather'][0]['icon'];
    let humiValue = data['main']['humidity'];

    weewoo.innerHTML = 'name: ' + nameValue;
    temp.innerHTML = 'temp: ' + tempValue;
    desc.innerHTML = 'desc: ' + descValue;
    // icon = 'https://openweathermap.org/img/w/' + iconValue + '.png';
    humidity.innerHTML = 'humidity: ' + humiValue;
    

    function setStorage() {
        cities.push(nameValue);
        // console.log(cities);
        // .join is smashing array items into a string
        // the delimiter is between every array item
        localStorage.setItem('city', cities.join(", "));
        // console.log(cities.join(","));
        
    }
    setStorage()

    function getValue() {
        let cityArray = localStorage.getItem('city').split(',');
        console.log(cityArray);
        return localStorage.getItem('city');

    }
    console.log(getValue());

    // function myFunction() {
    //     JSON.parse(window.localStorage.getItem('city'));
    //     cityhistory.appendChild(city)
    // }

    function myFunction() {
        document.getElementById("demo").innerHTML = 'Recent Cities: ' + localStorage.getItem('city');
    }
    myFunction();
});
});

