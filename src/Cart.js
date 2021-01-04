import React from 'react';
import CartItem from './CartItem';
import './index.css';



class Cart extends React.Component {
    render() {
        const selected = this.props.selected
        return (
            <>
            {Object.keys(selected).map((feature, idx) => (
                <CartItem 
                 key={feature + '-' + idx}
                 feature={feature}
                 selectedOptionName={selected[feature].name}
                 selectedOptionCost={selected[feature].cost} />
               )
             )
            }
            </>
    )};  
}

export default Cart;