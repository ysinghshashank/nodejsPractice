// //console.log("inside application");
// const book = {
//     name: 'a tale of two cities',
//     author: 'Charles Dickens',
//     price: 150
// };
// module.exports = book;
// console.log("starting");
// setTimeout(() => {
//     console.log("set time out");
// }, 2000);
// console.log("end");
const fs = require('fs');
const validator = require('validator');
const BookDetail = require('./book');
console.log("onside app.js");
console.log(BookDetail);
// fs.writeFile('./async.txt', 'Check Check', () => {
//     console.log("inside file");
// });
console.log(validator.isEmail('ysinghshashank@gmail.com'));
console.log(validator.isURL('google.com'));