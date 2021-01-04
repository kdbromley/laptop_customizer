import React from 'react';
import FeatureOptions from './FeatureOptions';
import './index.css'
import slugify from 'slugify';

class Feature extends React.Component {
    render() {
        return(
            <fieldset className="feature" id={this.props.featureHash}>
               <legend className="feature__name">
               <h3>{this.props.feature}</h3>
               </legend>
             {this.props.features[this.props.feature].map(item => (
            <FeatureOptions 
              key={slugify(JSON.stringify(item))}
              itemHash={slugify(JSON.stringify(item))}
              feature={this.props.feature}
              updateFeature={this.props.updateFeature}
              item={item}
              selected={this.props.selected}
              />
             )
             )
            }
        </fieldset> 
        )
    }
}

export default Feature;