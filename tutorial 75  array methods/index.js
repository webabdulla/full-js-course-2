//  //find (callback, value) return the velue of the first elements that pass certain condition 
// var numbers= [5,55,17,14,5];
//  var firstNumber = numbers.find(x => x%2===0);
//  console.log(firstNumber);



//  //findIndex 
//  var numbers= [5,55,17,14,5];
//  var firstNumber = numbers.findIndex(x => x%2===0);
//  console.log(firstNumber);



var students = [
    {
        id : 1001,
        gpa : 3.00
    },
    {
        id : 1002,
        gpa : 2.00
    },
    {
        id : 1003,
        gpa : 3.50
    },
    {
        id : 1004,
        gpa : 4.05
    },
    {
        id : 1005,
        gpa : 5.00
    },


]

console.log(students.find(x => x.gpa>4));