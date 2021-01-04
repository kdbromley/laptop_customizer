import React from 'react';
import './index.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class CartItem extends React.Component {
    render()  {
        return (
            <div className="summary__option" key={this.props.featureHash}>
            <div className="summary__option__label">{this.props.feature} </div>
            <div className="summary__option__value">{this.props.selectedOptionName}</div>
            <div className="summary__option__cost">
              {USCurrencyFormat.format(this.props.selectedOptionCost)}
            </div>
          </div>
        )
    }
}

export default CartItem;