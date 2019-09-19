import React from "react";

// This is a try-out map Component running on free API. It doesn't allow much functionality and will be eventually replaced by more advanced paid API

let search = "Casablanca, Milwaukee"

function MapG() {

  const src="https://www.google.com/maps/embed/v1/place?q="+ search + "&key="+ process.env.REACT_APP_API_KEY
  return (
    <div className ="map">
      <iframe width="600" height="450" frameBorder="0" stylename="border:0"
      src={src} allowFullScreen title="map"></iframe>
    </div>
  );
}
  
export default MapG;