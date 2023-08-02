// finding the elements
var form=document.querySelector("form");
var names=document.querySelector("div #name");
var names=document.querySelector("div #email");
var names=document.querySelector("div #password");

form.addEventListener("submit",formHandler);
function formHandler(e){
  e.preventDefault();
  
  var userInfo={
    name: name.value,
    email:email.value,
    password:password.value,
  };
  console.log(userInfo);
}