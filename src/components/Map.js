import React, { useState } from "react";
import ReactMapGL, {FlyToInterpolator} from "react-map-gl";
import * as d3 from 'd3-ease';

const dummyCities = [
    {
        city: "Delhi",
        population: "1.9 crores",
        lng: 77.1025,
        lat: 28.7041
    },
    {
        city: "Kolkata",
        population: "1.49 crores",
        lng: 88.3639,
        lat: 22.5726
    },
    {
        city: "Mumbai",
        population: "2.06 crores",
        lng: 72.8777,
        lat: 19.0760
    }
]


const Map = (props) => {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  const setMap = () => {
    console.log("Map", props.city);
      setViewport({
          ...viewport,
        longitude: dummyCities[props.city].lng,
        latitude: dummyCities[props.city].lat,
        zoom: 14,
        transitionDuration: 5000,
        transitionInterpolator: new FlyToInterpolator(),
        transitionEasing: d3.easeCubic
      })
  }

  return (
    <div>
        {props.city&&<h2 className="population">Population- {dummyCities[props.city].population}</h2>}
      <ReactMapGL
        mapboxApiAccessToken={
          "pk.eyJ1Ijoia2FydGlrYXlkMjMiLCJhIjoiY2tyZXlwZ2R2MHN4MDJ2b2U1Nnl4dHc1aCJ9.vER52XGnCgXJfP-ILKzjtA"
        }
        {...viewport}
        width="500px"
        height="400px"
        onViewportChange={(viewport) => setViewport(viewport)}
        style={{ margin: "auto", marginTop: "50px" }}
      />
      <button onClick={setMap} className="btn-submit">Click to see on map</button>
    </div>
  );
};

export default Map;
