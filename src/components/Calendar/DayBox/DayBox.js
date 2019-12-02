import React from 'react';
import './DayBox.scss';

class DayBox extends React.Component {
  constructor(props){
    super(props);

    this.state={
        active: false,
        currentActiveKey: 0,
        dayNumber: 4

    }

    
  }


render() {
  return (
    <div className={ this.props.className ? 'DayBox':'DayBoxActive' } onClick={this.props.onClick } >
          <div className={ this.props.className ? "DayTitle": "DayTitleActive"}>
               <div className={ this.props.className ? "DOW": "DOWActive"}>
            {this.props.dayDatas.Day}
               </div>
           </div>
           
           <div className="InnerDayBox" >
               <div className="DateRow">
                   {this.props.dayDatas.Date}
               </div>
               <div className="EventRow">
                   {this.props.dayDatas.eventRowText}
               </div>
           </div>
    </div>
  );
 }
}
export default DayBox;