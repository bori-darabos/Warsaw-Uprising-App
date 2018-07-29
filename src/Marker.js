import React from 'react';
import MarkerPin from './placeholder.png';

class Marker extends React.Component {

  

  render(){
    return (
      <div title={this.props.name} style={{ position: 'absolute', transform: 'translate(-50%, -100%)', cursor: 'pointer' }}>
        <img onClick={()=>this.props.openInfoWindow(this.props.name, this.props.lat, this.props.lng)} src={MarkerPin} alt={`Location of ${this.props.name}`}/>
        
      </div>
    );
  }
  
}

export default Marker;