import React, { Component } from 'react'
import {GetSubRedditByHot} from '../RedditApi'
import {WebPageOptions} from '../conf'
import Card from './Card'
export default class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            result:[1,2,3],
            count: 0
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

        this.setState({
            //result:this.state.result.push(0)
        }

        )
        //console.log(Array.isArray(searchResult) )
        console.log(this.state.result);
        searchInput.value='';
    }

  

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
            { 
                this.state.result.map((element,index)=> {
                    return <Card key={index} post={element} />
                })
            }
   

            <h1>{this.state.count}</h1>   
            <div id='results'></div>
            </div>  
            
        )
    }
}
