
const input = document.getElementById("user-input")
const button = document.getElementById("search-btn")
const icon = document.getElementById("icon")
const temp_c = document.getElementById("temp")
const cityname = document.getElementById("cityname")
const humid = document.getElementById("humidity")
const win = document.getElementById("wind")


async function getdata(cityname){
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=3a6770db6dc847ec9f1123328242309&q=${cityname}&aqi=no`
    )
    return await promise.json()
}

button.addEventListener('click',async()=>{
    
    const value = input.value
    const result = await getdata(value);
    console.log(result)
    var icon_url = result.current.condition.icon
    icon.src = icon_url

    var temp = result.current.temp_c
    temp_c.innerText = temp+'°C'

    var city_name = result.location.name
    cityname.innerText = city_name

    var humidity = result.current.humidity
    humid.innerText = humidity+'%'

    var wind = result.current.wind_kph
    win.innerText = wind+'km/h'
})