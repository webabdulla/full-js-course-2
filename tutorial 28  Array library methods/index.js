//shipt(), unshipt(), splice(pos,noe,elel,ele2)..
//srt(),reverse()

// var names=["anis, kmil, ashik, kobir","babu"];
// console.log(names);

//shift opposite of pop

// names.shift()
// console.log(names);

// //unshift opposite of push
// names.unshift("shagor");
// console.log(names);


// //add elements using splice
// names.splice(2,0,"manik", "monir");
// console.log(names);


// At position 2, remove 2 items: 
// names.splice(2, 2);

// console.log(names)
// slice
// var newArray = names.slice(1);
//  console.log(newArray)
//  console.log(names)



//   var sortedNames = names.sort();
//   names.reverse();
//  console.log(sortedNames);


var numbers = [20, 5, 25, 45, 1];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);