
var photos=["img/a1.jpg", "img/pexels-andrea-piacquadio-839011.jpg", "img/bg.jpg"];
var imgTag = document.querySelector("img");


var count = 0;
function next(){
count++;

if(count >=photos.length){
    count=0;
    imgTag.src = photos[count];
}

else{
    imgTag.src = photos [count];
}


}

function next(){
    
}