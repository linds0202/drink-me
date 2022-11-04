import React from "react"

const Form = (props) => {
    return (
        <form onSubmit={ props.getDrink } style={{marginBottom:"2rem"}}>
            <input className="form__input" type="text" name="drinkName"/>
            <button className="form__button">Search</button>
        </form>
    )
}

export default Form