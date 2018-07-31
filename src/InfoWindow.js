import React from 'react';
import closeIcon from './close.svg'
import Article from './Article.js'

class InfoWindow extends React.Component{

  render(){
    
    return (
        <div style={{
            width: '400px',
            height: '200px',
            backgroundColor: '#000',
            position: 'absolute',
            transform: 'translate(-50%, -115%)',
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

        <h2 style={{color: 'red', marginTop: '0'}}>{this.props.name}</h2>

        <article dangerouslySetInnerHTML={{__html: this.props.theArticle[0] }} style={{color: '#fff', overflow: 'auto', maxHeight: '120px', margin: '10px 5px'}}>
          
        </article>

        </div>

        

      );
  }
  
}

export default InfoWindow;