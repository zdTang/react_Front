import React, { Component } from 'react'
import {GetSubRedditByHot} from '../RedditApi'
import Result from './Result'
export default class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            result:'haha',
            count: 9
        }
    }
    
    //SearchReddit=()=>{
        // alert("haha");
        // console.log(this.state.result);
        // this.setState((nextState,props)=>({
        //     result:nextState.result + "  good"
        // }))
        // console.log(this.state.result);
   // }
   SearchReddit=()=>{

    alert("haha");
       this.setState({
           result: this.state.result+ "good",
           count: this.state.count+1
       })
   }

    render() {
        return (
            <div id="search-container" className="container">
            <div id="search" className="card card-body bg-light mb-2">
            <h4>Search SubReddit</h4>
            <h1>in Search=={this.state.result}</h1>


                <input type="text" id="search-input" className="form-control mb-3" placeholder="Search Term..."/>
          
              <button type="submit" className="btn btn-dark btn-block mt-4" onClick={this.SearchReddit.bind(this,"tang")}>Search</button>

            </div>     
            <Result display={this.state.result} count={this.state.count}/>  
            <h1>{this.state.result}</h1>
            <h1>{this.state.count}</h1>   
            </div>  
            
        )
    }
}
