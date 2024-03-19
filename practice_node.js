// console.log("Hello World");

// function a(){
//     const a = 10;
//     setTimeout( ()=>{
//         console.log(a);

//     },3000);

//     console.log("helllo");
// }
//a();
// const appobj = require('./app');
// console.log("inside practice");
// console.log(appobj);
// const bookObj = require('./book');
// //const validator = require('validator');

// //console.log(validator.isEmail("nayanava@example.com"));
// //console.log('inside app.js')
// console.log(bookObj);
// console.log(validator.isURL("http://google.com"));
// const detail= {
//     name : "hello",
//     qualification : "bachelor of engineering",
//     sum : function(a,b){
//         const c=a+b;
//         console.log("sum is"+c);
//         console.log(this.name);
//     }
// }
// detail.sum(10,20);
// let language = "JavaScript";

// let text = "";
// for (let x of language) {
// text += x;
// }
// console.log(text);

const radius = [2, 3, 4, 5];
const area = function (radius) {
    return Math.PI * radius * radius;
};
const circumfrence = function (radius) {
    return Math.PI * radius * 2;
};
const diameter = function (radius) {
    return 2 * radius;
};
// const calculate = function(radius,logic){
//     const result = [];
//     for(let i=0;i < radius.length;i++){
//         result.push(logic(radius[i]));
//     }
//     return result;
// };
//console.log(calculate(radius,area));
// console.log(radius.map(area));
// const arr = [1,2,3,4];
// function dobule(a){
//     return 2*a;

// }
// const output = arr.map(dobule);
// console.log(output);

// const result = arr.map((x)=> {
//     return x*3;}
//     );
// console.log(result);

// function isEven(x){
//     return x%2===0;
// }
// const ans = arr.filter(isEven);
// console.log(ans);

// function findSum(arr){

// }
const users = [
    { firstName: "vikas", lastName: "yadav", age: 23 },
    { firstName: "shashank", lastName: "singh", age: 24 },
    { firstName: "Naman", lastName: "bajpayi", age: 23 },
    { firstName: "Shubham", lastName: "jaiswal", age: 70 }

];
function findUser(x) {
    return x.firstName + x.lastName;
}
const hello = users.map(findUser);
console.log(hello);

const word = users.reduce(
    function (max, current) {
        if (max[current.age]) {
            max[current.age] = ++max[current.age];
        } else {
            max[current.age] = 1;
        }
        return max;

    }, {});
console.log(word);
function findFirstName(user) {
    if (user.age > 30) {
        return user.firstName;
    }
}
const b = users.filter((x) => x.age === 23).map((x) => {
    return x.firstName;
});
// const a = users.filter(findFirstName);
console.log(b);
