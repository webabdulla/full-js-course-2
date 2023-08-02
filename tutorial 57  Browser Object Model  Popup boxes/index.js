//  BOM Event alert, confirm, prompt

// //confirm
// function dleateSomething(){
//     let value = confirm("Do you want to delete ?");
//     if(value){
//         console.log("deleted");
//     }
//     else{
//         console.log("not deleted");
//     }
// }
// dleateSomething();


//prompt

function wellcome(){

var h1 = document.createElement('h1');
let text;
    var name = prompt("Enter your first name");
    if(
        name == null || name == ""){

            text = 'no name found'
        } else{
            text=name ;
        }
        var textNode = document.createTextNode(text);
        h1.appendChild(textNode);
        document.body.appendChild(h1);
}

wellcome();