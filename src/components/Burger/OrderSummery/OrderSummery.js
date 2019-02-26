import React from 'react'
import classes from './OrderSummery.css'

import Aux from '../../../hoc/Aux'

const orderSummery = (props) => {
    const ingredientSummery = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            )
        })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A deliciuos burger with the following ingredients</p>
            <ul>
                {ingredientSummery}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    )
}

export default orderSummery