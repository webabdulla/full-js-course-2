 var video = document.querySelector("video");

 video.addEventListener("canplay", function(){
  console.log("canplay");
 });
 video.addEventListener("play", function(){
  console.log("play");
 });
 video.addEventListener("playing", function(){
  console.log("playing");
 });
 video.addEventListener("pause", function(){
  console.log("pause");
 });
 video.addEventListener("ended", function(){
  console.log("Thanks for watcing");
 });
 video.addEventListener("volumechange", function(){
  console.log("volumechange");
 });