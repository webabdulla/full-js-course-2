//map and filter array function
// var numbers= [5,10,20,25];
// var squereNumbers=[];

// numbers.forEach(function(x){
//     squereNumbers.push(x*x);
// })
// console.log(squereNumbers);


//map
var numbers= [2,3,4,5];
var squereNumbers = numbers.map(function(x){
    return x*x;
})
console.log(squereNumbers);


//filter array function

var numbers= [2,3,4,5];
var newNumbers = numbers.filter(function(x){
    return x>3;
})
console.log(newNumbers);