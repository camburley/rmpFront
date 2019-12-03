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

        Date: "2",
        eventRowText: [
          "House Impeachment Report Delivered 🗞 \n\n",
          "Donald Trump at NATO summit in London 🇬🇧  \n\n",
        
       ],
        Day: "MONDAY",
        id: 1,

      },
        { 
        
        Date: "3",
        eventRowText: "House Intelligence Committee to vote on Impeachment Report 🗳 \n\n",
        Day: "TUESDAY",
        id: 2,

      },
        { 
            
        Date: "4",
        eventRowText: "House Judiciary Committee to hold first impeachment hearing 📺 \n\n",
        Day: "WEDNESDAY",
        id: 3,

      },
        { 
        
        Date: "5",
        eventRowText: "Trudeau to convene new Parliament 📣",
        Day: "THURSDAY",
        id: 4,

      },
        { 
        
        Date: "19",
        eventRowText: "Sixth & Final Democratic Primary Debate of 2019 📺 \n\n",
        Day: "THURSDAY",
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