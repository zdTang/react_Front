
 /*=======================
FileName: ReditAPI.jsx
Description: This file contains methods for calling Reddit API
Programmer: Zhendong Tang
First Version: March -1, 2021
========================*/ 
 import snoowrap from'snoowrap';
  import {token,ApiOption} from './config/redditToken'

    const r = new snoowrap({
      userAgent: token.userAgent,
      clientId: token.clientId,
      clientSecret: token.clientSecret,
      username: token.username,
      password: token.password
    });
  
  
  async function getData(searchString) {
    let MyResult=undefined;
    //let response = await r.getSubreddit(searchString).getTop({time: 'all'}).then(result=>{MyResult=result});
    await r.getSubreddit(searchString).getTop({time: 'all'}).then(result=>{MyResult=result});
    return MyResult;
  };
  //r.getSubreddit('china').getTop({time: 'all'}).then(console.log)
  
  //let m=await getData()
  //console.log(m);

 

  async function GetSubRedditByHot(searchString) {
    let MyResult=undefined;
    //await r.getSubreddit(searchString).getHot({limit:ApiOption.HotPostNumber}).then(result=>{MyResult=result});
    await r.getSubreddit(searchString).getHot({limit:ApiOption.HotPostNumber}).then(result=>{MyResult=result});
    return MyResult;
  }
  
  
  export {getData, GetSubRedditByHot};