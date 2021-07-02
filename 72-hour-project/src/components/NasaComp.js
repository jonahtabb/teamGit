import React, {useState, useEffect, useRef} from 'react';

const NasaComp = (props) => {

    const [nasaImageUrl, setNasaImageUrl] = useState("null");
    const imageStatus = useRef("Waiting on Location Data...");

    let lon = props.longitude;
    let lat = props.latitude;

    useEffect(() => {
        let fetchPhoto = async () => {
            // console.log("fetch photo initial")
            if (lon && lat) {
                try {
                    imageStatus.current = "In Progress --> Fetching Satellite Image";
                    console.log(imageStatus.current);
                    let response = await fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&dim=0.04&api_key=WDaMISKiIHQV2YYCDwyVNYtCXWWTcJ8zFmcholle`, {method: 'GET'})
                    // console.log(response)
                    // console.log(response.url)
                    setNasaImageUrl(response.url);
                    imageStatus.current = "Complete --> Satellite Image Fetched";
                    console.log(imageStatus.current);
                } catch(err) {
                    console.log(err)
                }
    
            }        
        }
        fetchPhoto()

    }, [lat, lon])


    return (
        <div>
            <hr />
            <h2>NASA Earth Api</h2>
            {(lon && lat) ?
            <img src={nasaImageUrl || "#"} width="400px" alt="Satellite View of Earth" /> 
            : <h2>Waiting on Location Data...</h2> 
            } 
            <hr />
        </div>
    )
}

export default NasaComp