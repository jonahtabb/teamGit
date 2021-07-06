import React, {useState, useEffect, useRef} from 'react';
import LoadingAnimation from './assets/loading_spinner.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'reactstrap'

const DisplayImage = ({
    imageZoom,
    nasaImageUrl,
    lon,
    lat,
    zoomIn,
    zoomOut }) => {

    function zoomOutButton() {
        if (imageZoom <  .065){
            return <Button className="custom-button" onClick={zoomOut} zoom-state={imageZoom}>Zoom Out</Button>
        }
    }

    function zoomInButton() {
        if (imageZoom >  .025){
            return <Button className="custom-button" onClick={zoomIn}>Zoom In</Button>
        }
    }

    return (
        <>
        {(lon && lat) ?
            ({nasaImageUrl}) ?
                    <div className="row">
                        <div className="col-12">
                            <img src={nasaImageUrl} width="300px" alt="Satellite View of Earth" />
                        </div>
                        <div className="col-12 my-3">{zoomInButton()}</div>
                        <div className="col-12 my-3">{zoomOutButton()}</div>
                    </div>
                    :
                    <object type="image/svg+xml" data={LoadingAnimation}>svg animation </object>
        : <p>Waiting on Location Data...</p> 
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
        <div className="card my-4">
            <h2>NASA Earth Api</h2>
            
            <DisplayImage
            imageZoom={imageZoom}
            nasaImageUrl={nasaImageUrl}
            lon= {props.longitude}
            lat={props.longitude}
            zoomIn={zoomIn}
            zoomOut={zoomOut}
            />
        </div>
    )
}

export default NasaComp