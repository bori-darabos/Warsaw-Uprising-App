import React from 'react';
import MarkerPin from './placeholder.png';

class Marker extends React.Component {

  render(){
    return (
      <div className="marker" id={`${this.props.id}`} title={this.props.name} style={{ position: 'absolute', transform: 'translate(-50%, -100%)', cursor: 'pointer' }}>
        <img onClick={()=>this.props.openInfoWindow(this.props.name, this.props.lat, this.props.lng, this.props.wikiURL, this.props.id)} src={MarkerPin} alt={`Location of ${this.props.name}`}/>
      </div>
    );
    
  }
  
}

export default Marker;