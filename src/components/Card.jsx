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
            <div className="card" >
            <img className="card-img-top" src="..." alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        )
    }
}
