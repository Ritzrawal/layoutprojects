import React,{Component} from 'react';
import './frontpage.css';
import Navigation from './navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button,Progress } from 'reactstrap';
import { faEllipsisV,faCaretDown,faCaretUp} from '@fortawesome/free-solid-svg-icons';
export default class FrontPage extends Component{
  render(){
    return(
        <div className="MainComponent" style={{backgroundColor:'#020210',width:'100%',height:'100%'}}>
            <Navigation/>
      
      <div className="FrontPage">
          <div className="LeftSIde">
              <div className="LeftTop">
                  <div>
                  <FontAwesomeIcon  className="IconStyle" icon={faEllipsisV}/>
                  </div>
                  <div >
                  <text className="TextTitle" style={{marginTop:'15px'}}>Analysis</text>
                  </div>
             
              </div>
              <div className="LeftBottom">
                  <div className="NaviLeft" style={{height:'10%',backgroundColor:'#212f48'}}>
                      <div>
                      <FontAwesomeIcon style={{color:'#C0C0C0'}} className="IconStyle"  icon={faEllipsisV}/>
                      </div>
                      <div>
                      <text className="TextTitle">Asset</text>
                      <text className="TextTitle">EUR/USD</text>
                     
                      </div>
                  </div>
                  <div className="Content" style={{height:'80%'}}></div>
                  <div className="Fotter" style={{height:'10%',backgroundColor:'#212f48'}}>
                  <div className="FooterHalf" style={{width:'50%',display:'flex',alignItems:'center',marginLeft:'20px'}}>
                  <div><text className="FooterText" style={{color:'#C0C0C0',fontSize:'1vw'}}>RISK LEVEL</text></div>
                  <div style={{width:"50%"}}> <Progress value="25">25%</Progress></div>
                  </div>
                  <div className="FotterOtherHalf" style={{width:'50%',display:'flex',alignItems:'center',justifyContent:'flex-end',marginRight:'20px'}}>
                  <text className="FooterText" style={{color:'#C0C0C0',fontSize:'1vw'}}>SRONG BUY</text>
                  </div>

                  </div>
                  
              </div>
              </div>
              <div className="Middle">
                  <div className="MiddleTop">
                  <div className="MiddleTitle">
                      <div>
                      <FontAwesomeIcon style={{color:'#C0C0C0'}} className="IconStyle"  icon={faEllipsisV}/>
                   
                      </div>
                      <div>
                          <div>
                      <text className="TextTitle">Economic Calender</text>
                      <Button style={{backgroundColor:'red',borderRadius:'10px',marginLeft:'20px',height:'2vw',fontSize:'1vw'}}>
                          
                          <text style={{fontSize:'1vw'}}>Live</text></Button>
                      </div>
                      {/* <div>
                      <Button color="secondary" size="sm">Live</Button>
                        
                          
                      </div> */}
                      </div>
                  </div>
                  <div className="EventBlock">
                      <div style={{float:'left',width:'50%'}}>
                      <div style={{float:"left",width:'50%',fontSize:'1vw',color:'#C0C0C0'}}>Currence</div>
                      <div style={{color:'#C0C0C0',fontSize:'1vw'}}>Event</div>
                      </div>
                      <div>
                      <div style={{float:"left",marginRight:'50px',color:'#C0C0C0',fontSize:'1vw'}}>Importance</div>
                      <div style={{color:'#C0C0C0',fontSize:'1vw'}} >Time</div>
                      </div>
                  </div>
                  <div className="CurrencyDetain">
                      <div className="EurCurrency">
                      <div class="DollorName">EUR</div>
                      <div className="LinkClick">German current assignmaent</div>
                      <div className="HighLow">High</div>
                      <div className="Time">12:30</div>

                      </div>
                      <div className="EurCurrency">
                      <div class="DollorName">EUR</div>
                      <div className="LinkClick">Trade balance</div>
                      <div className="HighLow">Mid</div>
                      <div className="Time">13:37</div>
                      </div>
                      <div className="EurCurrency">
                      <div class="DollorName">EUR</div>
                      <div className="LinkClick">3-month trde Auction</div>
                      <div className="HighLow">Low</div>
                      <div className="Time">16:54</div>
                      </div>
                  </div>
                  </div>
                  <div className="MiddleLower">
                      <div className="TextBlock">
                          <div className="Header">
                              <text style={{fontSize: '1.5vw'}}>MONDAY'S MOTIVATION</text>
                          </div>
                          <div className="BodyContent">
                              <text className="TxtStyle">The moment you have nothing the moment you have evertything</text>
                          </div>
                      </div>

                  </div>

              </div>
     <div className="RightSide">
         <div className="RightTop">
         <div className="Title" style={{height:'10%'}}>
                 <text className="TextTitle">Signals Feed</text>
             </div>
             <div className="CurrencyTag">
                 <div className="EurCurrency">
                 <div class="SignalCurrency">EUR/USD
                 <FontAwesomeIcon style={{color:'#CC0000'}}icon={faCaretUp}/>
                 </div>
                      <div className="Value">High</div>
                      <div className="Minute">1M</div>

                 </div>
                 <div className="EurCurrency">
                 <div class="SignalCurrency">EUR/USD
                 <FontAwesomeIcon style={{color:'#00FF00'}}icon={faCaretDown}/>
                 </div>
                      <div className="Value">High</div>
                      <div className="Minute">1M</div>
                 </div>
                 <div className="EurCurrency">
                 <div class="SignalCurrency">EUR/USD
                 <FontAwesomeIcon style={{color:'#00FF00'}}icon={faCaretDown}/>
                 </div>
                      <div className="Value">High</div>
                      <div className="Minute">1M</div>
                 </div>
             </div>
         </div>
         <div className="RightDown">
             <div className="Title" style={{height:'10%'}}>
                 <text className="TextTitle">Expired Signal</text>
             </div>
             <div className="CurrencyTag">
                 <div className="EurCurrency">
                 <div class="SignalCurrency">EUR/USD
                 <FontAwesomeIcon style={{color:'#CC0000'}}icon={faCaretUp}/>
                 </div>
                      <div className="Value">High</div>
                      <div className="Minute">1M</div>
                 </div>
                 <div className="EurCurrency">
                 <div class="SignalCurrency">EUR/USD
                 <FontAwesomeIcon style={{color:'#00FF00'}}icon={faCaretDown}/>
                 </div>
                      <div className="Value">High</div>
                      <div className="Minute">1M</div>
                 </div>
                 <div className="EurCurrency">
                 <div class="SignalCurrency">EUR/USD
                 <FontAwesomeIcon style={{color:'#00FF00'}}icon={faCaretDown}/>
                 </div>
                      <div className="Value">High</div>
                      <div className="Minute">1M</div>
                 </div>
             </div>
         </div>

     </div>
      
          </div>
          </div>
  
     
    )
  }
}


