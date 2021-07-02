import './App.css';
import { useState } from 'react'
import TestComp from './components/TestComp';

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
      <button onClick={getLocation}>Get Location</button>
      <h1>Your Current Coordinates:</h1>
      <p>{status}</p>
      {latitude && <p>Latitude: {latitude}</p>}
      {longitude && <p>Longitude: {longitude}</p>}
      <br />
      <TestComp latitude={latitude} longitude={longitude} />
    </div>
  );



}

export default App;
