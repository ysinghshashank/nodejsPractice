const fs = require('fs');
console.log("start");
fs.readFile("./class_note.txt", () => {
    console.log("read");
});
console.log("endoffile");

console.log("start");
function add(a, b) {
    const sum = a + b;
    return sum;
}
setTimeout(() => {
    console.log(add(10, 20));
}, 2000);
console.log("end");

//university result
//login validation
setTimeout(() => {
    console.log("Student logged in successfully");
    //fetch Student details
    setTimeout(() => {
        console.log("Student information fetched successfully");
        //fetch result
        setTimeout(() => {
            console.log("Fetched result successfully");
        }, 3000);
    }, 2000)
}, 2000);

//passing parameter in setTimeout

const result = setTimeout((a, b) => {
    console.log(add(a, b));
}, 2000, 5, 10);
clearTimeout(result);

//setInterval
//FUNCTION THAT PERFORM CALL BACK AFTER EVERY TIME INTERVAL
const interval = setInterval(()=>{
    console.log("interval execution")
},1000);
setTimeout(()=> {
    clearTimeout(interval)
},5000);

