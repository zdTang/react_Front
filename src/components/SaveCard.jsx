/*=======================
FileName: saveCard.jsx
Description: The component for displaying single favourite posts
Programmer: Zhendong Tang
First Version: March -1, 2021
========================*/ 
import React, { Component } from 'react'
import {WebPageOptions} from '../conf'

export default class SaveCard extends Component {
   
   constructor(props){
       super(props)
       this.state={
            display:props.display,
            count:props.count
       }
   }
   

/*=======================
Method:DeleteFavourite
Description: to remove a favourite post from a list
parameters: n/a
return: n/a
========================*/   
 DeleteFavourite(){
    localStorage.removeItem(this.props.post.title);
    this.props.func();

  }



    render() {
        return (
            <div className="card" >
            <div className="card-body">
              <h5 className="card-title">{this.props.post.title}</h5>
              <a href={this.props.post.url} target = '_blank' className="btn btn-primary">Read</a>
              <button type="button" className="btn btn-outline-danger" onClick={this.DeleteFavourite.bind(this)}>Remove</button>
            </div>
          </div>
        )
    }
}
