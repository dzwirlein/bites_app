import React from "react";
import { geolocated } from "react-geolocated";

function MapG(props) {

  console.log(props);
  const src="https://www.google.com/maps/embed/v1/search?q="+ props.search + "&key=AIzaSyAFqxY7BC8DKkQ2pEFzMVEcIVC3IF9qaKk"
  return (
    <section className="mt-5 mb-3" id="map-section">
        <div className="container rounded bg-light p-3">
            <div className ="map">
                <iframe width="100%" height="600" frameBorder="0" stylename="border:0"
    src={src} allowFullScreen title="map">
                </iframe>
            </div>
        </div>
    </section>

  );
}
  
export default geolocated({
  positionOptions: {
      enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(MapG);