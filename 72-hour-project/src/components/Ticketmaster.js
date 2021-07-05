import React, {useState, useEffect} from 'react'

const Ticketmaster = (props) => {

    //const apiKey = 'TF6CCu0TfrfJ1sSGqAsRdu1AD6R3GtvW'
    const baseURL = `https://app.ticketmaster.com/discovery/v2/events?apikey=TF6CCu0TfrfJ1sSGqAsRdu1AD6R3GtvW&latlong=${props.latitude},${props.longitude}`

    const [resultsImg, setResultsImg] = useState(null)
    const [resultsName, setResultsName] = useState(null)
    const [distance, setDistance] = useState(null)

    const [resultsImg2, setResultsImg2] = useState(null)
    const [resultsName2, setResultsName2] = useState(null)
    const [distance2, setDistance2] = useState(null)


    const [resultsImg3, setResultsImg3] = useState(null)
    const [resultsName3, setResultsName3] = useState(null)
    const [distance3, setDistance3] = useState(null)



    const fetcher = () => {
        fetch(baseURL)
            .then(res => res.json())
            .then(json => {
                let eventsArray = json._embedded.events
                setResultsImg(eventsArray[0].images[0].url)
                setResultsName(eventsArray[0].name)
                setDistance(eventsArray[0].distance)

                setResultsImg2(eventsArray[1].images[0].url)
                setResultsName2(eventsArray[1].name)
                setDistance2(eventsArray[1].distance)

                setResultsImg3(eventsArray[2].images[0].url)
                setResultsName3(eventsArray[2].name)
                setDistance3(eventsArray[2].distance)

                console.log(eventsArray)
    
                


            })
    }
    
    return(
        <div>

            <h1>Closest Events Near You!</h1>

            <button onClick={fetcher}>See events near you</button>
            <h2>{resultsName}</h2>
            <h4>Distance: {distance}</h4>
            <img src={resultsImg} />

            <h2>{resultsName2}</h2>
            <h4>Distance: {distance2}</h4>
            <img src={resultsImg2} />

            <h2>{resultsName3}</h2>
            <h4>Distance: {distance3}</h4>
            <img src={resultsImg3} />
        </div>
    )
}

export default Ticketmaster

