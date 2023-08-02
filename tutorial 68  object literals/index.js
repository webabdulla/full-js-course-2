//object literals

function studentInfo(name, age){
    return{
        name: name,
        age: age
    }
}
// console.log(studentInfo('Rokibul Islam',29));

let message = {
    body (){
        return `Hi, I am object function`
    }
}
console.log(message.body());