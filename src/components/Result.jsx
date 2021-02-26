import React, { Component } from 'react'

export default class Result extends Component {
   
   constructor(props){
       super(props)
       this.state={
            display:props.display,
            count:props.count
       }
   }
   

    render() {
        return (

            <div id="results">
            <h1>the display is {this.props.display}</h1>
            <h1>the count is {this.props.count}</h1>
            </div> 
            

        )
    }
}
