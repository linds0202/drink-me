import React from "react"

import { Link } from "react-router-dom"

class Drink extends React.Component {
    
    state = {
        activeDrink: []
    }
    
    componentDidMount = async () => {
        
        const id = this.props.location.state.drink
        const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        const result = await request.json()

        this.setState({ activeDrink: result.drinks[0] })
        //console.log(this.state.activeDrink)
        
    }

    

    render() {
        const drink = this.state.activeDrink
        console.log(drink)
        //create array of ingredients
        let ingredients = []
        for (let n = 1; n < 25; n++) {
            let ingredient = 'strIngredient' + n.toString()
            let measure = 'strMeasure' + n.toString()
            if (drink[ingredient] !== null) {
                ingredients.push([drink[measure],  drink[ingredient]])
            } else {
                break
            }
        }

        return (
            <div className="container">
                { drink.length !== 0 &&
                    <div className="active-drink">
                        <img className="active-drink__img" src={drink.strDrinkThumb} alt={drink.strDrink} />
                        <h3 className="active-drink__title">{drink.strDrink}</h3>
                        <h4 className="active-drink__glass">Type of glass: <span>{drink.strGlass}</span></h4>
                        <h6>Ingredients: </h6>
                        <ul>
                            { ingredients.map(item => {
                                return (
                                    <li key={item}><span>{item[0]}</span><span>    {item[1]}</span></li>
                                ) 
                            })}
                        </ul>
                        <h6>Directions: </h6>
                        <p>{drink.strInstructions}</p>

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
