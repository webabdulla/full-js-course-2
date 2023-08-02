// keybord Events
var textarea = document.querySelector("textarea");
// textarea.addEventListener("keydown", function(){
//   console.log("keydown");
// });
// textarea.addEventListener("keypress", function(){
//   console.log("keypress");
// }); 

//SOME PROPERTIES - key, keyCode, code, shiftKey, ctlKey, repeat;
//  textarea.addEventListener("keyup", function(e){
//   console.log(e.keyCode);
// });

 textarea.addEventListener("keydown", function(e){
  if (e.repeat){
    alert("do not repeat");
  }
 });