import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.js'
 
class MapContainer extends React.Component {
  static defaultProps = {
    center: {
      lat: 52.229676,
      lng: 21.012229
      
    },
    zoom: 13
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD9nEz4ZJK4zM41jMmz8nEXOWnia9bw-Qc' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}

          options={{ 
            styles: this.props.style
          }}
        >

        {this.props.locations.map(location => (
          <Marker
            key={location.id}
            lat={location.lat}
            lng={location.lng}
            name={location.name}
            location={location}
          />
        ))}
        

        </GoogleMapReact>
      </div>
    );
  }
}
 
export default MapContainer;