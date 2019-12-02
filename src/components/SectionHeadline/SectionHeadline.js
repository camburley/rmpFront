import React from 'react';
import './SectionHeadline.scss';

class SectionHeadline extends React.Component {
  constructor(props){
    super(props);

    this.state={


    }
  }
render() {
  return (
    <div className="SectionBox">
       <div className="SectionHeadline">
           {this.props.SectionHeadline}
       </div>
    </div>
  );
 }
}
export default SectionHeadline;