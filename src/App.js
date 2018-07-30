import React from 'react';
import './App.css';
import MapContainer from './MapContainer';
import mapStyle from './mapStyle.json'
import Header from './Header';
import Menu from './Menu.js'

class App extends React.Component {

  state = {
    locations: [
      {
        name: 'Monument to the Heroes of Warsaw',
        id: 'mon1',
        lat: 52.245833,
        lng: 21.009167
      },
      {
        name: 'The Little Insurrectionist',
        id: 'mon2',
        lat: 52.249722,
        lng: 21.009444
      },
      {
        name: 'Warsaw Uprising Monument',
        id: 'mon3',
        lat: 52.249444,
        lng: 21.005833
      },
      {
        name: 'Monument to Victims of the Wola Massacre',
        id: 'mon4',
        lat: 52.238694,
        lng: 20.983514
      },
      {
        name: 'Warsaw Uprising Museum',
        id: 'mon5',
        lat: 52.232222,
        lng: 20.980833
      }
    ],

    openedInfoWindow: [],

    isMenuVisible: false,

    searchSomething: false,

    chosenLocations: []

  }

  openInfoWindow = (name, lat, lng) => {
    this.setState({openedInfoWindow: [name, lat, lng]})
  }

  closeInfoWindow = () => {
    this.setState({openedInfoWindow: []})
  }

  toggleMenuVisibilty = () => {
    if(this.state.isMenuVisible){
      this.setState({isMenuVisible: false})
    } else {
      this.setState({isMenuVisible: true})
    }
  }



  search = (query) => {
    if(query){
      this.setState({searchSomething: true})
    } else {
      this.setState({searchSomething: false})
    }
    let locationsToShow = []
    if(this.state.searchSomething){
     
      this.state.locations.map(function(location){
        if(location.name.includes(query)){
          locationsToShow.push(location)
          
        } else {
          console.log('nie ma')
        }
      }, this)
    } else {
      this.setState({chosenLocations: this.state.locations})
    }
    if(locationsToShow.length > 0) {
      this.setState({chosenLocations: locationsToShow});
    }
    
  }

 componentDidMount(){
   this.search();
 }

  render() {
    return (
      <div className="App">

        <Header
          toggleMenuVisibility = {this.toggleMenuVisibilty}
        />

        {this.state.isMenuVisible && (
          <Menu
            search={this.search}
          />
        )}

        <MapContainer
          style = {mapStyle}
          locations = {this.state.locations}
          openedInfoWindow = {this.state.openedInfoWindow}
          openInfoWindow = {this.openInfoWindow}
          logSomething = {this.logSomething}
          closeInfoWindow = {this.closeInfoWindow}
          chosenLocations = {this.state.chosenLocations}
        />
      </div>
    );
  }
}

export default App
