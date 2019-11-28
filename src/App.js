import React from 'react';
import logo from './logo.svg';
import './App.css';
import Collapse from "@kunukn/react-collapse"; 
import Axios from 'axios';
import TitleBar from './components/TitleBar/TitleBar';
import UpcomingHighlights from './components/UpcomingHighlights/UpcomingHighlight';
import PageHeadline from './components/PageHeadline/PageHeadline';
import Calendar from './components/Calendar/Calendar';
import WidgetFooter from './components/WidgetFooter/WidgetFooter';
import SectionHeadline from './components/SectionHeadline/SectionHeadline';
import EventsBar from './components/EventsBar/EventsBar';
import EventObj from './components/EventObj/EventObj';
import SlideToggleContent from './components/SlideToggleContent/SlideToggleContent';
import SlideToggle from 'react-slide-toggle';





class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
        active: false,
        toggle: false,


    }
  }

  toggleFunction = () => {
    let isActive = this.state.toggle; 
    if(this.state.toggle === false){
      console.log("Toggle in Closed")
    }
    this.setState({ toggle: !isActive  });
  }


  toggleMe = () => {
    let isActive = this.state.active; 
    if(this.state.active === false){
      console.log("Toggle in Closed")
    }
    this.setState({ active: !isActive  });
  }







render() {


 

  const eventDatas = [
    { 

      Date: "Nov. 18",
      Headlines: [
        "Fifth Democratic primary debate 🏛 \n\n",
        "Gordon Sondland, Laura Cooper, David Hale Impeachment Hearing 📺 \n\n",
        "Maryland Special Election Filing Deadline 🗳 "
     ],
      SubtitleText: "These events are likely to include live tweeting from @realDonaldTrump",
      firstMarket: '3633',
      firstMarketIndex: 2,
      firstMarketName: "Who will win the 2020 Democratic presidential nomination",
      secondMarket: '3653',
      secondMarketIndex: 3,
      markets: ['3633', '3653'],

      secondMarketName: "Republican will win 2020 nomination",
  
  
    },
  { 

    Date: "Nov. 19",
    Headlines: [
      "Jennifer Willaims, Lt. Col. Alexander Vindman, Kurt Volker, Impeachment Hearing 📺 \n\n",
   ],
    SubtitleText: "These events are likely to include live tweeting from @realDonaldTrump",


  },
  { 

    Date: "Nov. 20",
    Headlines: [
      "Fifth Democratic primary debate 🏛 \n\n",
      "Gordon Sondland, Laura Cooper, David Hale Impeachment Hearing 📺 \n\n",
      "Maryland Special Election Filing Deadline 🗳 "
   ],
    SubtitleText: "These events are likely to include live tweeting from @realDonaldTrump",


  },
  { 

    Date: "Nov. 21",
    Headlines: [
      "Fiona Hill Impeachment Hearing 📺",
   ],
    SubtitleText: "These events are likely to include live tweeting from @realDonaldTrump",


  },
  { 

    Date: "Dec. 2",
    Headlines: [
      "Illinois Filing Deadline 🗳 \n\n",
      "North Carolina Filing Deadline 🗳 \n\n",
      "Wisconsin Filing Deadline 🗳 "
   ],
    SubtitleText: "These include major party CD-7 ",


  },
  { 

    Date: "Dec. 9",
    Headlines: [
      "Texas Filing Deadline 🗳 \n\n",
   ],
    SubtitleText: "These include major party CD-7 ",


  },
  { 

    Date: "Dec. 19",
    Headlines: [
      "Sixth & Final Democratic Primary Debate of 2019 🏛 \n\n",
   ],
    SubtitleText: "These events are likely to include live tweeting from @realDonaldTrump ",


  },
    
  ];


  return (
    <div className="App">
      <TitleBar 
      TitleText="EVENTS CALENDAR"
      SubtitleText="PredictIt Live Markets"
      />
      <UpcomingHighlights
      untilDebate="5 Days"
      untilText="until November debate"
      untilElection="354 Days"
      untilElectionText="until election day"
      />

      <PageHeadline
        Headline="Upcoming Events"
        HeadlineBlurb="PredictIt’s Live Market Data based on upcoming future events. These are the markets most closely associated with key events.  "
      />

      <Calendar
  
      
      />

      <SectionHeadline
      SectionHeadline="Associated Events"

      />

      <EventsBar


      />

      { 
      
        eventDatas.map((eventData, index) => {
    
            console.log('this the index', index)
            return <EventObj
            key={index} 
            eventDatas={eventData}
            toggle={() => this.toggleFunction()}
           
           
            
            
                     
            />
            })           
      } 

     
     

    </div>
  );
 }
}
export default App;
