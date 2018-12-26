const fs = require('fs');


//stepOne callback function
// function readFile(cb){
//     fs.readFile('./package.json',(err, data)=>{
//         if(err) return cb(err);
//
//         data = JSON.parse(data);
//         cb && cb(null, data);
//         console.log(data.name);
//     });
// }
//
// readFile((err,data) => {
//     if(!err) {
//         data = JSON.parse(data);
//
//         console.log(data.name)
//     }
// });


//stepTwo promise
// function readFileAsync(path) {
//     return new Promise((resolve, reject) =>{
//         fs.readFile(path,(err, data)=>{
//             if(err) return reject(err);
//
//             else resolve(data)
//         });
//     })
// }
//
// readFileAsync('./packge.json')
//     .then(data =>{
//         data = JSON.parse(data);
//
//         console.log(data.name)
//     })
//     .catch(err => {
//        console.log(err)
//     });

//stepThree

// const co = require('co');
//
const util = require('util');
//
// co(function *() {
//     let data = yield util.promisify(fs.readFile)('./package.json')
//
//     data = JSON.parse(data);
//
//     console.log(data.name)
// });

//stepFour Async

const readAsync = util.promisify(fs.readFile);

async function init() {
    let data = await  readAsync('./package.json');

    data = JSON.parse(data);

    console.log(data.name)
}

init();