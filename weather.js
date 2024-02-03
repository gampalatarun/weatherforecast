var apikey="b897d6332723285e866868a79d65169d";
var urlcurrent="https://api.openweathermap.org/data/2.5/weather?q=";
var url="https://api.openweathermap.org/data/2.5/forecast?q=";
var citysearchEle=document.getElementById("cityInput");
var cityNameEle=document.getElementById("cityName")
var weathericonEle=document.getElementById("weathericon");
var iconurl=" https://openweathermap.org/img/wn/";
var tempofCity=document.getElementById("currentTemp");
var errorEle=document.getElementById("error");
var celciusBtn=document.getElementById("celciusid");
var FahrenheitBtn=document.getElementById("Fahrenheitid")






//here we recall the api to get the data has celcius becasuse by default we use data has celcius
function FahrenheitToCelcius() {
    currentweather();
    weather()
    
};
   



//here the current weather details
function currentweatherdetails(currentweatherData){
    console.log(currentweatherData);
    //accessing the city name  from API Data
    cityNameEle.textContent=currentweatherData.name;
    weathericonEle.src=iconurl+currentweatherData.weather[0].icon+".png";
    // accessing temperature details from API data
    tempofCity.textContent=Math.ceil((Number(currentweatherData.main.temp)))+"°C";
    //min temperature
    document.getElementById("mintemp").innerHTML=`Min: ${currentweatherData.main.temp_min}°C`;
    document.getElementById("maxtemp").innerHTML=`Max: ${currentweatherData.main.temp_max}°C`;
    //accesing humidity percentage
    document.getElementById("humidity").innerHTML=`Humidity: ${currentweatherData.main.humidity}%`
    //acessing the wind spped data 
    document.getElementById("windspeed").innerHTML="Wind Speed: "+Math.ceil(Number(currentweatherData.wind.speed*(18/5)))+"km/h";
    //accesing the weather description
    document.getElementById("weatherDescription").innerHTML=currentweatherData.weather[0].description;
    
    
}





//days data
var d=new Date();
var weekday=["sunday","Monday","Tuesday","wednessday","Thursday","Friday","Saturday"]

function displayDay(day){
    if(day+d.getDay()>6){
        return day+d.getDay()-7
    }
    else{
        return day +d.getDay();
    }
}







//here the accesing the data for fivedays forecast
function fivedaysforecast(weatherData){
    for(i=0; i<5;i++){
        document.getElementById("day"+(i+1)+"Min").innerHTML="Min : "+Number(weatherData.list[i].main.temp_max)+"°C";
    }

    for(i=0; i<5;i++){
        document.getElementById("day"+(i+1)+"Max").innerHTML="Max : "+Number(weatherData.list[i].main.temp_min)+"°C";
    }

    for(i=0; i<5;i++){
        document.getElementById("img"+(i+1)).src=iconurl+weatherData.list[i].weather[0].icon+".png";
    }

    for(let i=0; i<5;i++){
        document.getElementById("day"+(i+1)).innerHTML=weekday[displayDay(i)]
        }

    

}


//current weather forecast
function currentweather(){
    if(citysearchEle.value===""){
        errorEle.textContent="Enter a valid  City  Name";
    }
    else{
        errorEle.textContent="";
    }
    let url1=`${urlcurrent + citysearchEle.value}&appid=${apikey}&units=metric`;
     
        let options={
            method:"GET"
        };
        fetch(url1,options)
        .then(function(response){
            return response.json();
        })
        .then(function (currentweatherData) {
            //here json data is refered as weatherData

            currentweatherdetails(currentweatherData);
            
            


        }
        
        
        );
            
}









//here we Fetch the weather  data from Api
function weather(){
    if(citysearchEle.value===""){
        errorEle.textContent="Enter a valid  City  Name";
    }
    else{
        errorEle.textContent="";
    }
    let url1=`${url + citysearchEle.value}&appid=${apikey}&units=metric`;
     
        let options={
            method:"GET"
        };
        fetch(url1,options)
        .then(function(response){
            return response.json();
        })
        .then(function (weatherData) {
            //here json data is refered as weatherData

            
            fivedaysforecast(weatherData);
            currentweather();
            


        }
        
        
        );
            
}









//converting Celcius to fahrenheit
function convertToFahrenheit() {
    
  
    // Update the currentTemp element with the new temperature value
    

    var currentTempCelsius = document.getElementById("currentTemp").textContent.slice(0,-2);

  // Convert the temperature to Fahrenheit
  

  // Update the currentTemp element with the new temperature value
  document.getElementById("currentTemp").textContent = Math.ceil(((currentTempCelsius*9/5)+32))+"°F";

  // Convert and update the min and max temperature values
  var minTempCelsius = document.getElementById("mintemp").textContent.slice(5, -2);
  var maxTempCelsius = document.getElementById("maxtemp").textContent.slice(5, -2);
  document.getElementById("mintemp").textContent = "Min :" + Math.ceil(((minTempCelsius * 9/5) + 32)) + "°F";
  document.getElementById("maxtemp").textContent = "Max :" + Math.ceil(((maxTempCelsius * 9/5) + 32)) + "°F";









//forecast data to convert into  fahrenheit

 // Convert the minimum and maximum temperature values for each day
 var day1Min = document.getElementById("day1Min");
 var day1Max = document.getElementById("day1Max");
 day1Min.textContent = "Min :" +Math.round( ((Number(day1Min.textContent.slice(5, -2)) * 9/5) + 32)) + "°F";
 day1Max.textContent = "Max :" + Math.round(((Number(day1Max.textContent.slice(5, -2)) * 9/5) + 32)) + "°F";

 var day2Min = document.getElementById("day2Min");
 var day2Max = document.getElementById("day2Max");
 day2Min.textContent = "Min :" + Math.round(((Number(day2Min.textContent.slice(5, -2)) * 9/5) + 32)) + "°F";
 day2Max.textContent = "Max :" + Math.round(((Number(day2Max.textContent.slice(5, -2)) * 9/5) + 32)) + "°F";

 var day3Min = document.getElementById("day3Min");
 var day3Max = document.getElementById("day3Max");
 day3Min.textContent = "Min :" + (Math.round((Number(day3Min.textContent.slice(5, -2)) * 9/5) + 32)) + "°F";
 day3Max.textContent = "Max :" +Math.round( ((Number(day3Max.textContent.slice(5, -2)) * 9/5) + 32) )+ "°F";

 var day4Min = document.getElementById("day4Min");
 var day4Max = document.getElementById("day4Max");
 day4Min.textContent = "Min :" + Math.round(((Number(day4Min.textContent.slice(5, -2)) * 9/5) + 32) )+ "°F";
 day4Max.textContent = "Max :" + Math.round(((Number(day4Max.textContent.slice(5, -2)) * 9/5) + 32)) + "°F";

 var day5Min = document.getElementById("day5Min");
 var day5Max = document.getElementById("day5Max");
 day5Min.textContent = "Min :" + Math.round(((Number(day5Min.textContent.slice(5, -2)) * 9/5) + 32) )+ "°F";
 day5Max.textContent = "Max :" + Math.round(((Number(day5Max.textContent.slice(5, -2)) * 9/5) + 32) )+ "°F";


  }

