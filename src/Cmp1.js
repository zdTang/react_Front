import React, {Component} from 'react';
import axios from 'axios';
import getData from './RedditApi'

class Cmp1 extends Component{
  constructor(...args){
    super(...args);

    this.state={
      users: []
    }
  }

  // async componentDidMount(){
  //   try{
  //     let {data}=await axios.get('../data/data.json');

  //     this.setState({
  //       users: data
  //     });
  //   }catch(e){
  //     alert('刷新');
  //   }
  // }

  async componentDidMount(){
   //let res=await fetch('../data/data.json');
  //  let res=await fetch('./data.json');
  //   let data=await res.json();
  let data=await getData();
  data.forEach(element => {
    console.log(element.title);
  });
 //console.log(data[2].title);

    this.setState({
      users: data
    });
  }

  render(){
    return (
      <ul>
        {this.state.users.map((user, index)=>(
          <li key={index}>{user.user}, {user.password}</li>
        ))}
      </ul>
    );
  }
}

export default Cmp1;