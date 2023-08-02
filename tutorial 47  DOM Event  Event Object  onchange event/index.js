console.clear();
// var input = document.querySelector("input");
// input.addEventListener("change", changeHandler);

// function changeHandler(e){
//     // console.log("changed");
//     // console.log(e);
//     //console.log(e.type);
//     //console.log(e.target);
//     //console.log(e.target.className);
//     console.log(e.target.id);
// };

const department = document.querySelector("#department");
// console.log(department);

department.addEventListener("change", handleDepartment);

function handleDepartment(e) {
  console.log(e.target.value);
}