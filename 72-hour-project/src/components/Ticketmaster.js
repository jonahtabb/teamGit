import React, {useState, useEffect} from 'react'

const Ticketmaster = (props) => {

    //const apiKey = 'TF6CCu0TfrfJ1sSGqAsRdu1AD6R3GtvW'
    const baseURL = `https://app.ticketmaster.com/discovery/v2/events?apikey=TF6CCu0TfrfJ1sSGqAsRdu1AD6R3GtvW`

 

    const [resultsImg, setResultsImg] = useState(null)

    const fetcher = () => {
        fetch(baseURL)
            .then(res => res.json())
            .then(json => {
                //let eventsArray = json._embedded.events
                //console.log(eventsArray) //distance or images
                setResultsImg(json._embedded.events[1].images[1].url)


            })
    }
    
    return(
        <div>
            <button onClick={fetcher}>See events near you</button>
            <img src={resultsImg} />
        </div>
    )
}

export default Ticketmaster