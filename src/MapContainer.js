import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.js'
import InfoWindow from './InfoWindow.js';
 
class MapContainer extends React.Component {
  static defaultProps = {
    zoom: 13
  };
 
  render() {
    return (
      
      <div role="application" style={{ height: '92vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD9nEz4ZJK4zM41jMmz8nEXOWnia9bw-Qc' }}
          center={this.props.center}
          defaultZoom={this.props.zoom}

          options={{ 
            styles: this.props.style
          }}
        >

        {this.props.chosenLocations.length > 0 && this.props.chosenLocations.map(location => (
          <Marker
            key={location.id}
            lat={location.lat}
            lng={location.lng}
            name={location.name}
            id={location.id}
            wikiURL={location.nameForWikiURL}
            chosenLocations = {this.props.chosenLocations}
            openedInfoWindow={this.openedInfoWindow}
            openInfoWindow = {this.props.openInfoWindow}
            getArticle = {this.props.getArticle}
        />
        ))}

        {this.props.openedInfoWindow.length > 0 &&(
          <InfoWindow
          lat={this.props.openedInfoWindow[1]}
          key={this.props.openedInfoWindow[0]}
          lng={this.props.openedInfoWindow[2]}
          name={this.props.openedInfoWindow[0]}
          closeInfoWindow = {this.props.closeInfoWindow}
          theArticle = {this.props.theArticle}
          openArticle = {this.props.openArticle}
        />
        )}

        </GoogleMapReact>
      </div>
    );
  }
}
 
export default MapContainer;