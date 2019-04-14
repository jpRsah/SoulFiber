import React from 'react'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";


export default (props) => {
    const point = {
        lat: 47.265279, 
        lng: 39.864591
    };

    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap
            defaultZoom={18}
            defaultCenter={point}
            >
            <Marker  position={point}/>
        </GoogleMap>
    ));

    return(
        <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA0MiiQ4XO5Eqg-QWrJu9wLyUFZi9Ven8Q&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    )
}