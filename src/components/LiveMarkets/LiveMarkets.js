
import React from 'react';
import './LiveMarkets.scss';
import SlideToggle from 'react-slide-toggle';
import LiveContracts from '../LiveContracts/LiveContracts'
import MarketBlurb from '../MarketBlurb/MarketBlurb'
import EventObj from '../EventObj/EventObj'
import axios from 'axios';
import { realpath } from 'fs';


type Props = {
    getContractIds: Function,
  };

class LiveMarkets extends React.Component {
  constructor(props){
    super(props);

    this.state={
        toggleSwitch : false,
        marketIds : this.props.markets,
        contractIds: [],
        allContracts: [],
        marketContracts: [],
        contractsAndValues: [],
        onlyValues: [],
        jsonObj: [],
        valuesLength: "",
        objLength: [], 
        almostThere: [],
        currentNames: [],
        currentPrices:[],
        loopThruTheseContracts: [],
        realTimeData: []



    }; // END OF STATE





  } // END OF CONSTRUCTOR

  contracts = []
  values = []
  markets = []
  json = []
  length = ""


    //Notes: 
    // Need to Get all Market Ids thru props
    // Need to get all Contracts where Market Ids exist
    // Need to get all Values where Contract Ids exist 
    // One JSON object to map Contracts and Values
    // Loop thru JSON, render values in <LiveContracts /> component

     



  componentDidMount() {
  
    let marketIds = ['3633', '3653']
    console.log('this.state.marketIds', this.state.marketIds)

    let themContracts = [];

    for ( var i = 0; i < marketIds.length; i++){
        const rmpURL = 'https://realmoneypolls.herokuapp.com/api/contract/contract_list/' + marketIds[i];
        themContracts.push(axios.get(rmpURL));
        this.state.allContracts.push(themContracts)
        console.log('themContracts', themContracts)
    }

    Promise.all(themContracts).then((response) => 
    console.log('INSIDE componentDidMount() 💬 promise response', response) +
    
        response.map((res, index) => {
            this.state.allContracts.push(res.data[0])
            console.log('INSIDE componentDidMount() 👋 this.state.allContracts', this.state.allContracts)
            //this.getContractIds();
        }
        )).catch((err) => console.log(err));
        
 }



 //  Coming out of componentDidMount(), got this.state.allContracts

 
 
logState = () => {
    console.log('hello')
    console.log('this.state.allContracts loggedState()', this.state.allContracts)

    let loopAllContracts = this.state.allContracts

    loopAllContracts.map((row, k) => {
        if (k !== 0 && k !== 1){
            console.log('k within LOOP logState()', k)
            console.log('row within LOOP logState()', row)
            this.state.marketContracts.push(row)

        }
    })
}


checkMarketContracts(){
    console.log('this.state.marketContracts checkMarketContracts()', this.state.marketContracts)
}


// Coming out of logState() I can get contractIds for each Contract

getContractIds = () => {
    console.log("getContractIds() was FIRED!")
    console.log('this.state.contractIds[this.props.marketIndex]', this.state.contractIds[this.props.marketIndex])
  const contractRow = this.state.allContracts[this.props.marketIndex]
  if (contractRow !== undefined) {
      
  const contractRows = contractRow.map((row, y) => {
      //console.log('y IN CONTRACT IDS', y)
      //console.log('row IN CONTRACT IDS', row.contract_id)
      this.state.contractIds.push(row.contract_id)
      
      return;

  })
  

  // now we should have the contractIds

  return console.log('INSIDE getContractIds() / do we have contractIds? this.state.contractIds', this.state.contractIds);
  

  
  // return this.fetchContractPrices();
} else {

  console.log('this.state.contractIds', this.state.contractIds)
}
    
    return this.getContractPrices(this.state.contractIds)

}




getContractPrices = (ids) => {
    let contractIds = this.state.contractIds
    let contractPrices = [];
    let allPrices = [];
        console.log('this.state.valuesLength', this.state.contractIds.length);
        for ( var i = 0; i < contractIds.length; i++){
            const rmpURL = 'https://realmoneypolls.herokuapp.com/api/value/value_list/' + this.state.contractIds[i];
            contractPrices.push(axios.get(rmpURL));
            //this.state.contractsAndValues.push(contractPrices)
            console.log('contractPrices in values list loop', contractPrices)
            console.log('this.state.contractsAndValues.length', this.state.contractsAndValues.length)
            
        }
    
        // Inform Promises how to behave

        Promise.all(contractPrices).then((response) => 
        console.log('response', response) +
        
            response.map((res, index) => 
            
            {
                allPrices.push(res.data[0][0]);
                console.log('allPrices', allPrices)
                //this.state.contractsAndValues.push(res.data[0][0])
                console.log('res.data', res.data[0][0])
                this.state.contractsAndValues.push(allPrices[index])
                console.log('this.state.contractsAndValues AFTER ALL PRICES ADDED', this.state.contractsAndValues)
                
            } 
                
            
            ).then(this.makeSingleObj())).catch((err) => console.log(err));

}

async makeSingleObj() {
    console.log('this.state.allContracts[this.props.marketIndex]', this.state.allContracts[this.props.marketIndex])
    console.log('this.state.contractsAndValues', this.state.contractsAndValues)
    const allContracts = await this.state.allContracts[this.props.marketIndex]
    const allValues = await  this.state.contractsAndValues

    
    const realTimeData = [];
    await allContracts.map((contract, x) => {
        console.log("this is in combineLoop. What's in contract 🤔 ", contract)
        
        // 33 rows in Array 
        allValues.map((value, y) => {
            //console.log('🥵 value', value)
            if (y === x){
            const fullObj = {"contract_id": contract.contract_id, "name": contract.name, "image": contract.image, "price" : value.best_buy_yes_offer, "priceChange": (value.last_trade_price - value.last_close_price).toFixed(2)}
            console.log('🤗 contract + value (finalObj)', fullObj )
            realTimeData.push(fullObj);
            console.log('realTimeData final OBJ', realTimeData)
        }
            return this.state.realTimeData.push(realTimeData)

        })
    })

    this.ifTest();

}



  ifTest = () => {
    const realTime = this.state.realTimeData[0];
    if (realTime === undefined){
        console.log('No data my G')
    } else {
        console.log('I have the data', realTime)
        
       return realTime.map((row, k) => {

            return  <div key={k}> <LiveContracts 
                    contractName={row.name}
                    contractAvatar={row.image}
                    contractPrice={row.price}
                    contractChange={row.priceChange}
                    /></div>
        
                
            })

    }
  this.oneMoretest();
 }
 

    
 oneMoretest = () => {
     console.log('does this wait?')
     return (<div> <LiveContracts /> something here</div>)
 }


 callbackRender = () => {
    if (this.state.realTimeData[0] === undefined){
        console.log('no Data yet')
    } else {
        console.log('Def got the data bro');
        this.ifTest();
    return <div>{this.ifTest()}</div>
    }
}



render() {

   

  return (
          

<div className="parent" >
             <div className="one" >
             <button onClick={this.getContractIds} > Get ContractIds </button>
             <button onClick={this.getContractPrices} >Grab Contract Prices</button>
             

             
             </div>

    <SlideToggle
    duration={300}
    collapsed
    render={({
      toggle,
      setCollapsibleElement
    }) => (

        <div className={ toggle ? 'LiveMarketBox' : 'LiveMarketBoxActive'}  > 
       
        <div className="LiveMarkets"  onClick={toggle} >
        {this.props.contractName} 
        
    
          </div>
          <SlideToggle >
              <div className="slide-toggle__box" ref={setCollapsibleElement}  onChange={this.oneMoretest} onClick={this.callbackRender}>
              
            

           <div>{this.callbackRender()}</div>
           
           
    
      
            

            <MarketBlurb 
            blurb="PredictIt’s Live Market Data based on upcoming future events. These are the markets most closely associated with key events. Find market details,"
            blurbLink=" here."
            
            />
        
        </div>
       
        </SlideToggle>


      </div>
      )}
    
      />
      </div>

           
  )
 }
}
export default LiveMarkets;






