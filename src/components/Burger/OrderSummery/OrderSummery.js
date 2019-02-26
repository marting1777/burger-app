import React, { Component } from 'react'

import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

class OrderSummery extends Component {

    componentDidUpdate() {
        console.log('[OrderSummery] DidUpdate')
    }

    render() {
        const ingredientSummery = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
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
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button 
                    btnType="Danger"
                    clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button
                    btnType="Success"
                    clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Aux>
        )
    }
}

export default OrderSummery