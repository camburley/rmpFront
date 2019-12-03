import React from 'react';
import './TitleBar.scss';

class TitleBar extends React.Component {
  constructor(props){
    super(props);

    this.state={


    }
  }
render() {
  return (
    <div className="TitleBox">
    <div className="PageTitle">
        <h3 className="TitleText">{this.props.TitleText}</h3>
    </div>
    <div className="ContentType">
         <h4 className="SubtitleText">{this.props.SubtitleText}</h4>
    </div>
    </div>
  );
 }
}
export default TitleBar;