/*=======================
FileName: Favourite.jsx
Description: The component for displaying all favourite posts
Programmer: Zhendong Tang
First Version: March -1, 2021
========================*/ 
import React, { Component } from 'react'
import {WebPageOptions} from '../conf'
import SaveCard from './SaveCard'
let myResult=[];
export default class Favourite extends Component {
    constructor(props){
        super(props);
        this.state={
            post:''

        }
    }

    componentDidMount(){
        // get data from localstorage and save to state??
        this.loadLocalStorage();
    }

/*=======================
Method:loadLocalStorage
Description: load post list from localStorage
parameters: n/a
return: the List of saved reddit posts
========================*/   

    loadLocalStorage=()=>{
        let postList=[];
        for (var i=0, len =  localStorage.length; i  <  len; i++){   
            var key =  localStorage.key(i);     
            var value =  localStorage.getItem(key);  
            postList.push({title:key,url:value}); 
            //console.log(i+'====='+  key + "===========" + value);
           }

           this.setState({

           post:postList
 
         })
    }

    render() {
        return (
            <div id="search-container" className="container">
            <div id="search" className="card card-body bg-light mb-2">
            <h4>Favourite SubReddit</h4>
            
           

            </div>  
            { 
                
                 (this.state.post||[]).map((element,index)=> {
                    return <SaveCard key={index} post={element} func={this.loadLocalStorage}/>
                 })
            }
            <div id='results'></div>
            </div>  
            
        )
    }
}
