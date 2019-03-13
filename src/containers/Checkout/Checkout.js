import React, { Component } from 'react'
import classes from './Checkout.css'

import CheckoutSummery from '../../components/Order/CheckoutSummery/CheckoutSummery'

class Checkout extends Component {

    state = {
        ingredients: {
            meat: 1,
            salad: 1,
            cheese: 1,
            bacon: 1
        }
    }

    onCheckoutCancelled = () => {
        this.props.history.goBack()
    }

    onCheckoutContinued = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render () {
        return (
            <div>
                <CheckoutSummery 
                    ingredients={this.state.ingredients}
                    onCheckoutCancelled={this.onCheckoutCancelled}
                    onCheckoutContinued={this.onCheckoutContinued}/>
            </div>
        )
    }
}

export default Checkout