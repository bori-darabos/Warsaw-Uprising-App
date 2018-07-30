import React from 'react';

class Menu extends React.Component{

  render(){
    return (
        
        <nav style={{
            height: '92vh',
            width: '20vw',
            backgroundColor: '#000',
            position: 'absolute',
            top: '8vh',
            right: '0',
            zIndex: '999'
        }}>

            <input onChange={(e) => this.props.search(e.target.value)} type='text' placeholder='Search...' style={{
                background: 'none',
                border: 'none',
                width: '90%',
                height: '30px',
                marginTop: '10px',
                borderBottom: '1px solid red',
                color: '#fff'
            }}/>
            
        </nav>

    );
  }
  
}

export default Menu;