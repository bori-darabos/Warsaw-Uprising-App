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

            <ul style={{listStyle: 'none', padding: '0'}} onClick={this.props.toggleMenuVisibility}>
                {this.props.chosenLocations.map(location => (
                    <li onClick={()=>this.props.openInfoWindow(location.name, location.lat, location.lng, location.nameForWikiURL)} key={location.id} style={{color: '#fff', margin: '15px 5px', cursor: 'pointer'}}>{location.name}</li>
                ))}
            </ul>    
            
        </nav>

    );
  }
  
}

export default Menu;