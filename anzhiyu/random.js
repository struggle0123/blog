var posts=["2024/08/13/hello-world/","2024/08/17/java-script/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };