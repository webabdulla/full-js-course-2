//Synchronous programing

var taskOne = () => {
    console.log("Task1")
};
var dataLoading = () =>{
    console.log("Task2.Data loading");
}

var taskTwo = () => {
    setTimeout(dataLoading,2000);
};


var taskThree = () => {
    console.log("Task3")
};
var taskFore = () => {
    console.log("Task4")
};
var taskFive = () => {
    console.log("Task5")
};

taskOne();
taskTwo();
taskThree();
taskFore();
taskFive();