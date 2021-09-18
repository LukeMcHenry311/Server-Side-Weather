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

    console.log("hiiiiiiii");

    var element = document.getElementById("demo");
    element.classList.remove("hide");

    var element = document.getElementById("fakeid");
    element.classList.remove("hide");


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
        
    $(iconcontainer).html(""); 
    $(forecast).html("");



        var iconMain = "https://openweathermap.org/img/w/" + data.current.weather[0].icon + ".png"
            $(`<img src="${iconMain}" alt="">`).appendTo(iconcontainer);




        var temp1 = data.daily[0].temp.day;
        var wind1 = data.daily[0].wind_speed
        var humidity1 = data.daily[0].humidity
        var icon1 = "https://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + ".png"

        var temp2 = data.daily[1].temp.day;
        var wind2 = data.daily[1].wind_speed
        var humidity2 = data.daily[1].humidity
        var icon2 = "https://openweathermap.org/img/w/" + data.daily[1].weather[0].icon + ".png"

        var temp3 = data.daily[2].temp.day;
        var wind3 = data.daily[2].wind_speed;
        var humidity3 = data.daily[2].humidity
        var icon3 = "https://openweathermap.org/img/w/" + data.daily[2].weather[0].icon + ".png"

        var temp4 = data.daily[3].temp.day;
        var wind4 = data.daily[3].wind_speed;
        var humidity4 = data.daily[3].humidity;
        var icon4 = "https://openweathermap.org/img/w/" + data.daily[3].weather[0].icon + ".png"

        var temp5 = data.daily[4].temp.day;
        var wind5 = data.daily[4].wind_speed;
        var humidity5 = data.daily[4].humidity;
        var icon5 = "https://openweathermap.org/img/w/" + data.daily[4].weather[0].icon + ".png"

        $(`<div class="card gold">Day 1
            <div class="card-header">
            <div class="card-title"><img class="card-img-top" src="${icon1}" alt=""></div>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">Temp: ${temp1} °F</li>
                    <li class="list-group-item">Wind: ${wind1} MPH</li>
                    <li class="list-group-item">Humidity: ${humidity1} %</li>
                </ul>
            </div>
            </div>
        `).appendTo(forecast);

        $(`<div class="card gold">Day 2
            <div class="card-header">
            <div class="card-title"><img class="card-img-top" src="${icon2}" alt=""></div>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">Temp: ${temp2} °F</li>
                    <li class="list-group-item">Wind: ${wind2} MPH</li>
                    <li class="list-group-item">Humidity: ${humidity2} %</li>
                </ul>
            </div>
            </div>
        `).appendTo(forecast);

        $(`<div class="card gold">Day 3
            <div class="card-header">
            <div class="card-title"><img class="card-img-top" src="${icon3}" alt=""></div>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">Temp: ${temp3} °F</li>
                    <li class="list-group-item">Wind: ${wind3} MPH</li>
                    <li class="list-group-item">Humidity: ${humidity3} %</li>
                </ul>
            </div>
            </div>
        `).appendTo(forecast);

        $(`<div class="card gold">Day 4
            <div class="card-header">
            <div class="card-title"><img class="card-img-top" src="${icon4}" alt=""></div>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">Temp: ${temp4} °F</li>
                    <li class="list-group-item">Wind: ${wind4} MPH</li>
                    <li class="list-group-item">Humidity: ${humidity4} %</li>
                </ul>
            </div>
            </div>
        `).appendTo(forecast);

        $(`<div class="card gold">Day 5
            <div class="card-header">
            <div class="card-title"><img class="card-img-top" src="${icon5}" alt=""></div>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">Temp: ${temp5} °F</li>
                    <li class="list-group-item">Wind: ${wind5} MPH</li>
                    <li class="list-group-item">Humidity: ${humidity5} %</li>
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