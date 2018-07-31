import React from 'react';
import closeIcon from './close.svg'
import './InfoWindow.css'


class InfoWindow extends React.Component{

  render(){

    return (
        <div aria-label="Info about location" className='info-window'>

          <button aria-label="Close" onClick={this.props.closeInfoWindow} style={{
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

          <h2 aria-label="location's name">{this.props.name}</h2>

          <article dangerouslySetInnerHTML={{__html: this.props.theArticle[0] }}>
      
          </article>

          <span style={{color: 'red'}}>This text is fetched from Wikipedia.</span>

        </div>

        

      );
      
      
  }
  
}

export default InfoWindow;