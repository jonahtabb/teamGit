import React, {useState, useEffect, useRef} from 'react';
import LoadingAnimation from './assets/loading_spinner.svg'

const DisplayImage = ({
    imageZoom,
    nasaImageUrl,
    lon,
    lat,
    zoomIn,
    zoomOut }) => {

    function zoomOutButton() {
        if (imageZoom <  .065){
            return <button onClick={zoomOut} zoom-state={imageZoom}>Zoom Out</button>
        }
    }

    function zoomInButton() {
        if (imageZoom >  .025){
            return <button onClick={zoomIn}>Zoom In</button>
        }
    }

    return (
        <>
        {(lon && lat) ?
            ({nasaImageUrl}) ?
                    <>
                    <img src={nasaImageUrl} width="300px" alt="Satellite View of Earth" />
                    {zoomInButton()}
                    {zoomOutButton()}
                    </>
                    :
                    <object type="image/svg+xml" data={LoadingAnimation}>svg animation </object>
        : <h2>Waiting on Location Data...</h2> 
        } 
        </>
    )

}

const NasaComp = (props) => {

    const [nasaImageUrl, setNasaImageUrl] = useState(null);
    const imageStatus = useRef("Waiting on Location Data...");
    const [imageZoom, setImageZoom] = useState(.025)

    let lon = props.longitude;
    let lat = props.latitude;

    function zoomOut() {
        setImageZoom(imageZoom+.01);
        console.log(`imageZoom = ${imageZoom}`);
    }

    function zoomIn() {
        setImageZoom(imageZoom-.01)
        console.log(`imageZoom = ${imageZoom}`);

    }

    async function fetchPhoto() {

        if (lon && lat) {
            try {
                imageStatus.current = "In Progress --> Fetching Satellite Image";
                console.log(imageStatus.current);
                let response = await fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&dim=${imageZoom}&api_key=WDaMISKiIHQV2YYCDwyVNYtCXWWTcJ8zFmcholle`, {method: 'GET'})
                // console.log(response)
                // console.log(response.url)
                imageStatus.current = "Complete --> Satellite Image Fetched";
                setTimeout(()=> {
                    setNasaImageUrl(response.url)
                }, 500)

                console.log(imageStatus.current);
            } catch(err) {
                console.log(err)
            }

        }        
    }

    useEffect(() => {
        fetchPhoto()
    }, [lat, lon, imageZoom])

    return (
        <div>
            <hr />
            <h2>NASA Earth Api</h2>
            
            <DisplayImage
            imageZoom={imageZoom}
            nasaImageUrl={nasaImageUrl}
            lon= {props.longitude}
            lat={props.longitude}
            zoomIn={zoomIn}
            zoomOut={zoomOut}
            />
            <hr />
        </div>
    )
}

export default NasaComp