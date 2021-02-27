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

    DeleteReddit(){
        console.log("haha")
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
