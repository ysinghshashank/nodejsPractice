//let arr = ["vikas", "naman"];
let name = {
    firstName: "akshay",
    lastName: "kumar",

}
//name.printName();
//console.log(names);
printName = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + "," + state);
}

let name2 = {
    firstName: "vikas",
    lastName: "yadav",
}
printName.call(name2, "mumbai", "mah");
printName.apply(name2, ["mumbai", "mah"]);
//bind is use to keep the copy of the methord and use it later in the program
//eg
let printMyName = printName.bind(name2, "lucknow", "uttar pradesh");
console.log(printMyName);
printMyName();
