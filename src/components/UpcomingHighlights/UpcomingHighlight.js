import React from 'react';
import './UpcomingHighlight.scss';

class UpcomingHighlight extends React.Component {
  constructor(props){
    super(props);

    this.state={


    }
  }
render() {
  return (
    <div className="Highlight">
        <div className="HighlightComingEvents">
            <div className="ComingLeftEvent">
                <div className="ComingEvent">
                    <div className="TimeAway">
                        {this.props.untilDebate}
                    </div>
                    <div className="DaysLabel">
                        {this.props.untilText}
                    </div>
                </div>
            </div>
            <div className="ComingRightEvent">
            <div className="ComingEvent">
            <div className="TimeAway">
            {this.props.untilElection}
            </div>
            <div className="DaysLabel">
            {this.props.untilElectionText}
            </div>
            </div>
            </div>
        </div>
    
    </div>
  );
 }
}
export default UpcomingHighlight;