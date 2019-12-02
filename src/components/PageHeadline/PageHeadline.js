import React from 'react';
import './PageHeadline.scss';

class PageHeadline extends React.Component {
  constructor(props){
    super(props);

    this.state={


    }
  }
render() {
  return (
    <div className="HeadlineBox">
       <div className="Headline">
           {this.props.Headline}
       </div>
       <div className="HeadlineBlurb">
           {this.props.HeadlineBlurb}
       </div>
    
    </div>
  );
 }
}
export default PageHeadline;