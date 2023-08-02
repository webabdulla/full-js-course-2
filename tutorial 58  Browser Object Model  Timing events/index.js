//bom
//timing events methode
//setTimingOut(), setInterval(),




// setTimeout(() =>{
//     console.log("hi");
// },3000);



// setTimeout(display,3000);

// function display(){
//     console.log("display function");
// }


var saveButton =document.querySelector(".save-btn");
var message = document.querySelector(".message");

// saveButton.addEventListener("click", saveUser);

// function saveUser(){
//     message.textContent = "user registation successful";

//     setTimeout(()=>{
//         message.textContent="";
//     }, 3000);
// }  

saveButton.addEventListener('click', displayCount);
function displayCount(){
    let count = 1;
    message.textContent = count;

    setInterval(()=>{
        count++;
        message.textContent = count;
    }, 1000);
};
