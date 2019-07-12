import React,{Component} from 'react';
 import FrontPage from './frontpage'
import Todo from './currencydetail'
// import CurrencyValue from './currencydetail'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';


export default class App extends Component{
  render(){
    return(
      <div >
        {/* <Todo/> */}
        <FrontPage/>
        {/* <Router>
      <div>
       

         <Route exact path="/" component={CurrencyValue} /> 
        <Route path="/currency" component={CurrencyValue} />
      
      </div>
    </Router> */}
      </div>
    )
  }
}


