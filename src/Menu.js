import React from 'react';
import './Menu.css'
class Menu extends React.Component{

  render(){
    return (
        
        <nav>

            <input aria-label="search" onChange={(e) => this.props.search(e.target.value)} type='text' placeholder='Search...'/>

            <ul aria-label='list of locations' onClick={this.props.toggleMenuVisibility}>
                {this.props.chosenLocations.map(location => (
                    <li key={location.id}>
                        <button onClick={()=>this.props.openInfoWindow(location.name, location.lat, location.lng, location.nameForWikiURL)}>{location.name}</button>
                    </li>
                ))}
            </ul>    
            
        </nav>

    );
  }
  
}

export default Menu;