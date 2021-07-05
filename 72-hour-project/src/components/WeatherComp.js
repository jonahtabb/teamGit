import React, {useState} from "react";

// const apiKey = 'a68142f16f5a91861dee80d5b3842040'
// const apiUrl = `api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=a68142f16f5a91861dee80d5b3842040`;


// function WeatherComp (props) {


//     const [feels_like,setFeelsLike] = useState('');
//     const [mainTemp,setMainTemp] = useState('');
//     const [description,setDescription] = useState('');
//     const [name, setName] = useState('')


//     let lon = props.longitude;
//     let lat = props.latitude;

//     useEffect(()=> {
//         fetch
//         (`api.openweathermap.org/data/2.5/weather?lat={lat}&lon=${lon}&appid=${a68142f16f5a91861dee80d5b3842040}`)
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data)

//         setName(data.name)
//         setFeelsLike(data.main.feels_like);
//         setMainTemp(data.main.temp);
//         setDescription(data.weather[0].description);
     
//         })
       
//     },[lon, lat])


//     return (
//         <div>
   
//        <h2>WeatherMap Api</h2>
      
//        <h3>{name}</h3>
//        <p>Celsius: {Math.round(mainTemp)}</p>  
//        <p>Feels like: {feels_like} </p>
//        <p>Fahrenheit: {mainTemp * 1.8 + 32}</p> 
//        <p>Feels Like: {feels_like * 1.8 + 32}</p> 
//        <p>Lools Like: {description}</p>
       
//         </div>
//         )
// }


// const WeatherComp = () => {
//     const [data, setData] = useState([]);
//     const [fetchingData, setFetchingData] = useState(true);
//     const [feels_like,setFeelsLike] = useState('');
//     const [mainTemp,setMainTemp] = useState('');
//     const [description,setDescription] = useState('');
//     const [name, setName] = useState('')


// useEffect(() => {
//     const url = 'api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=a68142f16f5a91861dee80d5b3842040';
  
//     fetch(url)
//     .then(res => res.json())
//     .then(weatherData => {
//         console.log(weatherData);
//         setData(weatherData);
//         setFetchingData(false);
//         setName(data.name)
//         setFeelsLike(data.main.feels_like);
//         setMainTemp(data.main.temp);
//         setDescription(data.weather[0].description);
//     })
//     .catch(e => {
//         console.log(e);
//     })
// }, [])

// return(
//     <div className='main'>
//         <div className='mainDiv'>
//             <h2>WeatherMap Api</h2>
//             {!fetchingData ? <h3>C </h3>: null}
//             {! fetchingData ? <h3>F</h3> : null}
//             <h3>{name}</h3>
//             <p>Celsius: {Math.round(mainTemp)}</p>  
//             <p>Feels like: {feels_like} </p>
//             <p>Fahrenheit: {mainTemp * 1.8 + 32}</p> 
//              <p>Feels Like: {feels_like * 1.8 + 32}</p> 
//             <p>Lools Like: {description}</p>
//         </div>
//     </div>
// )

// }

// const WeatherComp = (props) => {
//     const [weatherData, setWeatherData] = useState("");
//     const [mainTemp,setMainTemp] = useState('');
//     const [description,setDescription] = useState('');
//     const [name, setName] = useState('')



//     useEffect(() => {
//         let fetchData = async () => {
//             if (lon && lat) {
//                 try {
//                 weatherData.current = "Gathering data";
//                 console.log(weatherData.current);
//                 let response = await fetch(`api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&appid=a68142f16f5a91861dee80d5b3842040`);
//                 setWeatherData(response.url);
//                 console.log(weatherData);
              
               
//                 setName(weatherData.name)
//                 setMainTemp(weatherData.main.temp);
//                 setDescription(weatherData.weather[0].description);
//                 console.log(weatherData.current);
//                 } catch(err) {
//                     console.log(err)
//                 }

//             }
//         }
//         fetchData()
//     }, [lat, lon, weatherData])

//     return(
//         <div>
//             <hr />
//             <h2>WeatherMap Api</h2>
//             {(lon && lat) ?
//            <h3>City: {name}
//            <br/>
//            Celsius: {Math.round(mainTemp)}
//            <br/>
//            Fahrenheit: {mainTemp * 1.8 + 32}
//            <br/>
//            Lools Like: {description}
//            </h3>
        
  

//             : <p>Waiting....</p>
//             }
//             <hr/>
//         </div>
//     )
// }

const WeatherComp = (props) => {
 //const apiKey = 'a68142f16f5a91861dee80d5b3842040'
 const baseURL = `api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=a68142f16f5a91861dee80d5b3842040`;

 
    const [mainTemp,setMainTemp] = useState('');
    const [description,setDescription] = useState('');
    const [name, setName] = useState('')

   
 
const fetchData = () => {
    fetch(baseURL)
    .then(res => res.json())
    .then(weatherData => {
        
    setName(weatherData.name);
    setMainTemp(weatherData.main.temp);
    setDescription(weatherData.weather[0].description);
    console.log(weatherData)

    })
}

return(
    <div>
        <h2>WeatherMap Api</h2>
        <button onClick={fetchData}>Weather in your area</button>
        <h3>City: {name} </h3>
        <h4>Tempature (Celsius): {mainTemp}</h4>
        <h4>Tempature (Fahrenheit): {mainTemp * 1.8 + 32}</h4>
        <h4>Looks like: {description}</h4>
    </div>
)}

    



export default WeatherComp;
