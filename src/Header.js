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

        <h1 style={{
            fontSize: '18px',
            color: 'red',
            margin: 'auto',
            marginLeft: '10px',
            }}>

            <span style={{color: 'white', display:'block'}}>Warsaw</span>
            <span>Uprising</span>

        </h1>

        <button style={{width: '50px', height:'100%', background: 'none', border: 'none', cursor: 'pointer', marginLeft: '10px'}}>
          <img src={menu} alt='' style={{width: '100%', height:'100%'}}/>
        </button>

        </header>
      );
  }
  
}

export default Header;