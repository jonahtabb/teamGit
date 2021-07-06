import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'reactstrap'


const WeatherComp = (props) => {
 //const apiKey = 'a68142f16f5a91861dee80d5b3842040'
 const baseURL = `https://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&units=imperial&appid=a68142f16f5a91861dee80d5b3842040`;
const testUrl = `api.openweathermap.org/data/2.5/weather?zip=46201,us&callback=test&appid=a68142f16f5a91861dee80d5b3842040`
 
    const [mainTemp,setMainTemp] = useState('')
    const [description,setDescription] = useState('');
    const [name, setName] = useState('')
   

   
 
const fetchData = () => {
    console.log("did it work")
    if (props.latitude) {
        fetch(baseURL)
        .then(res => res.json())
        .then(json => {
            let weatherData = json
            setName (weatherData.name);
            setMainTemp (Math.round(weatherData.main.temp));
            setDescription(weatherData.weather[0].description);
           
            console.log(weatherData)
    })     
    }
  
}

return(
    <div class="card my-4">
        <h2>WeatherMap Api</h2>
        <Button className="custom-button" onClick={fetchData}>Click for Weather in your Area</Button>
        <h3>Neighborhood: {name} </h3>
        <p>Temperature: {mainTemp} °F</p>
        <p>Looks like: {description} </p>
   
    </div>
)}

    



export default WeatherComp;
