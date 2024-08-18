var posts=["2024/08/17/javascript1day/","2024/08/13/hello-world/","2024/08/18/javascript2day/","2024/08/18/javascript3day/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };