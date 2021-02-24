
  import snoowrap from'snoowrap';
  import token from './config/redditToken'

    const r = new snoowrap({
      userAgent: token.userAgent,
      clientId: token.clientId,
      clientSecret: token.clientSecret,
      username: token.username,
      password: token.password
    });
  
    //r.getHot().map(post => post.title).then(console.log);
   // Automating moderation tasks
  //  async function getSub(){
  //     let result = await r.getSubreddit('some_subreddit_name').getModqueue({limit: 100});
  //     return result; 
  // }
  
  async function getData() {
    let MyResult=undefined;
    let response = await r.getSubreddit('china').getTop({time: 'all'})
    .then(result=>{MyResult=result});;
    return MyResult;
  }
  //r.getSubreddit('china').getTop({time: 'all'}).then(console.log)
  
  //let m=await getData()
  //console.log(m);

  export default getData;
  
  
  