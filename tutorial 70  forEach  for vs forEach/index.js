
//tutorial 70 : forEach | for vs forEach


// var numbers= [5,10,20,25];
// for (var x=0; x<numbers.length; x++){
//     console.log(numbers[x]);
// }

//forEach

// var numbers= [5,10,20,25];
// numbers.forEach(function(x){
//     console.log(x);
// });

var numbers= [5,10,20,25];
var squereNumbers=[];

numbers.forEach(function(x){
    squereNumbers.push(x*x);
})
console.log(squereNumbers);



//x+5

var number =[10,20,25,30];
console.log(number);
number.forEach(function(x,index,arr){
    arr[index]= x+5;
})
console.log(number);