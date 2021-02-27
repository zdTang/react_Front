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
     console.log("=======will Unmount");
   }



   truncateString(myString, limit) {
    const shortened = myString.indexOf(' ', limit);
    if (shortened == -1) return myString;
    return myString.substring(0, shortened);
  }

  saveToFavourite(){
     //console.log(this.props.post.title);
     //console.log(this.props.post.url);
     localStorage.setItem(this.props.post.title, this.props.post.url);
   //  let cat = localStorage.getItem(this.props.post.title);
   //  console.log(cat);
    // console.log(localStorage);
    // console.log(localStorage.length);
 console.log(`################################`)

 for (var i=0, len =  localStorage.length; i  <  len; i++){   
    var key =  localStorage.key(i);     
    var value =  localStorage.getItem(key);   
    console.log(i+'====='+  key + "===========" + value);
   }
  


  }

   imageURL(){
       //<p className="card-text">{this.props.post.selftext}</p>
       //'https://variety.com/wp-content/uploads/2020/06/reddit-logo-1.png'
   // return this.props.post.preview?this.props.post.preview.images[0].source.url:'https://variety.com/wp-content/uploads/2020/06/reddit-logo-1.png';
    return 'https://variety.com/wp-content/uploads/2020/06/reddit-logo-1.png';
}

    render() {
        return (
            <div className="card" >
            <img className="card-img-top" src={this.props.post.preview?this.props.post.preview.images[0].source.url:this.props.post.preview?this.props.post.preview.images[0].source.url:'https://variety.com/wp-content/uploads/2020/06/reddit-logo-1.png'} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{this.props.post.title}</h5>
                <p className="card-text">{this.truncateString(this.props.post.selftext,WebPageOptions.truncateStringNumber)}</p>
                <a href={this.props.post.url} target = '_blank' className="btn btn-primary">Read More</a>
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" onClick={this.saveToFavourite.bind(this)}/>
                <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                  Add Favrate
                </label>
              </div>
            </div>
            </div>
        )
    }
}
