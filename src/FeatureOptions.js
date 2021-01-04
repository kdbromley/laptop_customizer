import React from 'react';
import './index.css';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

export default function FeatureOptions(props) {
        const item =  props.item;
        const feature =  props.feature;
        const itemHash =  props.itemHash;
      return (
        <div key={ props.itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(feature)}
            checked={item.name ===  props.selected.name}
            onChange={() => props.updateFeature(feature, item)}
          />
          <label htmlFor={itemHash} className="feature__label">
            {item.name} ({USCurrencyFormat.format(item.cost)})
          </label>
        </div>
      );
    }

