/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './LiveContracts.scss';
import KamalaAvatar from '../../images/KamalaAvatar.png'
import SlideToggle from 'react-slide-toggle';

class LiveContracts extends React.Component {
  constructor(props){
    super(props);

    this.state={


    }
    
  }


render() {

   

  return (
   
      <div className="LiveContractBox" >
         <div className="LiveContracts" >
          <table className="tableClass">
            <thead >
              <tr className="tableWidth">
       
          <th className="avatar"><img className="avatar" src={this.props.contractAvatar} /></th>
    <td className="namedRow">
  <div className="contract_name" >{this.props.contractName}</div>
   </td>
   <td className="namedRow">
  <div className="labelBox">
      
  <div className="contract_label">Latest Price</div>
      
  </div>
  </td>
  <td className="namedRow">
<div className="contract_price">${this.props.contractPrice}</div>
  </td>
  <td className="namedRow">
          <div className="contract_change">
 
          <div className={ this.props.contractChange < 0.00 ? 'change_amount_negative' : 'change_amount_positive'}>
           ${this.props.contractChange}
          </div>
 
          </div>
 </td>

         
      
       
        </tr>
        </thead>
        </table>
        </div>




      
      </div>
  );
 }
}
export default LiveContracts;