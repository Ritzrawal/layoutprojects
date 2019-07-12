import React,{Component}from 'react';
import logo from './logo.svg';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV,faCaretDown,faCaretUp} from '@fortawesome/free-solid-svg-icons';
export default class PageCurrency extends Component {
  constructor(props) {
    super(props);
   this.data=[ {"field1": "outer", "field2": "thought"}, 
             {"field2": "thought", "field1": "outer"} ]
    this.dataSet = [...Array(Math.ceil(5 + Math.random() * 3))].map(
      (a, i) => "Record " + (i + 1)
    );

    this.pageSize = 3;
    // this.pagesCount = Math.ceil(this.dataSet.length / this.pageSize);
    this.state = { 
      items:"",
      users:"",
      apiResponse:"" ,
      currentPage: 0,
      person: []};
}
handleClick(e, index) {
    
  e.preventDefault();

  this.setState({
    currentPage: index
  });
  
}


componentDidMount() {
  // fetch('https://randomuser.me/api/?results=500')
 fetch("http://localhost:8080/scrape") 
  .then(response =>  response.json())
  .then(resData => {
     //console.log(JSON.stringify(resData))
     //do your logic here       
     //let person = resData.results
     this.setState({ person: resData.currency }); //this is an asynchronous function
  })
}


  render() {
    this.pagesCount = Math.ceil(this.state.person.length / this.pageSize);
    const { currentPage } = this.state;

    return (
    
      <React.Fragment>
      
        <div className="pagination-wrapper">
          
          {/* <Pagination aria-label="Page navigation example">
            
            <PaginationItem disabled={currentPage <= 0}>
              
              <PaginationLink
                onClick={e => this.handleClick(e, currentPage - 1)}
                previous
                href="#"
              />
              
            </PaginationItem>


            <PaginationItem disabled={currentPage >= this.pagesCount - 1}>
              
              <PaginationLink
                onClick={e => this.handleClick(e, currentPage + 1)}
                next
                href="#"
              />
              
            </PaginationItem>
            
          </Pagination> */}
          
        </div>

           {this.state.person
            .slice(
              currentPage * this.pageSize,
              (currentPage + 1) * this.pageSize
            )
            .map((data, i) => {
              return(
                <div className="CurrencyTag"key={i}>
                {/* {data.id===i?( */}
                  {/* console.log(i),
                  console.log(data.id), */}
                   <div className="EurCurrency">
                   <div className="SignalCurrency">{data.id}
                   <FontAwesomeIcon style={{color:'#CC0000'}}icon={faCaretUp}/>
                   </div>
                     <div className="Value">{data.name}</div>
                        <div className="Minute">1M</div>
               
                   </div>
                {/* ):(
                    <text>Nothning to check</text>
                ) */}
                
        </div>
         )
            //   <div className="data-slice" key={i}>
            //     {data.id}
            //   </div>
            // )
          }
             ) }
              <Pagination aria-label="Page navigation example">
            
            <PaginationItem disabled={currentPage <= 0}>
              
              <PaginationLink
                onClick={e => this.handleClick(e, currentPage - 1)}
                previous
                href="#"
              />
              
            </PaginationItem>

            {/* {[...Array(this.pagesCount)].map((page, i) => 
              <PaginationItem active={i === currentPage} key={i}>
                <PaginationLink onClick={e => this.handleClick(e, i)} href="#">
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            )} */}

            <PaginationItem disabled={currentPage >= this.pagesCount-1 }>
          
              <PaginationLink
                onClick={e => this.handleClick(e, currentPage + 1)}
                next
                href="#"
              />
              
            </PaginationItem>
            
          </Pagination>
          

      </React.Fragment>
    
    );
  
  }
  
}
