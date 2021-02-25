import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <div id="search-container" className="container">
            <div id="search" className="card card-body bg-light mb-2">
            <h4>Search SubReddit</h4>
            <form id="search-form">
               <div className="form-group">
                <input type="text" id="search-input" className="form-control mb-3" placeholder="Search Term..."/>
               </div>             
              <button type="submit" className="btn btn-dark btn-block mt-4">Search</button>
            </form>
            </div>          
            </div>        
        )
    }
}
