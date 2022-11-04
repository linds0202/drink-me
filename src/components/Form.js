import React from "react"

const Form = (props) => {
    return (
        <form onSubmit={ props.getDrink }>
            <input type="text" name="drinkName"/>
            <button>Search</button>
        </form>
    )
}

export default Form