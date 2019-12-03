import React from 'react';
import './Calendar.scss';
import './DayBox/DayBox.js'
import DayBox from './DayBox/DayBox.js';

class Calendar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      active: false,
      selectedDayId: 6,
      activeDay: "",


    }
  };

    
    setActiveDay(selectedDayId) {
        console.log('clicking on', selectedDayId)
      this.setState({ selectedDayId: selectedDayId });
    }
 


render() {

    
    const dayDatas = [
        { 

        Date: "18",
        eventRowText: "Jennifer Willaims, Lt. Col. Alexander Vindman, Kurt Volker, Impeachment Hearing 📺 ",
        Day: "MONDAY",
        id: 1,

      },
        { 
        
        Date: "19",
        eventRowText: "Jennifer Willaims, Lt. Col. Alexander Vindman, Kurt Volker, Impeachment Hearing 📺 ",
        Day: "TUESDAY",
        id: 2,

      },
        { 
            
        Date: "20",
        eventRowText: "Fifth Dem Debate 📺, Union Leader Endorsement 🗞 ",
        Day: "WEDNESDAY",
        id: 3,

      },
        { 
        
        Date: "21",
        eventRowText: "Fiona Hill Impeachment Hearing 📺",
        Day: "THURSDAY",
        id: 4,

      },
        { 
        
        Date: "22",
        eventRowText: "Illinois Filing Deadline 🗳",
        Day: "FRIDAY",
        id: 5,

      }
        
      ];
  return (

    <div className="main">

    <div className="CalendarBox">
    {
        dayDatas.map((dayData, index) => {
            console.log('this the index', index)
            return <DayBox
            key={index} 
            dayDatas={dayData}
            isActive={true}           
            onClick={() => this.setActiveDay(index)}
            className={index === this.state.selectedDayId ? false : true}
            />
            
          
            
            })
           
           
            } 
       
      
    </div>


    <div className="Footer">
    
    </div>


    </div>
  );
 }
}
export default Calendar;