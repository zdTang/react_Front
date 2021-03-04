/*=======================
FileName: Search.jsx
Description: The component for displaying the posts
Programmer: Zhendong Tang
First Version: March -1, 2021
========================*/ 
import React, { Component } from 'react'
import {GetSubRedditByHot} from '../RedditApi'
import {WebPageOptions} from '../conf'
import Card from './Card'
let myResult=[];
export default class Search extends Component {
    constructor(props){
        super(props);
        this.state={

           post:sessionStorage.getItem("post")&&JSON.parse(sessionStorage.getItem("post"))

        }
        //check localstorage
    }
    
    componentWillUnmount(){
        console.log(`will unmount==${this.state.post}`)
        sessionStorage.setItem("post", JSON.stringify(this.state.post));
        console.log("Search=======will Unmount");
      }
/*=======================
Method: showMessage
Description: display alert message once user forget input a term for searching
parameters: n/a
return: n/a
========================*/ 


    showMessage(message,className){
        const div=document.createElement('div');
        div.className=`alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const searchContainer=document.getElementById('search-container');
        const search=document.getElementById('search');
        searchContainer.insertBefore(div,search);
        setTimeout(()=>document.querySelector('.alert').remove(),WebPageOptions.timeout);

    }


/*=======================
Method: SearchReddit
Description: search reddit based on Input
parameters: n/a
return: the result of searching
========================*/ 

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
        myResult=searchResult;
        console.log(searchResult);

        this.setState({

          post:searchResult

        }
        )
        //console.log(Array.isArray(searchResult) )
         console.log(this.state.post);


        searchInput.value='';
    }

  

}



    render() {

        console.log(`haha${sessionStorage.getItem("post")}`);
        return (
            <div id="search-container" className="container">
            <div id="search" className="card card-body bg-light mb-2">
            <h4>Search SubReddit</h4>
            <input type="text" id="search-input" className="form-control mb-3" placeholder="Search Term..."/>    
            <button type="submit" className="btn btn-dark btn-block mt-4" onClick={this.SearchReddit.bind(this,"tang")}>Search</button>

            </div>  
            { 
                
                 (this.state.post||[]).map((element,index)=> {
                    return <Card key={index} post={element} />
                 })
            }
            <div id='results'></div>
            </div>  
            
        )
    }
}
