
import { useState } from 'react'
import TestComp from './components/TestComp';
import NasaComp from './components/NasaComp';
import WeatherComp from './components/WeatherComp';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'reactstrap'
import './App.css';


function App() {
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [status, setStatus] = useState(null)



  const getLocation = (position) => {
    if (!navigator.geolocation) {
      setStatus('Location features not available')
    } else {
      setStatus('Locating...')
      navigator.geolocation.getCurrentPosition(position => {
        setStatus(null)
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        console.log(position)
      }, () => {
        setStatus('Unable to get location data')
      })
    }

  }
  return (
    <div className="App">
      <div className="container p-3 custom-container">
        <div className="card">
          <h1>You Are Here!</h1>
          <Button className="custom-button" onClick={getLocation}>Where?</Button>
          <p>{status}</p>
          {latitude && <p>Latitude: {latitude}</p>}
          {longitude && <p>Longitude: {longitude}</p>}
        </div>
        <NasaComp latitude={latitude} longitude={longitude} />
        <br />
        <WeatherComp latitude={latitude} longitude={longitude} />

      </div>

 
    </div>
  );



}

export default App;
