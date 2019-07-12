import React,{Component} from 'react';
import './frontpage.css';
import Navigation from './navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button,Progress } from 'reactstrap';
import PageCurrency from './pagination'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


import { faEllipsisV,faCaretDown,faCaretUp} from '@fortawesome/free-solid-svg-icons';
import { id } from 'postcss-selector-parser';
export default class FrontPage extends Component{
    constructor(props) {
        super(props);
        this.state = { 
          person: [],
          currentPage: 1,
          todosPerPage: 3
        };
    }
    handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }
    componentDidMount() {
     fetch("http://localhost:8080/scrape") 
      .then(response =>  response.json())
      .then(resData => {
         this.setState({ person: resData.currency }); //this is an asynchronous function
      })
    }

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
                      <div className="DollorName">EUR</div>
                      <div className="LinkClick">
                      <a href="/">German current assignmaent</a>
                         </div>
                      <div className="HighLow">High</div>
                      <div className="Time">12:30</div>

                      </div>
                      <div className="EurCurrency">
                      <div className="DollorName">HKD</div>
                      <div className="LinkClick">
                      <a href="/"> Trade balance</a>
                         
                          </div>
                      <div className="HighLow">Mid</div>
                      <div className="Time">13:37</div>
                      </div>
                      <div className="EurCurrency">
                      <div className="DollorName">USD</div>
                      <div className="LinkClick">
                      <a href="/">3-month trde Auction</a>
                          
                          </div>
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
             <PageCurrency/>
          {/* {this.state.person.map((items,index)=>{
               var count = Object.keys(items).length;
               console.log(count);
            console.log(index);
            // console.log(this.state.person[0])
            // console.log(items.id)
            console.log(items)
           
 return(
    <div className="CurrencyTag">
        {items.id===index?(
           <div className="EurCurrency">
           <div className="SignalCurrency">{items.id}
           <FontAwesomeIcon style={{color:'#CC0000'}}icon={faCaretUp}/>
           </div>
             <div className="Value">{items.name}</div>
                <div className="Minute">1M</div>
       
           </div>
        ):(
            <text>Nothning to check</text>
        )}
</div>
 )
          })} */}
         </div>
         <div className="RightDown">
             <div className="Title" style={{height:'10%'}}>
                 <text className="TextTitle">Expired Signal</text>
             </div>
             <PageCurrency/>
             {/* <div className="Title" style={{height:'10%'}}>
                 <text className="TextTitle">Signals Feed</text>
             </div> */}
          {/* {this.state.person.map((items,index)=>{
               var count = Object.keys(items).length;
               console.log(count);
            console.log(index);
            // console.log(this.state.person[0])
            // console.log(items.id)
            console.log(items)
           
 return(
    <div className="CurrencyTag">
        {items.id===index?(
           <div className="EurCurrency">
           <div className="SignalCurrency">{items.id}
           <FontAwesomeIcon style={{color:'#CC0000'}}icon={faCaretUp}/>
           </div>
             <div className="Value">{items.name}</div>
                <div className="Minute">1M</div>
       
           </div>
        ):(
            <text>Nothning to check</text>
        )}
</div>
 )
          })} */}
             {/* <div className="CurrencyTag">

                 <div className="EurCurrency">
                 <div class="SignalCurrency">EUR/USD
                 <FontAwesomeIcon style={{color:'#CC0000'}}icon={faCaretUp}/>
                 </div>
                    <div className="Value">EURUSD</div>
                      <div className="Minute">1M</div>
                 </div>
                 <div className="EurCurrency">
                 <div class="SignalCurrency">CHF/EUR
                 <FontAwesomeIcon style={{color:'#00FF00'}}icon={faCaretDown}/>
                 </div>
                  <div className="Value">CHFEUR</div>
                      <div className="Minute">1M</div>
                 </div>
                 <div className="EurCurrency">
                 <div class="SignalCurrency">AUD/USD
                 <FontAwesomeIcon style={{color:'#00FF00'}}icon={faCaretDown}/>
                 </div>

                   <div className="Value">AUDUSD</div>
                      <div className="Minute">1M</div>
                 </div>
             </div> */}
         </div>

     </div>
      
          </div>
          </div>
  
     
    )
  }
}


