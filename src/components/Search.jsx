import React, { Component } from 'react'
import {GetSubRedditByHot} from '../RedditApi'
import {WebPageOptions} from '../conf'
import Result from './Result'
export default class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            result:'haha',
            count: 9
        }
    }
    
    showMessage(message,className){
        const div=document.createElement('div');
        div.className=`alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const searchContainer=document.getElementById('search-container');
        const search=document.getElementById('search');
        searchContainer.insertBefore(div,search);
        setTimeout(()=>document.querySelector('.alert').remove(),WebPageOptions.timeout);

    }
   async SearchReddit(){
    const searchInput=document.getElementById('search-input');   

    // Get search term
    let searchTerm=searchInput.value;
    let searchResult=undefined;
    if (searchTerm==='')
    {
        this.showMessage(`please add a serarch term`,'alert-danger');
    }
    else
    {
        searchResult=await GetSubRedditByHot(searchTerm);
        console.log(searchResult);
        this.setState({
            result: searchResult.length,
            count: this.state.count+1
        })

        searchInput.value='';

        //  display the output
        let output='<div class="card-columns">';
        searchResult.forEach(post=>{
            output += `<div class="card" style="width: 18rem;">
            <img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
            
            `;

        })
        output += '</div';
        document.getElementById('results').innerHTML=output;

    }

  

}



//    SearchReddit=()=>{

//     alert("haha");
//        this.setState({
//            result: this.state.result+ "good",
//            count: this.state.count+1
//        })
//    }

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
            <div id='results'></div>
            </div>  
            
        )
    }
}
