
// function addStyle(){
//     var myVar=document.querySelector("#mySty");

//     myVar.style.color="red";
//     myVar.style.fontSize="3rem";
//     myVar.style.fontStyle="italic";
//     myVar.style.fontWeight="bold";

// }

function addStyle(){
    var myVar = document.querySelector("#mySty");

    myVar.classList.add("para-style");
}

function removeStyle(){
    var myVar = document.querySelector("#mySty");

    myVar.classList.remove("para-style");
}