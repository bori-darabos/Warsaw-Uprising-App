import React from 'react';
import './Menu.css'
class Menu extends React.Component{

  render(){
    return (
        
        <nav>

            <input onChange={(e) => this.props.search(e.target.value)} type='text' placeholder='Search...'/>

            <ul onClick={this.props.toggleMenuVisibility}>
                {this.props.chosenLocations.map(location => (
                    <li onClick={()=>this.props.openInfoWindow(location.name, location.lat, location.lng, location.nameForWikiURL)} key={location.id}>{location.name}</li>
                ))}
            </ul>    
            
        </nav>

    );
  }
  
}

export default Menu;