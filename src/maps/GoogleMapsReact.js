import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Polygon, } from 'google-maps-react';


const mapStyles = {
  width: '100%',
  height: '100%'
};

const coords = [
    { lat: -24.6525244, lng: -49.8935202 },
    { lat: -24.6635244, lng: -49.9045202 },
    { lat: -24.6745244, lng: -49.9155202 },
    { lat: -24.6635244, lng: -49.9045202 },
    { lat: -24.6525244, lng: -49.8935202 }
];

const reversedCoords = coords.map( ll => {
  return { lat: ll.lng, lng: ll.lat }
});
export class Maps extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -24.6527377,
            lng: -49.8937037
          }
        }
      >


      <Polygon
            path={reversedCoords}
            //key={1}
            options={{
                fillColor: "#000",
                fillOpacity: 0.4,
                strokeColor: "#000",
                strokeOpacity: 1,
                strokeWeight: 1
            }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBReiWoWGKxq1_9cGgP0HG0S2BfTQIGzaY'
})(Maps);
