const key = '3bba06bcab2a36ab90dba65ed716c223'
var cities = [];

var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
// var weewoo would be var name, i kept getting a 'deprecated' error whenever on line 19 so i just changed it to a random name to see if it would work and it did.
var weewoo = document.querySelector(".weewoo");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");

button.addEventListener('click', function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +inputValue.value+ "&appid=3bba06bcab2a36ab90dba65ed716c223")
.then(response => response.json())
.then(data => {
    console.log(data);
    let nameValue = data['name'];
    let tempValue = data['main']['temp'];
    let descValue = data['weather'][0]['description'];

    weewoo.innerHTML = nameValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;

    function storeCities() {
        // stringify and set key to array for value
        localStorage.setItem("nameValue", JSON.stringify(cities));
        console.log(localStorage);
    };



    // function setStorage() {
    //     localStorage.setItem('', nameValue);
    // }
    // setStorage()

    // function getValue() {
    //     return localStorage.getItem('nameofcity');
    // }
    // console.log(getValue());

    // function myFunction() {
    //     document.getElementById("demo").innerHTML = '1. ' + localStorage.getItem('nameofcity');
    // }
    // myFunction();
    storeCities();
});
});

// function storeCities() {
//     localStorage.setItem("cities", JSON.)
// }