/* 


<LiveMarkets
            contractName="2020 Iowa Dem caucus winner"
             />
            <LiveMarkets 
            contractName="2020 NH Dem primary winner"
            />
            <LiveMarkets 
            contractName="2020 Democratic VP nominee"
            />
            <LiveMarkets 
            contractName="Which of these Dems drops out next"
            />
          

              




*/


import React from 'react';
import './EventObj.scss';
import SlideToggle from 'react-slide-toggle';
import button from 'react';
import RelatedMarkets from '../RelatedMarkets/RelatedMarkets'
import {getContractIds} from '../LiveMarkets/LiveMarkets'
import LiveMarkets from '../LiveMarkets/LiveMarkets'
import LiveContracts from '../LiveContracts/LiveContracts'


class EventObj extends React.Component {
  constructor(props){
    super(props);
    this.child = React.createRef();

    this.state={
        active : true,
        toggleEvent: 0,

    }

     
    
  }

  onClick = () => {
    console.log(' 👆hit the button in the parent');
   
    
  }


  onToggle = () => {
    this.setState({ toggleEvent: Date.now() });
  };

  markets = this.props.eventDatas.markets

render() {

  

        const relevantMarkets = [
            {
                contractName : "2020 Democratic Nominee",
            },
            {
                contractName : "2020 Iowa Dem caucus winner",
            },
            {
                contractName : "2020 NH Dem primary winner",
            },
            {
                contractName : "2020 Democratic VP nominee",
            },
            {
                contractName : "Which of these Dems drops out next",
            },
        ]

         
    

  return (

<div className="eventContainer">

    <div className="slideContent">
    <SlideToggle
    duration={300}
    collapsed
    
    render={({
      toggle,
      progress,
      setCollapsibleElement,
      range,
    }) => (

        <div className="">

        <div className="EventBox" >
        <div className="dateContainer">
        {this.props.eventDatas.Date}
        </div>
        <div className="contentContainer" >
        <div className="headlinesContainer" onClick={toggle} >
    
        {this.props.eventDatas.Headlines}
       
        </div>
        <div className="subtitleContainer"  >
         
        {this.props.eventDatas.SubtitleText}
        </div>
        </div>
    
    </div>



        <div className="inRead">

              
              <SlideToggle toggleEvent={this.state.toggleEvent}>
        <div className="slide-toggle__box" ref={setCollapsibleElement} >
            <RelatedMarkets />
            

      {
     this.props.eventDatas.firstMarket ?

     

        <LiveMarkets
        mId1Title={this.props.eventDatas.firstMarket}
      
        
        
        // key={index} 
        // theToggle={!toggle}
        marketId={this.props.eventDatas.firstMarket}
        marketIndex={this.props.eventDatas.firstMarketIndex}
        contractName={this.props.eventDatas.firstMarketName}
       
        
       
        />

          : null
          
          }
            
   
         { this.props.eventDatas.secondMarket ?

          <LiveMarkets
      
          mId1Title={this.props.eventDatas.secondMarket}
          // key={index} 
          // theToggle={!toggle}
          marketId={this.props.eventDatas.secondMarket}
          marketIndex={this.props.eventDatas.secondMarketIndex}
          contractName={this.props.eventDatas.secondMarketName}
        
         
          />
          : null
             }    
   
        { this.props.eventDatas.thirdMarket ?

          <LiveMarkets
      
          mId1Title={this.props.eventDatas.thirdMarket}
          // key={index} 
          // theToggle={!toggle}
          marketId={this.props.eventDatas.thirdMarket}
          marketIndex={this.props.eventDatas.thirdMarketIndex}
          contractName={this.props.eventDatas.thirdMarketName}
        
         
          />
          : null
             }    

        

        { this.props.eventDatas.fourthMarket ?

          <LiveMarkets
      
          mId1Title={this.props.eventDatas.fourthMarket}
          // key={index} 
          // theToggle={!toggle}
          marketId={this.props.eventDatas.fourthMarket}
          marketIndex={this.props.eventDatas.fourthMarketIndex}
          contractName={this.props.eventDatas.fourthMarketName}
        
         
          />
          : null
             }    
            
        
        { this.props.eventDatas.fifthMarket ?

          <LiveMarkets
      
          mId1Title={this.props.eventDatas.fifthMarket}
          // key={index} 
          // theToggle={!toggle}
          marketId={this.props.eventDatas.fifthMarket}
          marketIndex={this.props.eventDatas.fifthMarketIndex}
          contractName={this.props.eventDatas.fifthMarketName}
        
         
          />
          : null
             }   


        { this.props.eventDatas.sixthMarket ?

          <LiveMarkets
      
          mId1Title={this.props.eventDatas.sixthMarket}
          // key={index} 
          // theToggle={!toggle}
          marketId={this.props.eventDatas.sixthMarket}
          marketIndex={this.props.eventDatas.sixthMarketIndex}
          contractName={this.props.eventDatas.sixthMarketName}
        
         
          />
          : null
             }     

        
        { this.props.eventDatas.seventhMarket ?

          <LiveMarkets
      
          mId1Title={this.props.eventDatas.seventhMarket}
          // key={index} 
          // theToggle={!toggle}
          marketId={this.props.eventDatas.seventhMarket}
          marketIndex={this.props.eventDatas.seventhMarketIndex}
          contractName={this.props.eventDatas.seventhMarketName}
        
         
          />
          : null
             }    


        { this.props.eventDatas.eigthMarket ?

          <LiveMarkets
      
          mId1Title={this.props.eventDatas.eigthMarket}
          // key={index} 
          // theToggle={!toggle}
          marketId={this.props.eventDatas.eigthMarket}
          marketIndex={this.props.eventDatas.eigthMarketIndex}
          contractName={this.props.eventDatas.eigthMarketName}
        
         
          />
          : null
             }    
            
              </div>
              </SlideToggle>
        </div>
        </div>
  


      )}
/>

    </div>

    </div>
    
  );
 }
}
export default EventObj;