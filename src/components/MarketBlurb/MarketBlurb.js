/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './MarketBlurb.scss';


class MarketBlurb extends React.Component {
  constructor(props){
    super(props);

    this.state={

    }
    
  }

render() {

  return (
   
      <div className="MarketBlurbBox" >
    
        <div className="Blurb">
        {this.props.blurb}{this.props.blurbLink}
        </div>


      
      </div>
  );
 }
}
export default MarketBlurb;