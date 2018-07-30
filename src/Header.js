import React from 'react';
import menu from './menu.svg'

class Header extends React.Component{

  render(){
    return (
        <header style={{
            width: '100%',
            height: '8vh',
            backgroundColor: '#000',
            display: 'flex'
            
        }}>
  
        <button style={{width: '50px', height:'100%', background: 'none', border: 'none', cursor: 'pointer', marginLeft: '10px'}}>
          <img src={menu} alt='' style={{width: '100%', height:'100%'}}/>
        </button>

        <h1 style={{
            fontSize: '18px',
            color: 'red',
            margin: 'auto'

            }}>
            Warsaw Uprising - the monuments
        </h1>
  
        </header>
      );
  }
  
}

export default Header;