// https://www.youtube.com/watch?v=ecT42O6I_WI - referenced this youtube video when i got stuck
//  https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// 3bba06bcab2a36ab90dba65ed716c223

$.getJSON(
    "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&&appid=3bba06bcab2a36ab90dba65ed716c223", 
function(data) {
    console.log(data);

    var icon = "http://openweathermap.org/img/w/" + data.current.weather[0].icon + ".png";
    var temp = Math.floor(data.current.temp);
    var weather = data.current.weather[0].main;

    $('.icon').attr('src', icon);

    $('.weather').append(weather);

    $('.temp').append(temp);
});

// https://openweathermap.org/data/2.5/weather?q=Lehi&units=imperial&appid=3bba06bcab2a36ab90dba65ed716c223