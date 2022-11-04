import React from "react"

import { Link } from "react-router-dom"

class Drink extends React.Component {
    
    state = {
        activeDrink: []
    }
    
    componentDidMount = async () => {
        
        const id = this.props.location.state.drink
        console.log(id)
        const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        const result = await request.json()

        this.setState({ activeDrink: result.drinks[0] })
        console.log(this.state.activeDrink)
        
    }

    render() {
        const drink = this.state.activeDrink
        return (
            <div className="container">
                { this.state.activeDrink.length !== 0 &&
                    <div className="active-drink">
                        <img className="active-drink__img" src={drink.strDrinkThumb} alt={drink.strDrink} />
                        <h3 className="active-drink__title">{drink.strDrink}</h3>
                        <h4 className="active-drink__glass">Type of glass: <span>{drink.strGlass}</span></h4>
                        <button className="active-drink__button">
                            <Link to="/" >Return to Home</Link>
                        </button>
                </div>
                }
            </div>
        )
    }
}

export default Drink
