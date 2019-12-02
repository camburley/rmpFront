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

      Date: "Dec. 2",
      Headlines: [
        "House Impeachment Report Delivered 🗞 \n\n",
        "U.S. President Donald Trump leaves for NATO summit in London 🇬🇧  \n\n",
        "The U.S. Supreme Court will hear its first major gun rights case in nearly a decade 🏛 "
     ],
      SubtitleText: "These events are likely to include live tweeting from @realDonaldTrump",
      firstMarket: '5913',
      firstMarketIndex: 8,
      firstMarketName: "How many articles of impeachment by 3/31",
      secondMarket: '4319',
      secondMarketIndex: 9,
      secondMarketName: "Will Donald Trump be impeached by year's end 2019",
      thirdMarket: '3537',
      thirdMarketIndex: 10,
      thirdMarketName: "Will Donlad Trump be impeached in his first term",
      fourthMarket: '5158',
      fourthMarketIndex: 11,
      fourthMarketName: "Will Donald Trump complete his first term",
      fifthMarket: '5925',
      fifthMarketIndex: 12,
      fifthMarketName: "Will a federal charge against Rudy Giuliani be confirmed by Dec 2020",
      sixthMarket: '6077',
      sixthMarketIndex: 13,
      sixthMarketName: "Whom will UK Parliament chose as next Prime Minister",
      seventhMarket: '4703',
      seventhMarketIndex: 14,
      seventhMarketName: "Who will be the next justice to leave the Supreme Court",
      eigthMarket: '4930',
      eigthMarketIndex: 15,
      eigthMarketName: "Who will be Trump's next Supreme Court nominee",
  
  
    },
  { 

    Date: "Dec. 3",
    Headlines: [
      "House Intelligence Committee to vote on Impeachment Report 🗳 \n\n",
   ],
    SubtitleText: "These events are likely to include live tweeting from @realDonaldTrump",
    firstMarket: '5913',
    firstMarketIndex: 3,
    firstMarketName: "How many articles of impeachment by 3/31",
    secondMarket: '4319',
    secondMarketIndex: 4,
    secondMarketName: "Will Donald Trump be impeached by year's end 2019",
    thirdMarket: '5158',
    thirdMarketIndex: 5,
    thirdMarketName: "Will Donald Trump complete his first term",
    fourthMarket: '5914',
    fourthMarketIndex: 8,
    fourthMarketName: "Will Senate convict Donald Trump in his first term",
    
    
    


  },
  { 

    Date: "Dec. 4",
    Headlines: [
      "House Judiciary Committee to hold first impeachment hearing 📺 \n\n",
      
   ],
    SubtitleText: "These events are likely to include live tweeting from @realDonaldTrump",
    firstMarket: '5913',
    firstMarketIndex: 4,
    firstMarketName: "How many articles of impeachment by 3/31",
    secondMarketIndex: 9,
    secondMarketName: "Will Donald Trump be impeached by year's end 2019",
    thirdMarket: '3537',
    thirdMarketIndex: 10,
    thirdMarketName: "Will Donlad Trump be impeached in his first term",
    fourthMarket: '5158',
    fourthMarketIndex: 11,
    fourthMarketName: "Will Donald Trump complete his first term",


  },
  { 

    Date: "Dec. 5",
    Headlines: [
      "Trudeau to convene new Parliament 📣",
   ],
    SubtitleText: "These events are likely to include live tweeting from @realDonaldTrump",
    firstMarket: '5358',
    firstMarketIndex: 1,
    firstMarketName: "Who will be the Prime Minister of Canade after Dec 2019",


  },
  { 

    Date: "Dec. 19",
    Headlines: [
      "Sixth & Final Democratic Primary Debate of 2019 📺 \n\n",
   ],
    SubtitleText: "These events are likely to include live tweeting from @realDonaldTrump ",
    firstMarket: '3633',
    firstMarketIndex: 4,
    firstMarketName: "Who will win the 2020 Democratic Presidential Nomination",
    secondMarket: '3698',
    secondMarketIndex: 5,
    secondMarketName: "Who will win the 2020 Presidential Election",
    thirdMarket: '5241',
    thirdMarketIndex: 6,
    thirdMarketName: "Who will win the 2020 Iowa Democratic Caucuses",
    fourthMarket: '5344',
    fourthMarketIndex: 7,
    fourthMarketName: "Who will win the 2020 New Hampshire Democratic Primary",
    


  },
    
  ];


  return (
    <div className="App">
      <TitleBar 
      TitleText="EVENTS CALENDAR"
      SubtitleText="PredictIt Live Markets"
      />
      <UpcomingHighlights
      untilDebate="18 Days"
      untilText="until December debate"
      untilElection="341 Days"
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
