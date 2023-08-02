 var students = [
    {
        id: 101,
        nsme: 'Anisul Islam',
        gpa: 3.54
    },
    {
        id: 101,
        nsme: ' Islam',
        gpa: 2.54
    },
    {
        id: 101,
        nsme: 'Rakibul Islam',
        gpa: 2.54
    },
    {
        id: 101,
        nsme: 'Mirajul Islam',
        gpa: 4.54
    }
   
 ]

 function studentsName(){
    return students.filter(function(x){
         return x.gpa > 3
     }).map(function(y){
        return y.nsme;
     }) ;
 };

  console.log(studentsName());


// var studentName2 = () =>
//     students.filter((x)=> x.gpa>3).map((y) => y.nsme);

// console.log(studentName2());  