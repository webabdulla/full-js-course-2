//  var hading1 = document.createElement("h1") 
//  var text = document.createTextNode("My name is mirajul Islam");

//  hading1.appendChild(text);

//  var mydiv = document.getElementById("my-div");
//  mydiv.appendChild(hading1);


var heading2 = document.createElement("h2");
var tex = document.createTextNode("my name is abdullah");

heading2.appendChild(tex);

var my = document.getElementById("my-div");
my.appendChild(heading2);

var heading5 = document.getElementsByTagName("h1")[1];
my.removeChild(heading5);