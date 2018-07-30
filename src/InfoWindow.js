import React from 'react';

class InfoWindow extends React.Component{

  render(){
    return (
        <div style={{
            width: '200px',
            height: '100px',
            backgroundColor: '#000',
            position: 'absolute',
            transform: 'translate(-50%, -115%)'
        }}>
  
        <h2 style={{color: 'red'}}>{this.props.name}</h2>
        <button onClick={this.props.closeInfoWindow}>Close</button>
  
        </div>
      );
  }
  
}

export default InfoWindow;