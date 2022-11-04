import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Drinks from './components/Drinks'

class App extends Component {
  
  state = {
    drinks: []
  }

  getDrink = async (e) => {

    const drinkName = e.target.elements.drinkName.value

    e.preventDefault()

    const api_call = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)
    const data = await api_call.json()

    this.setState({ drinks: data.drinks })
    console.log(this.state.drinks)
  }

  componentDidMount = () => {
    const json = localStorage.getItem("drinks")
    const drinks = JSON.parse(json)
    this.setState({ drinks })
  }

  componentDidUpdate = () => {
    const drinks = JSON.stringify(this.state.drinks)
    localStorage.setItem("drinks", drinks)
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Drink Search</h1>
        </header>
        <Form getDrink={ this.getDrink }/>
        <Drinks drinks={this.state.drinks} />
      </div>
    );
  }
}

export default App;