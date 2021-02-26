import React, { Component } from 'react'

export default class Card extends Component {
   
   constructor(props){
       super(props)
       this.state={
            display:props.display,
            count:props.count
       }
   }
   

    render() {
        return (
            <div class="card" >
            <img class="card-img-top" src="..." alt="Card image cap"/>
            <div class="card-body">
                <h5 class="card-title">{this.props.post}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        )
    }
}
