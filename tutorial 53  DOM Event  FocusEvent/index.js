// focous elements
var input= document.querySelector("input") 
  input.addEventListener("blur", function (e){
    // input.style.backgroundColor="transparent";
    // input.style.padding="0rem";
    // console.log(e.target.value);
    input.value = e.target.value.toUpperCase();

});

input.addEventListener("focus", function(){
  // console.log("focus is occured");
  // input.style.backgroundColor="red";
  // input.style.padding="2rem";
});

// input.addEventListener("focusin", function(){
//   console.log("focusin is occured");
// });

// input.addEventListener("focusout", function(){
//   console.log("focusout is occured");
// });