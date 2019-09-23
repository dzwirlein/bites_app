import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
import Marker from "../Marker";

class MapMarkers extends Component {

  static defaultProps = {
    center: {
      lat: 43.0389,
      lng: -87.9065
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
         {this.props.lovedplaces.map(place => (
            <Marker
                color="green"
                key={place._id}
                name={place.name}
                lat={place.location.lat}
                lng={place.location.lng}
            />
        ))}
        {this.props.hatedplaces.map(place => (
            <Marker
                color="red"
                key={place._id}
                name={place.name}
                lat={place.location.lat}
                lng={place.location.lng}
            />
        ))}
        </GoogleMapReact>
      </div>
    )
  }
}
 
export default MapMarkers;