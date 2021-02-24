
  import snoowrap from'snoowrap';
  

    const r = new snoowrap({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36',
      clientId: 'h8PCl1ykdWxcAA',
      clientSecret: 'TCmMJItd9icxcePzJ-CgRe-1TXPCUw',
      username: 'mike-tang',
      password: 'Tl6902856@@$$'
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
  
  
  