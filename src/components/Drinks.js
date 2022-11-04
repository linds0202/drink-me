import React from "react"

import { Link } from "react-router-dom"

const Drinks = (props) => {
    return (
        <div className="container">
            <div className="row">
            { props.drinks.map((drink) => {
                return (
                    <div key={ drink.idDrink } className="col-md-4" style={{marginBottom: "2rem"}}>
                        <div className="drinks__box">
                            <img 
                                className="drinks__box-img" 
                                src={ drink.strDrinkThumb } 
                                alt={ drink.strDrink }
                            />
                            <div className="drinks__text">
                                <h5>
                                    { drink.strDrink.length < 20 ? `${drink.strDrink}` : `${drink.strDrink.substring(0, 25)}...` }
                                </h5>
                            </div>
                            <button className="drink_buttons">
                                <Link to={{
                                    pathname: `/drink/${drink.idDrink}`,
                                    state: {drink: drink.idDrink}  
                                }}>View Drink</Link>
                            </button>
                        </div>
                    </div>
                )
            }) }
            </div>
        </div>
    )
}

export default Drinks
