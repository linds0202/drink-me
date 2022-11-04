import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'

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
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Drink Search</h1>
        </header>
        <Form getDrink={ this.getDrink }/>
        { this.state.drinks.map((drink) => {
          return <p key={drink.idDrink}>{ drink.strDrink }</p>
        }) }
      </div>
    );
  }
}

export default App;