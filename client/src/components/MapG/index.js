import React from "react";

function MapG(props) {

  const src="https://www.google.com/maps/embed/v1/search?q="+ props.search + "&key="+ process.env.REACT_APP_API_KEY
  return (
    <div className ="map">
      <iframe width="600" height="450" frameBorder="0" stylename="border:0"
      src={src} allowFullScreen title="map"></iframe>
    </div>
  );
}
  
export default MapG;