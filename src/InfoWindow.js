import React from 'react';
import closeIcon from './close.svg'

class InfoWindow extends React.Component{

  render(){
    return (
        <div style={{
            width: '200px',
            height: '100px',
            backgroundColor: '#000',
            position: 'absolute',
            transform: 'translate(-50%, -115%)',
            // display: 'flex'
        }}>

        <button onClick={this.props.closeInfoWindow} style={{
          background: 'none', 
          border: 'none', 
          width: '30px', 
          height: '30px', 
          position: 'relative',
          left: '50%',
          transform: 'translate(-50%, 0)',  
          cursor: 'pointer'}}>

          <img src={closeIcon} alt="" style={{width: '100%', height: '100%'}} />

        </button>

        <h2 style={{color: 'red'}}>{this.props.name}</h2>
        
  
        </div>
      );
  }
  
}

export default InfoWindow;