import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '50%'
};

export class MapContainer extends Component {
  render() {

    return (
      <div>
        <h6>In Case of Emergrncy</h6>
        <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 19.160473,
            lng: 77.306946
          }
      
        }
      />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB9tf0LTQh512Vu_y-YKZLU1pLxei6AMJ0'
})(MapContainer);
