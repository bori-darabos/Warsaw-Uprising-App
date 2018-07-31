import React from 'react';
import closeIcon from './close.svg'

class Article extends React.Component{

  render(){
    return (

        <div style={{
            position:'absolute',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            backgroundColor: 'green',
            zIndex: '9999999'
        }}>
            <button onClick={this.props.closeArticle} style={{
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
            <h3 style={{color: 'white'}}>{this.props.title}</h3>
            <article>Article</article>
        </div>

      );
  }
  
}

export default Article;