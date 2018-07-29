import React from 'react';
import logo from './logo.svg';
import './App.css';
import MapContainer from './MapContainer';
import mapStyle from './mapStyle.json'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MapContainer
          style = {mapStyle}
        />
      </div>
    );
  }
}

export default App
