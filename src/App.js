import React from 'react';
import './App.css';
import MapContainer from './MapContainer';
import mapStyle from './mapStyle.json'
import Header from './Header';
import Menu from './Menu.js'
import InfoWindow from './InfoWindow';
import Article from './Article.js'

class App extends React.Component {

  state = {
    locations: [
      {
        name: 'Monument to the Heroes of Warsaw',
        id: 'mon1',
        lat: 52.245833,
        lng: 21.009167,
        nameForWikiURL: 'Monument_to_the_Heroes_of_Warsaw',
        article: ''
      },
      {
        name: 'The Little Insurrectionist',
        id: 'mon2',
        lat: 52.249722,
        lng: 21.009444,
        nameForWikiURL: 'Ma%C5%82y_Powstaniec',
        article: ''
      },
      {
        name: 'Warsaw Uprising Monument',
        id: 'mon3',
        lat: 52.249444,
        lng: 21.005833,
        nameForWikiURL: 'Warsaw_Uprising_Monument',
        article: ''
      },
      {
        name: 'Monument to Victims of the Wola Massacre',
        id: 'mon4',
        lat: 52.238694,
        lng: 20.983514,
        nameForWikiURL: 'Monument_to_Victims_of_the_Wola_Massacre',
        article: ''
      },
      {
        name: 'Warsaw Uprising Museum',
        id: 'mon5',
        lat: 52.232222,
        lng: 20.980833,
        nameForWikiURL: 'Warsaw_Uprising_Museum',
        article: ''
      }
    ],

    openedInfoWindow: [],

    isMenuVisible: false,

    searchSomething: false,

    chosenLocations: [],

    theArticle: '',

  }

  // This function open correct InfoWindow
  openInfoWindow = (name, lat, lng) => {
    this.setState({openedInfoWindow: [name, lat, lng]})
  }

  closeInfoWindow = () => {
    this.setState({openedInfoWindow: []})
  }

  // Show / hide menu 
  toggleMenuVisibilty = () => {
    if(this.state.isMenuVisible){
      this.setState({isMenuVisible: false})
    } else {
      this.setState({isMenuVisible: true})
    }
  }

  

  search = (query) => {
    // This function can be invoked with an argument(query) or without. We can check this in this.state.searchSomething
    if(query){
      this.setState({searchSomething: true})
    } else {
      this.setState({searchSomething: false})
    }

    //We'll use this array to store locations that match the search results
    let locationsToShow = []

    //If function was invoked with argument(query)
    if(this.state.searchSomething){
     
      //Map trough all locations and...
      this.state.locations.map(function(location){
        if(location.name.search(new RegExp(query, "i")) >= 0){
          //...if they match to query, add them to the locationsToShow array
          locationsToShow.push(location)

          //If there is no location with provided query remove all markers from the map
        } else {
            this.setState({chosenLocations: []})
        }
      }, this)
    }

    //If function was invoked without an argument... (for example - when the app starts)
    else {
      //...show all locations on the map
      this.setState({chosenLocations: this.state.locations})
    }

    //Save the searched locations in state
    if(locationsToShow.length > 0) {
      this.setState({chosenLocations: locationsToShow});
    }
    
  }


    //This function getting an article about location and save the html code in this.state.theArticle
    getArticle = (nameOfLocation) => {
      
      // We'll use this array to save the article and then pass it to the state 
      let fetchedArticle = []

      //Fetch the datas from Wiki using provided query
      fetch(`https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=extracts&titles=${nameOfLocation}&exintro=1`)

      .then(result => {
        return result.json()
       })

       .then(resultArticle => {

        // Extract the article and save it in fetchedArticle array
        let article = resultArticle.query.pages[Object.keys(resultArticle.query.pages)[0]].extract;
        fetchedArticle.push(article)

       })

       //pass the article to the state
       this.setState({theArticle: fetchedArticle})

    }


  //Call search function to show all markers on the map before user use search functionality 
  componentDidMount(){
    this.search();
  }


  render() {
    return (
      <div className="App">

        {/*Render the Header component*/}
        <Header
          toggleMenuVisibility = {this.toggleMenuVisibilty}
        />

        {/*If menu should be visible render the Menu component*/}
        {this.state.isMenuVisible && (
          <Menu
            search={this.search}
            chosenLocations={this.state.chosenLocations}
            openInfoWindow={this.openInfoWindow}
          />
        )}

        {/* Render the MapContainer component */}
        <MapContainer
          style = {mapStyle}
          locations = {this.state.locations}
          openedInfoWindow = {this.state.openedInfoWindow}
          openInfoWindow = {this.openInfoWindow}
          logSomething = {this.logSomething}
          closeInfoWindow = {this.closeInfoWindow}
          chosenLocations = {this.state.chosenLocations}
          theArticle = {this.state.theArticle}
          getArticle = {this.getArticle}
          openArticle = {this.openArticle}
        />

        

        

      </div>
    );
  }
}

export default App
