
let btnSearch = document.querySelector('button');

let weatherReport = {
apiKey:"93c339d95af6e800d4c3f55498822e86",
fetchWeather: function(city){fetch("https://api.openweathermap.org/data/2.5/weather?q="
+city
+"&units=metric&appid="
+this.apiKey)
.then(res => res.json())
.then(data => this.fillWeather(data))},

fillWeather: function(data){
const {name} = data
const {temp, humidity}= data.main
const {speed}= data.wind
const{icon}= data.weather
const{country}=data.sys

document.querySelector('h2').innerText = 'weather in ' + name 
document.querySelector('h3').innerText = temp + ' degree celsius'
document.querySelector('h4').innerText = 'country: ' + country
document.querySelector('h5').innerText = "humidity: " + humidity + '%'
document.querySelector('p').innerText = "wind: "+speed + 'km/h'
document.querySelector('input').value= name
},

search: function(){
   this.fetchWeather(document.querySelector('input').value)
}

};

document.querySelector('button').addEventListener('click', function(){weatherReport.search()})

document.querySelector('input').addEventListener('keyup', function(e){
    if(e.key == 'Enter'){weatherReport.search()}
})
    
