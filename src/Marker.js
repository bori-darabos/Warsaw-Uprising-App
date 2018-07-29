import React from 'react';
import MarkerPin from './placeholder.png';

const Marker = (props) => {

  return (
      <div title={props.name} style={{ position: 'absolute', transform: 'translate(-50%, -50%)', cursor: 'pointer' }}>
        <img src={MarkerPin} alt={`Location of ${props.name}`}
        
        />
      </div>
    );
}

export default Marker;