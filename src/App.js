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

    openedInfoWindow: []

  }

  openInfoWindow = (name, lat, lng) => {
    this.setState({openedInfoWindow: [name, lat, lng]})
  }

  closeInfoWindow = () => {
    this.setState({openedInfoWindow: []})
  }

  render() {
    return (
      <div className="App">

        <Header/>

        <Menu/>

        <MapContainer
          style = {mapStyle}
          locations = {this.state.locations}
          openedInfoWindow = {this.state.openedInfoWindow}
          openInfoWindow = {this.openInfoWindow}
          logSomething = {this.logSomething}
          closeInfoWindow = {this.closeInfoWindow}
        />
      </div>
    );
  }
}

export default App
