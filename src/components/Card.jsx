/*=======================
FileName: Card.jsx
Description: The component for single Riddit post
Programmer: Zhendong Tang
First Version: March -1, 2021
========================*/ 
import React, { Component } from 'react'
import {WebPageOptions} from '../conf'

export default class Card extends Component {
   
   constructor(props){
       super(props)
       this.state={
            display:props.display,
            count:props.count
       }
   }
   
   componentWillUnmount(){
   }

/*=======================
Method:truncateString
Description: to delete some words if it is too long
parameters: 
  myString: the target string
  limit: the length we will leave
return: new string
========================*/   

   truncateString(myString, limit) {
    const shortened = myString.indexOf(' ', limit);
    if (shortened == -1) return myString;
    return myString.substring(0, shortened);
  }


/*=======================
Method:saveToFavourite
Description: to save the current post into favourite
parameters: n/a
return: n/a
========================*/   

  saveToFavourite(){
     localStorage.setItem(this.props.post.data.title, this.props.post.data.url);

 for (var i=0, len =  localStorage.length; i  <  len; i++){   
    var key =  localStorage.key(i);     
    var value =  localStorage.getItem(key);   
    //console.log(i+'====='+  key + "===========" + value);
   }
  


  }

//    imageURL(){
//        //<p className="card-text">{this.props.post.selftext}</p>
//        //'https://variety.com/wp-content/uploads/2020/06/reddit-logo-1.png'
//    // return this.props.post.preview?this.props.post.preview.images[0].source.url:'https://variety.com/wp-content/uploads/2020/06/reddit-logo-1.png';
//     return 'https://variety.com/wp-content/uploads/2020/06/reddit-logo-1.png';
// }

    render() {
        return (
            <div className="card" >
           
            <div className="card-body">
                <h5 className="card-title">{this.props.post.data.title}<span className="badge bg-warning text-dark">{this.props.post.data.score}</span></h5>
                <p className="card-text">{this.truncateString(this.props.post.data.selftext,WebPageOptions.truncateStringNumber)}</p>
                <a href={this.props.post.data.url} target = '_blank' className="btn btn-primary">Read More</a>
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" onClick={this.saveToFavourite.bind(this)}/>
                <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                  Add Favourite
                </label>
              </div>
            </div>
            </div>
        )
    }
}
